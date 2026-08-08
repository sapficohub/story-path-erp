function appendSalesLead_(leadId, submittedAt, lead) {
  const sheet = ensureSheet_(getSpreadsheet_(), LEAD_TRACKER_SHEETS.SALES_WORKING, SALES_WORKING_HEADERS);
  const row = [
    leadId,
    formatDateTime_(submittedAt),
    normalizeString_(lead.name, 200),
    normalizeString_(lead.phone, 100),
    normalizeString_(lead.email, 200),
    normalizeString_(lead.module, 200),
    detectLeadSource_(lead),
    normalizeString_(lead.status, 200) || "New",
    normalizeString_(lead.assigned_to, 200) || "Unassigned",
    normalizeString_(lead.stage, 200) || "Open",
    normalizeString_(lead.notes, 2000),
    normalizeString_(lead.country, 100),
  ];

  const rowNumber = firstEmptyRow_(sheet, 1, 2);
  sheet.getRange(rowNumber, 1, 1, row.length).setValues([row]);
}
