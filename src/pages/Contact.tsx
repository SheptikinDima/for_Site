import ConsultForm from '../components/ConsultForm';

export default function Contact() {
  return (
    <div style={{ background: '#0f1115', color: '#fff', minHeight: '100vh' }}>
      <section className="section" id="consult">
        <div className="container">
          <h1
            style={{
              fontSize: 52,
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            Контакты
          </h1>

          <p
            style={{
              fontSize: 22,
              maxWidth: 760,
              color: 'rgba(255,255,255,0.78)',
              marginBottom: 48,
              lineHeight: 1.4,
            }}
          >
            Свяжитесь с Центром карьеры Московского Политеха, чтобы получить консультацию
            по практике, стажировкам, вакансиям и партнёрским программам.
          </p>

          <div className="grid grid-2" style={{ gap: 32, alignItems: 'stretch' }}>
            <div
              className="card dark"
              style={{
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h2 style={{ marginTop: 0, marginBottom: 24 }}>Центр карьеры</h2>

                <p><b>Телефон:</b> +7 (495) 223-05-23</p>
                <p><b>Email:</b> career@mospolytech.ru</p>
                <p><b>Адрес:</b> Москва, Большая Семёновская, 32</p>
                <p><b>График:</b> Пн–Пт 9:30–18:00</p>
              </div>

              <div style={{ marginTop: 32 }}>
                <div
                  style={{
                    display: 'inline-flex',
                    padding: '10px 16px',
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.82)',
                    fontSize: 14,
                  }}
                >
                  Практика • Стажировки • Вакансии • Партнёрство
                </div>
              </div>
            </div>

            <div className="card dark" style={{ padding: 32 }}>
              <h2 style={{ marginTop: 0, marginBottom: 24 }}>Оставить заявку</h2>
              <ConsultForm />
            </div>
          </div>

          <div
            style={{
              marginTop: 40,
              borderRadius: 28,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.12)',
              minHeight: 420,
              background: '#1b1f26',
            }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=Москва%2C%20Большая%20Семёновская%2C%2032&z=16"
              width="100%"
              height="420"
              frameBorder="0"
              allowFullScreen
              style={{ display: 'block', border: 0 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}