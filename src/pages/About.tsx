import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion'

function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, value, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplay(Math.round(latest))
      },
    })

    return () => controls.stop()
  }, [isInView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString('ru-RU')}
      {suffix}
    </span>
  )
}

function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ marginBottom: 64 }}
    >
      {children}
    </motion.section>
  )
}
export default function About() {
  const stats = [
    { value: 18000, suffix: '+', text: 'студентов' },
    { value: 2000, suffix: '+', text: 'выпускников в 2024 году' },
    { value: 250, suffix: '+', text: 'проектов студентов ежегодно' },
    { value: 6, suffix: '', text: 'факультетов' },
    { value: 3, suffix: '', text: 'института' },
    { value: 6, suffix: '', text: 'филиалов' },
  ]

  const formats = [
    'Образовательная деятельность',
    'Проектная деятельность',
    'Научная деятельность',
    'Реализация программ ДПО',
    'Практики и стажировки',
    'Трудоустройство и карьерные мероприятия',
  ]

  const offers = [
    ['Информационное', 'поле и коммуникации'],
    ['Подбор', 'кадров'],
    ['Организацию', 'карьерных событий'],
    ['Имиджевое', 'продвижение бренда'],
    ['Брендированные', 'аудитории и лаборатории'],
  ]

  const ecosystemItems = [
    'Студенты',
    'Выпускники',
    'Работодатели',
    'Кафедры',
    'Партнёры',
    'Карьерные мероприятия',
  ]

  const floatingCards = [
    'Практика',
    'Стажировка',
    'Вакансия',
    'Портфолио',
    'Собеседование',
    'HR-бренд',
  ]

  return (
    <div style={{ background: '#fff', color: '#111' }}>
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
          <motion.div
            style={{ maxWidth: 760 }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
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
              Мы формируем доступную и эффективную систему взаимодействия
              студентов, выпускников и работодателей через практики,
              стажировки, карьерные мероприятия и партнёрские программы.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
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
          </motion.div>
        </div>
      </section>

      <div className="section">
        <div className="container">
          <AnimatedSection>
            <h2 style={{ textAlign: 'center', fontSize: 42, marginBottom: 32, color: 'var(--brand)' }}>
              Московский Политех — это
            </h2>

            <div className="grid grid-3" style={{ gap: 20 }}>
              {stats.map((item, index) => (
                <motion.div
                  key={item.text}
                  className="card"
                  style={{ textAlign: 'center', padding: 28 }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div
                    style={{
                      fontSize: 38,
                      fontWeight: 900,
                      color: 'var(--brand)',
                      marginBottom: 8,
                    }}
                  >
                    <CountUp value={item.value} suffix={item.suffix} />
                  </div>

                  <div style={{ fontSize: 18 }}>{item.text}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card" style={{ padding: 32 }}>
              <h2 style={{ marginTop: 0, marginBottom: 20 }}>
                Реализуем следующие уровни профессионального образования:
              </h2>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
                {['Бакалавриат', 'Специалитет и магистратура', 'Аспирантура'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    style={{
                      padding: '12px 18px',
                      borderRadius: 14,
                      background: '#f2f3ff',
                      fontSize: 18,
                    }}
                  >
                    {item}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
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
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 style={{ textAlign: 'center', fontSize: 38, marginBottom: 32, color: 'var(--brand)' }}>
              Форматы взаимодействия с университетом
            </h2>

            <div className="grid grid-3" style={{ gap: 8 }}>
              {formats.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  style={{
                    minHeight: 130,
                    borderRadius: 14,
                    background: index % 2 === 0 ? '#b8bcf5' : 'var(--brand)',
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
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 style={{ textAlign: 'center', fontSize: 42, marginBottom: 16, color: 'var(--brand)' }}>
              Центр карьеры. Кто мы?
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{
                textAlign: 'center',
                fontSize: 22,
                maxWidth: 1000,
                margin: '0 auto 32px',
                lineHeight: 1.35,
              }}
            >
              Центр карьеры помогает студентам и выпускникам выстраивать профессиональный путь:
              находить практику, стажировки, вакансии, участвовать в карьерных событиях
              и взаимодействовать с работодателями.
            </motion.p>

            <h3 style={{ textAlign: 'center', fontSize: 28, marginBottom: 32 }}>
              Мы предлагаем:
            </h3>

            <div className="grid grid-2" style={{ gap: 24 }}>
              {offers.map(([title, text], index) => (
                <motion.div
                  key={title}
                  className="card"
                  style={{ padding: 28 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--brand)', marginBottom: 6 }}>
                    {title}
                  </div>
                  <div style={{ fontSize: 22 }}>{text}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 32,
                padding: '64px 32px',
                background: 'linear-gradient(135deg, var(--brand), #1f2fd6)',
                color: '#fff',
                minHeight: 680,
              }}
            >
              <h2 style={{ textAlign: 'center', fontSize: 38, marginTop: 0, marginBottom: 16 }}>
                Экосистема карьеры Московского Политеха
              </h2>

              <p style={{ textAlign: 'center', fontSize: 20, maxWidth: 820, margin: '0 auto 56px', lineHeight: 1.4 }}>
                Центр карьеры объединяет студентов, выпускников, работодателей и
                университетские подразделения в единую среду профессионального развития.
              </p>

             <div style={{ position: 'relative', maxWidth: 980, minHeight: 440, margin: '0 auto' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{
                    position: 'absolute',
                    left: '40%',
                    top: '20%',
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
                  Центр<br />карьеры
                </motion.div>

                {ecosystemItems.map((item, index) => {
                  const positions = [
  { left: '4%', top: '4%' },
  { left: '72%', top: '4%' },
  { left: '0%', top: '38%' },
  { left: '76%', top: '38%' },
  { left: '16%', top: '78%' },
  { left: '60%', top: '78%' },
]

                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      style={{
                        position: 'absolute',
                        ...positions[index],
                        width: 220,
                        minHeight: 72,
                        borderRadius: 20,
                        background: 'rgba(255,255,255,0.16)',
                        border: '1px solid rgba(255,255,255,0.32)',
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
                    </motion.div>
                  )
                })}

                {floatingCards.map((item, index) => {
                  const floatPositions = [
                    { left: '4%', top: '30%' },
                    { left: '82%', top: '28%' },
                    { left: '30%', top: '2%' },
                    { left: '44%', top: '88%' },
                    { left: '8%', top: '70%' },
                    { left: '76%', top: '74%' },
                  ]

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
                        animation: `floatCard ${4 + index * 0.4}s ease-in-out infinite`,
                      }}
                    >
                      {item}
                    </div>
                  )
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}