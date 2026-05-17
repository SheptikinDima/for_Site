import { NavLink } from 'react-router-dom'
import { products } from '../data/products'
import ConsultForm from '../components/ConsultForm'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Brands(){
  return (
    <div className="strip">
      {[
        
      ].map(src => <img key={src} src={src} alt="brand" />)}
    </div>
  )
}

function FAQ() {
  const items = [
    [
      'Самостоятельный выбор организации',
      `
Студенту необходимо:

• Выбрать организацию, готовую принять на практику;

• При необходимости запросить сопроводительное письмо от университета в отделе практики;

• Заключить с организацией договор о практической подготовке;

• За 40 рабочих дней заполнить заявление и передать его ответственному за практику на кафедре;

• Получить на кафедре путевку (направление) на практику;

• Пройти практику и проставить отметки организации о прибытии и убытии;

• Сдать подписанный договор, путевку, отчет, дневник и характеристику.
      `,
    ],

    [
      'Выбор организации с помощью вуза',
      `
Студенту необходимо:

• Обратиться к ответственному за практику на кафедре или в отдел практики не позднее чем за 40 рабочих дней;

• Заключить с организацией договор о практической подготовке;

• Заполнить заявление и передать его ответственному за практику;

• Получить направление на практику;

• Пройти практику и проставить отметки организации;

• Сдать подписанный договор, отчет, дневник и характеристику.
      `,
    ],

    [
      'Практика по месту работы',
      `
Студенту необходимо:

• Запросить сопроводительное письмо от университета при необходимости;

• Заключить договор о практической подготовке;

• За 40 рабочих дней заполнить заявление;

• Получить направление на практику;

• Пройти практику и получить отметки организации;

• Сдать договор, отчет, дневник и характеристику.
      `,
    ],

    [
      'Для студентов целевого обучения',
      `
Обучающиеся по целевому договору проходят практику в организациях, заключивших договор о целевом обучении.

Дополнительно также заключается договор о практической подготовке.
      `,
    ],
  ]

  return (
    <div className="faq">
      <div style={{ marginBottom: 36 }}>
        <h2 style={{ marginBottom: 12 }}>
          Где найти практику?
        </h2>

        <p
          style={{
            color: '#667085',
            fontSize: 18,
            lineHeight: 1.5,
            maxWidth: 900,
          }}
        >
          Практическая подготовка может быть организована несколькими способами.
          Выберите подходящий вариант и ознакомьтесь с порядком оформления.
        </p>
      </div>

      {items.map(([q, a]) => (
        <details className="faq-item" key={q}>
          <summary className="faq-q">{q}</summary>

          <div
            className="faq-a"
            style={{
              whiteSpace: 'pre-line',
              lineHeight: 1.7,
            }}
          >
            {a}
          </div>
        </details>
      ))}
    </div>
  )
}
export default function Home(){
  return (
    <>
      {/* HERO с видео-фоном */}
      <section className="hero">
        <div className="bg">
          <video src="/hero.mp4" autoPlay loop muted playsInline />
        </div>
        <div className="overlay" />
        <div className="container inner">
          <div className="badge"></div>
          <h1>Центр карьеры и практики Московского Политеха</h1>

          <div className="cta" style={{display:'flex',gap:12, margin:'18px 0 8px'}}>
            <NavLink to="/projects" className="btn btn-outline">Услуги</NavLink>
            <NavLink to="/catalog"  className="btn btn-white">Программы для практики</NavLink>
          </div>
        </div>
      </section>

      {/* Плашка-консультация — отдельной секцией ниже видео */}
      <section className="section" style={{background:'#111419', paddingTop:24, paddingBottom:24}}>
        <div className="container">
          <div className="consult">
            <div className="box" style={{ margin: 0 }}>
              <h3 style={{marginTop:0}}>
                Получить консультацию <span style={{color:'var(--brand)'}}>сотрудника</span>
              </h3>
              <ConsultForm/>
            </div>
          </div>
        </div>
      </section>

    <motion.section
  className="section"
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.35 }}
>

<div className="container">
  <div className="partners-head">
    <h2
  style={{
    color: '#111',
    fontSize: 52,
    margin: 0,
  }}
>
  Наши партнёры
</h2>
    <div className="partners-arrows">
      <button
        type="button"
        onClick={() => {
          document.querySelector('.partners-scroll')?.scrollBy({
            left: -360,
            behavior: 'smooth',
          })
        }}
      >
        ←
      </button>

      <button
        type="button"
        onClick={() => {
          document.querySelector('.partners-scroll')?.scrollBy({
            left: 360,
            behavior: 'smooth',
          })
        }}
      >
        →
      </button>
    </div>
  </div>

  <div className="partners-wrap">
    <div className="partners-fade partners-fade-left" />
    <div className="partners-fade partners-fade-right" />

    <div className="partners-scroll">
      {[
        {
          logo: '/partners/selectel.png',
          link: 'https://selectel.ru/',
        },

        {
          logo: '/partners/prosveshenie.png',
          link: 'https://prosv.ru/',
        },

        {
          logo: '/partners/biokombinat.png',
          link: 'https://www.biocombinat.ru/',
        },

        {
          logo: '/partners/mac.png',
          link: 'https://gbu-mac.ru/',
        },

        {
          logo: '/partners/hh-students.png',
          link: 'https://students.hh.ru/',
        },

        {
          logo: '/partners/odk.png',
          link: 'https://www.uecrus.com/',
        },

        {
          logo: '/partners/sber.png',
          link: 'https://www.sberbank.com/',
        },

        {
          logo: '/partners/mosgortrans.png',
          link: 'https://mosgortrans.ru/',
        },

        {
          logo: '/partners/nami.png',
          link: 'https://nami.ru/',
        },

        {
          logo: '/partners/eksmo.png',
          link: 'https://eksmo.ru/',
        },

        /* повтор для бесконечного эффекта */

        {
          logo: '/partners/selectel.png',
          link: 'https://selectel.ru/',
        },

        {
          logo: '/partners/prosveshenie.png',
          link: 'https://prosv.ru/',
        },

        {
          logo: '/partners/biokombinat.png',
          link: 'https://www.biocombinat.ru/',
        },

        {
          logo: '/partners/mac.png',
          link: 'https://gbu-mac.ru/',
        },

        {
          logo: '/partners/hh-students.png',
          link: 'https://students.hh.ru/',
        },
      ].map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="partner-item"
        >
          <img src={item.logo} alt="" />
        </a>
      ))}
    </div>
  </div>
</div>
</motion.section>


      <motion.section className="section" style={{background:'#fff'}} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.35}}>
        <div className="container">
          <Brands/>
          <div className="card dark" style={{marginTop:24,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontSize:28,fontWeight:800}}>200+ партнёров</div>
              <div style={{opacity:.8}}>Практики, стажировки и карьерные возможности для студентов</div>
            </div>
            <NavLink to="/about" className="btn btn-white">Подробнее</NavLink>
          </div>
        </div>
      </motion.section>

      {/* === НОВЫЙ СЛАЙДЕР: ПРОДУКЦИЯ (вместо "Услуги") === */}
      <section className="section" style={{background:'#111316',color:'#fff'}}>
        <div className="container">
          <h2 style={{marginTop:0}}>Наши события </h2>

          {(() => {
            // Подставь свои файлы из public/products/
            const cards = [
              { title: 'Выставки от партнеров',                 img: '/products/ruberoid.jpg' },
              { title: 'Мастер классы от студентов',             img: '/products/euro-ruberoid.jpg' },
              { title: 'Карьерный марафон',        img: '/products/bitumen-membrane.jpg' },
              { title: 'Призы от партнеров',      img: '/products/polymer-membrane.jpg' },
              { title: 'Решение кейсов от организаций',    img: '/products/ceramic-tile.jpg' },
              { title: 'Старт карьеры', img: '/products/cement-sand-tile.jpg' },
              { title: 'Конкурсы от действующих партнеров',               img: '/products/profnastil.jpg' },
              { title: 'Довольные студенты',          img: '/products/metal-tile.jpg' },
              { title: 'Стажировка от ОТП банка',         img: '/products/falcevaya-krovlya.jpg' },
            ];

            const railRef = useRef<HTMLDivElement>(null);
            const GAP = 16;

            const step = () => {
              const first = railRef.current?.querySelector<HTMLElement>('.slide');
              return (first?.offsetWidth || 360) + GAP;
            };

            const prev = () => railRef.current?.scrollBy({ left: -step(), behavior: 'smooth' });
            const next = () => railRef.current?.scrollBy({ left:  step(), behavior: 'smooth' });

            return (
              <div className="slider">
                <button type="button" className="btn btn-outline" onClick={prev}>‹</button>

                <div className="rail" ref={railRef}>
                  {cards.map(c => (
                    <div className="slide tile" key={c.title}>
                      <div className="slide-img-wrap">
                        <img src={c.img} alt={c.title} loading="lazy" />
                      </div>
                      <div className="meta">{c.title}</div>
                    </div>
                  ))}
                </div>

                <button type="button" className="btn btn-outline" onClick={next}>›</button>
              </div>
            );
          })()}
        </div>
      </section>
{/* Этапы работ */}
<section className="section steps">
  <div className="container">
    <h2 className="steps-title">
      Этапы прохождения практики в <span>Московском Политехе</span>
    </h2>

    <ol className="steps-track">
      {[
        {
          n: 1,
          title: 'Подача заявки',
          text:
            'Студент оставляет заявку на практику и заполняет необходимые данные для подбора направления.',
        },
        {
          n: 2,
          title: 'Подбор места практики',
          text:
            'Центр карьеры помогает подобрать компанию, направление и формат прохождения практики.',
        },
        {
          n: 3,
          title: 'Прохождение практики',
          text:
            'Студент выполняет задачи, получает опыт работы и взаимодействует с наставниками компании.',
        },
        {
          n: 4,
          title: 'Отчёт и завершение',
          text:
            'Студент сдаёт отчётные документы, получает оценку и рекомендации для дальнейшего трудоустройства.',
        },
      ].map((s) => (
        <li key={s.n} className="step">
          <div className="step-badge">{s.n}</div>
          <div className="step-head">{s.title}</div>
          <div className="step-body">{s.text}</div>
        </li>
      ))}
    </ol>
  </div>
</section>


      <section className="section" style={{background:'#fff',color:'#111'}}>
        <div className="container">
          <h2 style={{marginTop:0}}>Частые вопросы</h2>
          <FAQ/>
        </div>
      </section>
    </>
  )
}
