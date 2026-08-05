# Connect the lead tracker to the website

1. Upload `Next_Gen_ERP_Website_Forms_and_Lead_Tracker.xlsx` to Google Drive and open it with Google Sheets. Use **File → Save as Google Sheets** so the script is bound to a Google Sheet rather than the uploaded Excel file.
2. In that Google Sheet, open **Extensions → Apps Script** and replace the editor contents with `Code.gs` from this folder.
3. In **Project Settings → Script properties**, add `LEAD_TRACKER_WEBHOOK_SECRET` with a long random value.
4. Choose **Deploy → New deployment → Web app**. Execute as yourself and allow access to anyone.
5. Copy the deployment URL into `LEAD_TRACKER_WEBHOOK_URL` in the website environment. Put the same random value in `LEAD_TRACKER_WEBHOOK_SECRET`. In Vercel, add both under **Project Settings → Environment Variables** for Production, Preview, and Development.
6. Set the Apps Script project time zone to **Asia/Kolkata**, deploy the website, and submit one test form.

Each submission is written to `Master Leads` and its matching source sheet. The existing dashboard reads from `Master Leads`.
