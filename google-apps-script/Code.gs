const SOURCE_SHEETS = Object.freeze({
  "Free Demo": "Free Demo Form",
  "Course Application": "Course Applications",
  "Contact Message": "Contact Messages",
  "Placement Enquiry": "Placement Enquiries",
});

function doPost(event) {
  try {
    const lead = JSON.parse(event.postData.contents || "{}");
    const expectedSecret = PropertiesService.getScriptProperties().getProperty(
      "LEAD_TRACKER_WEBHOOK_SECRET",
    );

    if (!expectedSecret || lead.tracker_secret !== expectedSecret) {
      return jsonResponse_({ success: false, error: "Unauthorized" });
    }

    const targetSheetName = SOURCE_SHEETS[lead.source_form];
    if (!targetSheetName) {
      return jsonResponse_({ success: false, error: "Invalid source form" });
    }

    const submittedAt = lead.submitted_at ? new Date(lead.submitted_at) : new Date();
    if (Number.isNaN(submittedAt.getTime())) {
      return jsonResponse_({ success: false, error: "Invalid submission time" });
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const leadId = appendToMaster_(spreadsheet, submittedAt, lead);
      appendToSource_(spreadsheet, targetSheetName, submittedAt, lead);
      SpreadsheetApp.flush();
      return jsonResponse_({ success: true, lead_id: leadId });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    console.error(error);
    return jsonResponse_({ success: false, error: "Unable to save lead" });
  }
}

function appendToMaster_(spreadsheet, submittedAt, lead) {
  const sheet = requiredSheet_(spreadsheet, "Master Leads");
  const rowNumber = firstEmptyRow_(sheet, 6);

  // Columns A and S contain the workbook's Lead ID and Days Open formulas.
  sheet
    .getRange(rowNumber, 2, 1, 17)
    .setValues([
      [
        dateOnly_(submittedAt),
        timeOnly_(submittedAt),
        lead.source_form,
        lead.landing_page || "",
        lead.name || "",
        lead.phone || "",
        lead.email || "",
        lead.qualification || "",
        normalizeStatus_(lead.status),
        normalizeModule_(lead.module),
        lead.message || "",
        "New",
        "Medium",
        "Unassigned",
        "",
        "",
        attributionNotes_(lead),
      ],
    ]);

  SpreadsheetApp.flush();
  return (
    sheet.getRange(rowNumber, 1).getDisplayValue() ||
    `NGE-${Utilities.formatString("%04d", rowNumber - 4)}`
  );
}

function appendToSource_(spreadsheet, sheetName, submittedAt, lead) {
  const commonStart = [dateOnly_(submittedAt), timeOnly_(submittedAt)];
  const commonEnd = ["New", "Medium", "Unassigned", "", attributionNotes_(lead)];
  let row;

  if (sheetName === "Free Demo Form") {
    row = [
      ...commonStart,
      lead.name,
      lead.phone,
      lead.email,
      lead.qualification || "",
      normalizeStatus_(lead.status),
      normalizeModule_(lead.module),
      ...commonEnd,
    ];
  } else if (sheetName === "Course Applications") {
    row = [
      ...commonStart,
      lead.landing_page || "",
      lead.name,
      lead.phone,
      lead.email,
      lead.qualification || "",
      normalizeStatus_(lead.status),
      normalizeModule_(lead.module),
      ...commonEnd,
    ];
  } else if (sheetName === "Contact Messages") {
    row = [
      ...commonStart,
      lead.name,
      lead.phone,
      lead.email,
      normalizeModule_(lead.module),
      lead.message || "",
      ...commonEnd,
    ];
  } else {
    row = [
      ...commonStart,
      lead.name,
      lead.phone,
      lead.email,
      lead.qualification || "",
      normalizeStatus_(lead.status),
      normalizeModule_(lead.module),
      lead.message || "",
      ...commonEnd,
    ];
  }

  const sheet = requiredSheet_(spreadsheet, sheetName);
  const nameColumn = sheetName === "Course Applications" ? 4 : 3;
  const rowNumber = firstEmptyRow_(sheet, nameColumn);
  sheet.getRange(rowNumber, 1, 1, row.length).setValues([row]);
}

function firstEmptyRow_(sheet, keyColumn) {
  const firstDataRow = 5;
  const availableRows = sheet.getMaxRows() - firstDataRow + 1;
  const values = sheet.getRange(firstDataRow, keyColumn, availableRows, 1).getDisplayValues();
  const emptyOffset = values.findIndex(([value]) => !value.trim());

  if (emptyOffset === -1) {
    throw new Error(`No empty rows remain in ${sheet.getName()}`);
  }

  return firstDataRow + emptyOffset;
}

function requiredSheet_(spreadsheet, name) {
  const sheet = spreadsheet.getSheetByName(name);
  if (!sheet) throw new Error(`Missing sheet: ${name}`);
  return sheet;
}

function normalizeStatus_(value) {
  const statuses = {
    Fresher: "Student / Fresher",
    Experienced: "Working Professional",
    "Career Gap": "Career Gap",
  };
  return statuses[value] || value || "Other";
}

function normalizeModule_(value) {
  if (value === "Not sure yet") return "Not Sure";
  if (value === "SuccessFactors") return "SAP SuccessFactors";
  return value || "Not Sure";
}

function attributionNotes_(lead) {
  return [
    lead.utm_source && `UTM source: ${lead.utm_source}`,
    lead.utm_medium && `UTM medium: ${lead.utm_medium}`,
    lead.utm_campaign && `UTM campaign: ${lead.utm_campaign}`,
    lead.ref && `Referral: ${lead.ref}`,
  ]
    .filter(Boolean)
    .join(" | ");
}

function dateOnly_(date) {
  return Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy-MM-dd");
}

function timeOnly_(date) {
  return Utilities.formatDate(date, Session.getScriptTimeZone(), "HH:mm:ss");
}

function jsonResponse_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
