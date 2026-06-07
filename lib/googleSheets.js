import { google } from "googleapis";

// Column headers for the sheet (Row 1)
const HEADERS = [
  "Timestamp",
  "Name",
  "Email",
  "Mobile",
  "Business Type",
  "City",
  "Company Name",
  "Website Link",
  "Preferred Date",
];

/**
 * Returns an authenticated Google Sheets client using
 * the service account credentials stored in environment variables.
 */
async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const authClient = await auth.getClient();
  return google.sheets({ version: "v4", auth: authClient });
}

/**
 * Ensures the first row of the sheet contains column headers.
 * If the sheet is empty, it writes the header row first.
 */
async function ensureHeaders(sheets, spreadsheetId) {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Sheet1!A1:I1",
  });

  const existingValues = response.data.values;
  if (!existingValues || existingValues.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      requestBody: { values: [HEADERS] },
    });
  }
}

/**
 * Appends a new row of form data to the Google Sheet.
 * @param {Object} formData - The submitted form fields
 */
export async function appendToSheet(formData) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!spreadsheetId || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    throw new Error("Google Sheets environment variables are not configured.");
  }

  const sheets = await getSheetsClient();

  // Auto-create header row if sheet is empty
  await ensureHeaders(sheets, spreadsheetId);

  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const row = [
    now,
    formData.name || "",
    formData.email || "",
    formData.mobile || "",
    formData.businessType || "Builder",
    formData.city || "",
    formData.companyName || "",
    formData.websiteLink || "",
    formData.preferredDate || "",
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A1",
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });

  return true;
}
