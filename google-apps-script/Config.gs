  const LEAD_TRACKER_SHEETS = Object.freeze({
  RAW_LEADS: "Raw Leads",
  SALES_WORKING: "Sales Working",
  SETTINGS: "Settings",
  DASHBOARD: "Dashboard",
  SOURCE_SHEETS: {
    "Free Demo": "Free Demo Form",
    "Course Application": "Course Applications",
    "Contact Message": "Contact Messages",
    "Placement Enquiry": "Placement Enquiries",
  },
});

const RAW_LEADS_HEADERS = [
  "Submitted At",
  "Lead ID",
  "Name",
  "Phone",
  "Email",
  "Course",
  "Message",
  "Landing Page",
  "Source Form",
  "Lead Source",
  "UTM Source",
  "UTM Medium",
  "UTM Campaign",
  "UTM Content",
  "UTM Term",
  "FBCLID",
  "GCLID",
  "Referrer",
  "Device",
  "Browser",
  "IP",
  "Country",
];

const SALES_WORKING_HEADERS = [
  "Lead ID",
  "Submitted At",
  "Name",
  "Phone",
  "Email",
  "Course",
  "Lead Source",
  "Status",
  "Assigned To",
  "Stage",
  "Notes",
  "Country",
];

const SETTINGS_HEADERS = ["Key", "Value"];

const DASHBOARD_HEADERS = ["Metric", "Value", "Notes"];

function getSpreadsheet_() {
  return SpreadsheetApp.getActiveSpreadsheet();
}

function getScriptSecret_() {
  return PropertiesService.getScriptProperties().getProperty("LEAD_TRACKER_WEBHOOK_SECRET") || "";
}

function getSettingValue_(key, defaultValue) {
  const sheet = ensureSheet_(getSpreadsheet_(), LEAD_TRACKER_SHEETS.SETTINGS, SETTINGS_HEADERS);
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    const [currentKey, currentValue] = rows[i];
    if (currentKey === key) return currentValue || defaultValue;
  }
  return defaultValue;
}

function setSettingValue_(key, value) {
  const sheet = ensureSheet_(getSpreadsheet_(), LEAD_TRACKER_SHEETS.SETTINGS, SETTINGS_HEADERS);
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === key) {
      sheet.getRange(i + 1, 2).setValue(value);
      return;
    }
  }
  sheet.appendRow([key, value]);
}

function ensureWorkbookSheets_() {
  const spreadsheet = getSpreadsheet_();
  ensureSheet_(spreadsheet, LEAD_TRACKER_SHEETS.RAW_LEADS, RAW_LEADS_HEADERS);
  ensureSheet_(spreadsheet, LEAD_TRACKER_SHEETS.SALES_WORKING, SALES_WORKING_HEADERS);
  ensureSheet_(spreadsheet, LEAD_TRACKER_SHEETS.SETTINGS, SETTINGS_HEADERS);
  ensureSheet_(spreadsheet, LEAD_TRACKER_SHEETS.DASHBOARD, DASHBOARD_HEADERS);
}

function ensureSheet_(spreadsheet, sheetName, headers) {
  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
    return sheet;
  }

  const currentHeaders = sheet.getRange(1, 1, 1, headers.length).getValues()[0] || [];
  if (currentHeaders.join("||") !== headers.join("||")) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function ensureHeader_(sheet, headers) {
  const existingHeaders = sheet.getRange(1, 1, 1, headers.length).getValues()[0] || [];
  if (existingHeaders.join("||") !== headers.join("||")) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
}
