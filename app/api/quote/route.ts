import { NextResponse } from 'next/server';

/**
 * Mock teklif gönderim endpoint'i.
 * Gerçek entegrasyon (e-posta / CRM) için burada işleyiş genişletilebilir.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basit doğrulama
    if (!body?.name || !body?.phone) {
      return NextResponse.json(
        { ok: false, error: 'Ad ve telefon zorunludur.' },
        { status: 400 }
      );
    }

    // Sunucu tarafı simülasyonu (gerçek gönderim yerine)
    console.log('[Teklif Talebi]', {
      ...body,
      receivedAt: new Date().toISOString(),
    });

    await new Promise((resolve) => setTimeout(resolve, 900));

    return NextResponse.json({ ok: true, message: 'Talep alındı.' });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Geçersiz istek.' },
      { status: 400 }
    );
  }
}
