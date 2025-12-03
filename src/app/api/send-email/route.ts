import { GoogleSpreadsheet } from 'google-spreadsheet';
import { NextResponse } from 'next/server';

// Create doc instance
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_DOC_ID!);

async function appendToSheet(data: { name: string; email: string; message: string }) {
  console.log('Authenticating with Google...');
  
  // v4 syntax — CORRECT
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
  });

  console.log('Loading spreadsheet...');
  await doc.loadInfo();
  console.log('Spreadsheet title:', doc.title);

  const sheet = doc.sheetsByIndex[0];
  console.log('Using sheet:', sheet.title);

  // Add header if empty
  if ((await sheet.rowCount) === 0) {
    console.log('Adding header row...');
    await sheet.setHeaderRow(['Timestamp', 'Name', 'Email', 'Message']);
  }

  console.log('Appending data:', data);
  await sheet.addRow({
    Timestamp: new Date().toISOString(),
    Name: data.name,
    Email: data.email,
    Message: data.message,
  });

  console.log('SUCCESS: Row added to Google Sheets!');
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
  }

  try {
    await appendToSheet(body);
    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error('FULL ERROR:', e);
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}