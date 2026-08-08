function refreshDashboard_(spreadsheet) {
  const rawLeadSheet = ensureSheet_(spreadsheet, LEAD_TRACKER_SHEETS.RAW_LEADS, RAW_LEADS_HEADERS);
  const dashboardSheet = ensureSheet_(spreadsheet, LEAD_TRACKER_SHEETS.DASHBOARD, DASHBOARD_HEADERS);

  const values = rawLeadSheet.getDataRange().getValues().slice(1);
  const now = new Date();

  const metrics = {
    totalLeads: 0,
    today: 0,
    week: 0,
    month: 0,
    googleAds: 0,
    metaAds: 0,
    organic: 0,
    direct: 0,
    courses: {},
    sources: {},
  };

  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfWeek = new Date(startOfToday);
  startOfWeek.setDate(startOfWeek.getDate() - startOfToday.getDay());
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  values.forEach((row) => {
    const submittedAt = new Date(row[0]);
    if (isNaN(submittedAt.getTime())) return;

    const course = String(row[5] || "Unknown");
    const source = String(row[9] || "Unknown");

    metrics.totalLeads += 1;
    if (submittedAt >= startOfToday) metrics.today += 1;
    if (submittedAt >= startOfWeek) metrics.week += 1;
    if (submittedAt >= startOfMonth) metrics.month += 1;

    if (source === "Google Ads") metrics.googleAds += 1;
    if (source === "Meta Ads" || source === "Facebook Paid" || source === "Instagram Paid") metrics.metaAds += 1;
    if (source === "Google Organic" || source === "Facebook Organic" || source === "Instagram Organic" || source === "LinkedIn" || source === "YouTube") metrics.organic += 1;
    if (source === "Direct") metrics.direct += 1;

    metrics.courses[course] = (metrics.courses[course] || 0) + 1;
    metrics.sources[source] = (metrics.sources[source] || 0) + 1;
  });

  const conversionRate = metrics.totalLeads ? Math.round((metrics.totalLeads / Math.max(1, metrics.totalLeads)) * 100) : 0;

  const dashboardRows = [
    ["Total Leads", metrics.totalLeads, ""],
    ["Leads Today", metrics.today, ""],
    ["Leads This Week", metrics.week, ""],
    ["Leads This Month", metrics.month, ""],
    ["Google Ads Leads", metrics.googleAds, ""],
    ["Meta Leads", metrics.metaAds, "Includes Facebook/Instagram"],
    ["Organic Leads", metrics.organic, "Includes Google, social and referral organic"],
    ["Direct Leads", metrics.direct, ""],
    ["Conversion Rate", `${conversionRate}%`, "Calculated from total leads"],
  ];

  let currentRow = 11;
  dashboardRows.forEach((row) => {
    dashboardSheet.getRange(currentRow++, 1, 1, row.length).setValues([row]);
  });

  dashboardSheet.getRange(1, 1, 9, 3).setValues(dashboardRows);

  dashboardSheet.getRange(11, 1, Object.keys(metrics.courses).length, 2).clearContent();
  dashboardSheet.getRange(11, 1, Object.keys(metrics.sources).length, 2).clearContent();

  let rowIndex = 11;
  Object.entries(metrics.courses).forEach(([course, count]) => {
    dashboardSheet.getRange(rowIndex++, 1, 1, 2).setValues([[`Course: ${course}`, count]]);
  });
  rowIndex = 11 + Object.keys(metrics.courses).length + 1;
  Object.entries(metrics.sources).forEach(([source, count]) => {
    dashboardSheet.getRange(rowIndex++, 1, 1, 2).setValues([[`Source: ${source}`, count]]);
  });
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Lead Tracker").addItem("Refresh Dashboard", "refreshDashboardMenu").addToUi();
}

function refreshDashboardMenu() {
  refreshDashboard_(getSpreadsheet_());
}
