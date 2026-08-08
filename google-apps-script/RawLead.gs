function createOrRefreshSheets_() {
  const spreadsheet = getSpreadsheet_();
  ensureWorkbookSheets_();
  refreshDashboard_(spreadsheet);
}

function appendRawLead_(submittedAt, lead, leadId) {
  const sheet = ensureSheet_(getSpreadsheet_(), LEAD_TRACKER_SHEETS.RAW_LEADS, RAW_LEADS_HEADERS);
  const row = [
    formatDateTime_(submittedAt),
    leadId,
    normalizeString_(lead.name, 200),
    normalizeString_(lead.phone, 100),
    normalizeString_(lead.email, 200),
    normalizeString_(lead.module, 200),
    normalizeString_(lead.message, 2000),
    normalizeString_(lead.landing_page, 1000),
    normalizeFormSource_(lead.source_form),
    detectLeadSource_(lead),
    normalizeString_(lead.utm_source, 200),
    normalizeString_(lead.utm_medium, 200),
    normalizeString_(lead.utm_campaign, 200),
    normalizeString_(lead.utm_content, 200),
    normalizeString_(lead.utm_term, 200),
    normalizeString_(lead.fbclid, 200),
    normalizeString_(lead.gclid, 200),
    normalizeString_(lead.referrer, 1000),
    normalizeString_(lead.device, 200),
    normalizeString_(lead.browser, 200),
    normalizeString_(lead.ip, 100),
    normalizeString_(lead.country, 100),
  ];

  const rowNumber = firstEmptyRow_(sheet, 1, 2);
  sheet.getRange(rowNumber, 1, 1, row.length).setValues([row]);
}

function getLeadSourceFromLead_(lead) {
  return detectLeadSource_(lead);
}

function getLeadIdForRow_(sheet) {
  return buildLeadId_(sheet, new Date());
}
