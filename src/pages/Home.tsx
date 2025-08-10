import { NavLink } from 'react-router-dom'
import { products } from '../data/products'
import ConsultForm from '../components/ConsultForm'
import { motion } from 'framer-motion'
import { useRef } from 'react' // ✅ нужно для нового слайдера

function Brands(){
  return (
    <div className="strip">
      {[
        'https://dummyimage.com/120x32/ccc/000&text=ICYNENE',
        'https://dummyimage.com/100x32/ccc/000&text=BRAAS',
        'https://dummyimage.com/120x32/ccc/000&text=JACOBI',
        'https://dummyimage.com/100x32/ccc/000&text=ROBEn',
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
          <div className="badge">материалы, монтаж, гарантия</div>
          <h1>ВСЕ ДЛЯ КРОВЛИ И КРЫШ</h1>

          <div className="cta" style={{display:'flex',gap:12, margin:'18px 0 8px'}}>
            <NavLink to="/projects" className="btn btn-outline">Услуги</NavLink>
            <NavLink to="/catalog"  className="btn btn-white">Каталог продукции</NavLink>
          </div>
        </div>
      </section>

      {/* Плашка-консультация — отдельной секцией ниже видео */}
      <section className="section" style={{background:'#111419', paddingTop:24, paddingBottom:24}}>
        <div className="container">
          <div className="consult">
            <div className="box" style={{ margin: 0 }}>
              <h3 style={{marginTop:0}}>
                Получить консультацию <span style={{color:'var(--brand)'}}>эксперта</span>
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
    <h2 style={{ marginTop: 0 }}>Мы это:</h2>

    <div className="grid grid-3">
      <div className="tile">
        <img src="/images/fast-install.jpg" alt="Быстрый монтаж" />
        <h3>Быстрый монтаж</h3>
        <p>Оперативный выезд и установка в кратчайшие сроки.</p>
      </div>

      <div className="tile">
        <img src="/images/quality-guarantee.jpg" alt="Гарантия качества" />
        <h3>Гарантия качества</h3>
        <p>Контроль на каждом этапе, только проверенные материалы.</p>
      </div>

      <div className="tile">
        <img src="/images/best-prices.jpg" alt="Лучшие цены" />
        <h3>Лучшие цены</h3>
        <p>Прямые поставки и честные сметы без скрытых доплат.</p>
      </div>
    </div>
  </div>
</motion.section>


      <motion.section className="section" style={{background:'#fff'}} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.35}}>
        <div className="container">
          <Brands/>
          <div className="card dark" style={{marginTop:24,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontSize:28,fontWeight:800}}>10 лет опыта</div>
              <div style={{opacity:.8}}>Производство и установка</div>
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

      <section className="section" style={{background:'#fff',color:'#111'}}>
        <div className="container">
          <h2 style={{marginTop:0}}>Кейсы</h2>
          <div className="slider">
            <button className="btn" id="prev-2">‹</button>
            <div className="rail" id="rail-2">
              {Array.from({length:6}).map((_,i)=>(
                <div className="slide" key={i} style={{background:'#f2f3f6',color:'#111'}}>
                  <img src={`https://picsum.photos/seed/c${i}/800/400`} alt={`Кейс ${i+1}`}/>
                  <div className="meta">Объект #{i+1} — монтаж за 2 дня</div>
                </div>
              ))}
            </div>
            <button className="btn" id="next-2">›</button>
          </div>
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
