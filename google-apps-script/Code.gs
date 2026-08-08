const SOURCE_SHEETS = LEAD_TRACKER_SHEETS.SOURCE_SHEETS;

function doPost(event) {
  try {
    const lead = parseIncomingLead_(event);
    const expectedSecret = getScriptSecret_();

    if (!expectedSecret || normalizeString_(lead.tracker_secret, 200) !== expectedSecret) {
      return jsonResponse_({ success: false, error: "Unauthorized" });
    }

    const submittedAt = normalizeTimestamp_(lead.submitted_at);
    const leadSource = normalizeString_(lead.lead_source, 200) || detectLeadSource_(lead);
    const sourceForm = normalizeFormSource_(lead.source_form);
    const targetSheetName = SOURCE_SHEETS[sourceForm] || LEAD_TRACKER_SHEETS.RAW_LEADS;

    const spreadsheet = getSpreadsheet_();
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const rawLeadId = buildLeadId_(ensureSheet_(spreadsheet, LEAD_TRACKER_SHEETS.RAW_LEADS, RAW_LEADS_HEADERS), submittedAt);
      appendRawLead_(submittedAt, lead, rawLeadId);
      appendSourceLead_(spreadsheet, targetSheetName, submittedAt, lead, rawLeadId, leadSource);
      refreshDashboard_(spreadsheet);
      return jsonResponse_({ success: true, lead_id: rawLeadId });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    console.error(error);
    return jsonResponse_({ success: false, error: error.message || "Unable to process lead." });
  }
}

function appendSourceLead_(spreadsheet, sheetName, submittedAt, lead, leadId, leadSource) {
  const sheet = ensureSheet_(spreadsheet, sheetName, RAW_LEADS_HEADERS);
  const row = [
    formatDateTime_(submittedAt),
    leadId,
    normalizeString_(lead.name, 200),
    normalizeString_(lead.phone, 100),
    normalizeString_(lead.email, 200),
    normalizeString_(lead.module, 200),
    normalizeString_(lead.message, 2000),
    normalizeFormSource_(lead.source_form),
    leadSource,
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
