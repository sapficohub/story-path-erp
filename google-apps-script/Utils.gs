function jsonResponse_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}

function parseIncomingLead_(event) {
  if (!event || !event.postData || !event.postData.contents) {
    throw new Error("Missing request body.");
  }

  try {
    return JSON.parse(event.postData.contents);
  } catch (error) {
    throw new Error("Invalid JSON payload.");
  }
}

function normalizeString_(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function normalizeTimestamp_(value) {
  const timestamp = value ? new Date(value) : new Date();
  if (isNaN(timestamp.getTime())) return new Date();
  return timestamp;
}

function formatDateTime_(date) {
  return Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
}

function buildLeadId_(sheet, submittedAt) {
  const prefix = getSettingValue_("Lead ID Prefix", "NGE");
  const row = firstEmptyRow_(sheet, 1, 1);
  const sequence = String(row - 1).padStart(4, "0");
  const dateString = Utilities.formatDate(submittedAt, Session.getScriptTimeZone(), "yyyyMMdd");
  return `${prefix}-${dateString}-${sequence}`;
}

function firstEmptyRow_(sheet, keyColumn, headerRow) {
  const firstDataRow = headerRow || 2;
  const lastRow = sheet.getMaxRows();
  const values = sheet.getRange(firstDataRow, keyColumn, lastRow - firstDataRow + 1, 1).getValues();
  for (let index = 0; index < values.length; index++) {
    if (!values[index][0] || String(values[index][0]).trim() === "") {
      return firstDataRow + index;
    }
  }
  return lastRow + 1;
}
