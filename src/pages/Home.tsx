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

function FAQ(){
  const items = [
    ['Как получить консультацию?','Оставьте телефон в форме — менеджер уточнит параметры и рассчитает смету.'],
    ['Как подобрать материал?','Мы подберём профиль и покрытие под задачи и бюджет, покажем образцы.'],
    ['Как считается стоимость?','В расчёт входят площадь, уклон, комплектующие и монтаж. Итог утверждаем в смете.'],
  ]
  return (
    <div className="faq">
      {items.map(([q,a])=>(
        <details className="faq-item" key={q}>
          <summary className="faq-q">{q}</summary>
          <div className="faq-a">{a}</div>
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
          <h2 style={{marginTop:0}}>Продукция</h2>

          {(() => {
            // Подставь свои файлы из public/products/
            const cards = [
              { title: 'Рубероид',                 img: '/products/ruberoid.jpg' },
              { title: 'Еврорубероид',             img: '/products/euro-ruberoid.jpg' },
              { title: 'Битумные мембраны',        img: '/products/bitumen-membrane.jpg' },
              { title: 'Полимерные мембраны',      img: '/products/polymer-membrane.jpg' },
              { title: 'Керамическая черепица',    img: '/products/ceramic-tile.jpg' },
              { title: 'Цементно-песчаная черепица', img: '/products/cement-sand-tile.jpg' },
              { title: 'Профнастил',               img: '/products/profnastil.jpg' },
              { title: 'Металлочерепица',          img: '/products/metal-tile.jpg' },
              { title: 'Фальцевая кровля',         img: '/products/falcevaya-krovlya.jpg' },
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
