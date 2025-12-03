// src/app/api/send-email/route.ts
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const sheets = google.sheets('v4');

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
        private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const client = await auth.getClient();

    await sheets.spreadsheets.values.append({
      auth: client,
      spreadsheetId: process.env.GOOGLE_SHEETS_DOC_ID!,
      range: 'Sheet1',                   // ← make sure your tab is named Sheet1
      valueInputOption: 'RAW',
      requestBody: {
        values: [[new Date().toISOString(), name, email, message]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Google Sheets error:', error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
