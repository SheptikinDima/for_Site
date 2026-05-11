import { useState } from 'react';

export default function ConsultForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      service: form.service.value,
      phone: form.phone.value,
      name: form.name.value,
      date: new Date().toLocaleString('ru-RU'),
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwriqlNky7GmYvxrp-t5Jray-9wcucviZNFKZ8sNDUyLs3kDDC_NEqnuQPhrhP_S7fX/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setSent(true);
    } catch (error) {
      alert('Ошибка отправки. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div style={{ fontSize: 18, lineHeight: 1.4 }}>
        Спасибо! Заявка отправлена. Сотрудник Центра карьеры свяжется с вами в течение рабочего дня.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid" style={{ gap: 18 }}>
      <div className="grid">
        <label>Ваше имя</label>
        <input
          className="input"
          name="name"
          placeholder="Введите имя"
          required
        />
      </div>

      <div className="grid">
        <label>Тип обращения</label>
        <select className="input" name="service" required>
          <option>Консультация по практике</option>
          <option>Вопрос по текущему месту прохождения практики</option>
          <option>Запись на стажировку</option>
          <option>Запрос на партнёрство</option>
          <option>Вопрос по трудоустройству</option>
        </select>
      </div>

      <div className="grid">
        <label>Телефон</label>
        <input
          className="input"
          name="phone"
          placeholder="+7 ___ ___-__-__"
          required
        />
      </div>

      <button className="btn btn-primary" style={{ height: 52 }} disabled={loading}>
        {loading ? 'Отправка...' : 'Оставить заявку'}
      </button>
    </form>
  );
}