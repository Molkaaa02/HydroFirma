import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ success: true, message: 'Form temporarily disabled – site live!' });
}
