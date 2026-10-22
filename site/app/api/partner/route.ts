import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_TYPES = [
  'Pilot / PoC',
  'Licensing',
  'Co-development',
  'R&D',
  'Investment',
  'Banking partnership',
  'Islamic finance',
  'Other',
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, org, type, message, consent } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !org?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!consent) {
      return NextResponse.json({ error: 'Consent is required' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    if (type && !ALLOWED_TYPES.includes(type)) {
      return NextResponse.json({ error: 'Invalid partnership type' }, { status: 400 });
    }
    // Honeypot check
    if (body._hp) {
      return NextResponse.json({ ok: true });
    }

    // In production: send via email provider (Resend, SendGrid, etc.)
    // For now: log to console
    console.log('[KafoAI] Partnership enquiry received:', {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      org: org.trim(),
      type: type ?? 'Not specified',
      message: message.trim().slice(0, 500),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, message: 'Enquiry received. We will be in touch shortly.' });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
