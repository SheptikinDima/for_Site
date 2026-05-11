export default function About() {
  const stats = [
    ['18 000+', 'студентов'],
    ['2000+', 'выпускников в 2024 году'],
    ['250+', 'проектов студентов ежегодно'],
    ['6', 'факультетов'],
    ['3', 'института'],
    ['6', 'филиалов'],
  ];

  const formats = [
    'Образовательная деятельность',
    'Проектная деятельность',
    'Научная деятельность',
    'Реализация программ ДПО',
    'Практики и стажировки',
    'Трудоустройство и карьерные мероприятия',
  ];

  const offers = [
    ['Информационное', 'поле и коммуникации'],
    ['Подбор', 'кадров'],
    ['Организацию', 'карьерных событий'],
    ['Имиджевое', 'продвижение бренда'],
    ['Брендированные', 'аудитории и лаборатории'],
  ];

  const ecosystemItems = [
    'Студенты',
    'Выпускники',
    'Работодатели',
    'Кафедры',
    'Партнёры',
    'Карьерные мероприятия',
  ];

  const floatingCards = [
    'Практика',
    'Стажировка',
    'Вакансия',
    'Портфолио',
    'Собеседование',
    'HR-бренд',
  ];

  return (
    <div style={{ background: '#fff', color: '#111' }}>
      {/* HERO */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <video
          src="/hero2.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.74) 0%, rgba(0,0,0,0.48) 45%, rgba(0,0,0,0.25) 100%)',
            zIndex: 1,
          }}
        />

        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1600px',
            paddingLeft: '80px',
            paddingRight: '40px',
          }}
        >
          <div
            style={{
              maxWidth: 760,
              marginLeft: 0,
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                padding: '10px 18px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.14)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 28,
              }}
            >
              Центр карьеры • Московский Политех
            </div>

            <h1
              style={{
                fontSize: 72,
                lineHeight: 0.95,
                color: '#fff',
                marginTop: 0,
                marginBottom: 28,
              }}
            >
              Центр карьеры
              <br />
              Московского Политеха
            </h1>

            <p
              style={{
                fontSize: 24,
                lineHeight: 1.4,
                color: 'rgba(255,255,255,0.92)',
                maxWidth: 680,
                marginBottom: 36,
              }}
            >
              Мы формируем доступную и эффективную систему
              взаимодействия студентов, выпускников и работодателей
              через практики, стажировки, карьерные мероприятия
              и партнёрские программы.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 14,
              }}
            >
              {[
                'Практика',
                'Стажировки',
                'Вакансии',
                'Карьерные мероприятия',
                'Партнёры',
              ].map((item, index) => (
                <div
                  key={item}
                  style={{
                    padding: '12px 18px',
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.14)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    backdropFilter: 'blur(12px)',
                    color: '#fff',
                    fontWeight: 600,
                    animation: `floatCard ${4 + index * 0.4}s ease-in-out infinite`,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="section">
        <div className="container">
          <section style={{ marginBottom: 64 }}>
            <h2
              style={{
                textAlign: 'center',
                fontSize: 42,
                marginBottom: 32,
                color: 'var(--brand)',
              }}
            >
              Московский Политех — это
            </h2>

            <div className="grid grid-3" style={{ gap: 20 }}>
              {stats.map(([number, text]) => (
                <div
                  key={text}
                  className="card"
                  style={{
                    textAlign: 'center',
                    padding: 28,
                  }}
                >
                  <div
                    style={{
                      fontSize: 38,
                      fontWeight: 900,
                      color: 'var(--brand)',
                      marginBottom: 8,
                    }}
                  >
                    {number}
                  </div>

                  <div style={{ fontSize: 18 }}>{text}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 64 }}>
            <div className="card" style={{ padding: 32 }}>
              <h2 style={{ marginTop: 0, marginBottom: 20 }}>
                Реализуем следующие уровни профессионального образования:
              </h2>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 16,
                  alignItems: 'center',
                }}
              >
                {[
                  'Бакалавриат',
                  'Специалитет и магистратура',
                  'Аспирантура',
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: '12px 18px',
                      borderRadius: 14,
                      background: '#f2f3ff',
                      fontSize: 18,
                    }}
                  >
                    {item}
                  </div>
                ))}

                <div
                  style={{
                    padding: '12px 18px',
                    borderRadius: 14,
                    background: 'var(--brand)',
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: 700,
                  }}
                >
                  100+ программ ДПО и переподготовки
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: 72 }}>
            <h2
              style={{
                textAlign: 'center',
                fontSize: 38,
                marginBottom: 32,
                color: 'var(--brand)',
              }}
            >
              Форматы взаимодействия с университетом
            </h2>

            <div className="grid grid-3" style={{ gap: 8 }}>
              {formats.map((item, index) => (
                <div
                  key={item}
                  style={{
                    minHeight: 130,
                    borderRadius: 14,
                    background:
                      index % 2 === 0
                        ? '#b8bcf5'
                        : 'var(--brand)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: 24,
                    fontSize: 22,
                    fontWeight: 600,
                    lineHeight: 1.1,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 56 }}>
            <h2
              style={{
                textAlign: 'center',
                fontSize: 42,
                marginBottom: 16,
                color: 'var(--brand)',
              }}
            >
              Центр карьеры. Кто мы?
            </h2>

            <p
              style={{
                textAlign: 'center',
                fontSize: 22,
                maxWidth: 1000,
                margin: '0 auto 32px',
                lineHeight: 1.35,
              }}
            >
              Центр карьеры помогает студентам и выпускникам
              выстраивать профессиональный путь:
              находить практику, стажировки, вакансии,
              участвовать в карьерных событиях
              и взаимодействовать с работодателями.
            </p>

            <h3
              style={{
                textAlign: 'center',
                fontSize: 28,
                marginBottom: 32,
              }}
            >
              Мы предлагаем:
            </h3>

            <div className="grid grid-2" style={{ gap: 24 }}>
              {offers.map(([title, text]) => (
                <div
                  key={title}
                  className="card"
                  style={{ padding: 28 }}
                >
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 900,
                      color: 'var(--brand)',
                      marginBottom: 6,
                    }}
                  >
                    {title}
                  </div>

                  <div style={{ fontSize: 22 }}>
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 72 }}>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 32,
                padding: '64px 32px',
                background:
                  'linear-gradient(135deg, var(--brand), #1f2fd6)',
                color: '#fff',
                minHeight: 560,
              }}
            >
              <h2
                style={{
                  textAlign: 'center',
                  fontSize: 38,
                  marginTop: 0,
                  marginBottom: 16,
                }}
              >
                Экосистема карьеры Московского Политеха
              </h2>

              <p
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  maxWidth: 820,
                  margin: '0 auto 56px',
                  lineHeight: 1.4,
                }}
              >
                Центр карьеры объединяет студентов,
                выпускников, работодателей и университетские
                подразделения в единую среду профессионального развития.
              </p>

              <div
                style={{
                  position: 'relative',
                  maxWidth: 900,
                  minHeight: 340,
                  margin: '0 auto',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 210,
                    height: 210,
                    borderRadius: '50%',
                    background: '#fff',
                    color: 'var(--brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontSize: 26,
                    fontWeight: 900,
                    lineHeight: 1.05,
                    zIndex: 3,
                  }}
                >
                  Центр
                  <br />
                  карьеры
                </div>

                {ecosystemItems.map((item, index) => {
                  const positions = [
                    { left: '8%', top: '8%' },
                    { left: '68%', top: '8%' },
                    { left: '0%', top: '46%' },
                    { left: '74%', top: '46%' },
                    { left: '18%', top: '78%' },
                    { left: '58%', top: '78%' },
                  ];

                  return (
                    <div
                      key={item}
                      style={{
                        position: 'absolute',
                        ...positions[index],
                        width: 220,
                        minHeight: 72,
                        borderRadius: 20,
                        background: 'rgba(255,255,255,0.16)',
                        border:
                          '1px solid rgba(255,255,255,0.32)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '16px 18px',
                        fontSize: 18,
                        fontWeight: 700,
                        backdropFilter: 'blur(8px)',
                        zIndex: 2,
                      }}
                    >
                      {item}
                    </div>
                  );
                })}

                {floatingCards.map((item, index) => {
                  const floatPositions = [
                    { left: '4%', top: '30%' },
                    { left: '82%', top: '28%' },
                    { left: '30%', top: '2%' },
                    { left: '44%', top: '88%' },
                    { left: '8%', top: '70%' },
                    { left: '76%', top: '74%' },
                  ];

                  return (
                    <div
                      key={item}
                      style={{
                        position: 'absolute',
                        ...floatPositions[index],
                        padding: '8px 14px',
                        borderRadius: 999,
                        background: 'rgba(255,255,255,0.22)',
                        fontSize: 14,
                        fontWeight: 600,
                        zIndex: 1,
                        animation: `floatCard ${
                          4 + index * 0.4
                        }s ease-in-out infinite`,
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}