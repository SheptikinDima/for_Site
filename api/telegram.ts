// api/telegram.ts — Vercel Serverless Function
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method Not Allowed' });
    return;
  }

  try {
    const { service, phone } = req.body ?? {};
    if (!service || !phone) {
      res.status(400).json({ ok: false, error: 'Missing fields' });
      return;
    }

    // значения берём из переменных окружения Vercel
    const token  = process.env.TELEGRAM_BOT_TOKEN as string;
    const chatId = process.env.TELEGRAM_CHAT_ID as string;

    if (!token || !chatId) {
      res.status(500).json({ ok: false, error: 'Env vars are not set' });
      return;
    }

    const text =
      `🧱 Новая заявка с сайта\n` +
      `• Услуга: ${service}\n` +
      `• Телефон: ${phone}\n` +
      `⏱ ${new Date().toLocaleString('ru-RU')}`;

    const tgResp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });

    const data = await tgResp.json();
    if (!data.ok) throw new Error(JSON.stringify(data));

    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'TG send failed' });
  }
}
