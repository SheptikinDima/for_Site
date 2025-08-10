export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false });

  try {
    const { service, phone } = req.body || {};
    if (!service || !phone) return res.status(400).json({ ok:false });

    const token  = process.env.TELEGRAM_BOT_TOKEN!;
    const chatId = process.env.TELEGRAM_CHAT_ID!;
    const text =
      `🧱 Новая заявка\n` +
      `• Услуга: ${service}\n` +
      `• Телефон: ${phone}\n` +
      `⏱ ${new Date().toLocaleString('ru-RU')}`;

    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });
    const data = await r.json();
    if (!data.ok) throw new Error(JSON.stringify(data));

    res.status(200).json({ ok:true });
  } catch (e:any) {
    res.status(500).json({ ok:false, error:e?.message });
  }
}
