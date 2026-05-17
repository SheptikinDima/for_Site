import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import Catalog from './Catalog'
import Product from './Product'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import { AnimatePresence, motion } from 'framer-motion'
import Admin from '../Admin'
import Account from './Account'
import Student from './Student'
import { Send, MessageCircle, MessagesSquare } from 'lucide-react'

export default function App() {
  const location = useLocation()

  return (
    // ВАЖНО: корневой контейнер на всю высоту окна и колонкой
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="topbar">
        <div className="container inner">
          <span>📍 Москва, Производственная 1</span>
          <span>•</span>
          <span>🕘 Пн–Сб 9:30–18:00</span>
          <span style={{ marginLeft: 'auto' }}>☎️ +7 (495) 223-05-23</span>
        </div>
      </div>

      <header className="header">
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 64 }}
        >
          <NavLink to="/" style={{ fontWeight: 800, fontSize: 20, textDecoration: 'none', color: '#fff' }}>
            Карьера и практика
          </NavLink>

          <nav className="nav" style={{ display: 'flex', gap: 18 }}>
            <NavLink to="/catalog">Карьера</NavLink>
            <NavLink to="/projects">Мероприятия</NavLink>
            <NavLink to="/about">О нас</NavLink>
            <NavLink to="/contact">Контакты</NavLink>
            
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
  <div className="info">+7 (495) 223-05-23 • Пн–Вс 9:30–18:00</div>

  <NavLink
    to="/account"
    title="Личный кабинет"
    style={{
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: '#fff',
      color: '#111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      fontWeight: 800,
    }}
  >
    👤
  </NavLink>
</div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {/* ВАЖНО: main должен растягиваться */}
        <motion.main
          key={location.pathname}
          className="main"
          style={{ flex: '1 0 auto' }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:slug" element={<Product />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/account" element={<Account />} />
            <Route path="/student" element={<Student />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      {/* футер автоматически уйдёт в самый низ */}
 <footer
  style={{
    background: '#111315',
    color: 'rgba(255,255,255,0.72)',
    padding: '72px 0 42px',
    marginTop: 80,
  }}
>
  <div className="container">
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 48,
        marginBottom: 64,
      }}
    >
      <div>
        <h4 className="footer-title">Центр карьеры</h4>

        <div className="footer-links">
          <a href="/catalog">Практики и стажировки</a>
          <a href="/projects">Мероприятия</a>
          <a href="/about">О центре</a>
          <a href="/contact">Контакты</a>
        </div>
      </div>

      <div>
        <h4 className="footer-title">Контакты</h4>

        <div className="footer-links">
          <a href="mailto:a.petrychenko@mospolytech.ru">
            a.petrychenko@mospolytech.ru
          </a>

          <a href="mailto:partner@mospolytech.ru">
            partner@mospolytech.ru
          </a>

          <span>
            8 (495) 223-05-23,
            <br />
            доб. 1516
          </span>

          <span>
            Петриченко Александра
            <br />
            Начальник центра карьеры
          </span>
        </div>
      </div>

      <div>
        <h4 className="footer-title">Документы</h4>

        <div className="footer-links">
          <a
            href="/docs/dogovor-praktika.docx"
            download
          >
            Скачать договор практики
          </a>

          <a
            href="https://mospolytech.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Московский Политех
          </a>
        </div>
      </div>

      <div>
        <h4 className="footer-title">Социальные сети</h4>

   <div
  style={{
    display: 'flex',
    gap: 14,
    marginTop: 12,
    flexWrap: 'wrap',
  }}
>
  <a
    href="https://t.me/"
    target="_blank"
    rel="noreferrer"
    className="footer-social"
  >
    <img
      src="/icons/tg.svg"
      alt="Telegram"
      style={{
        width: 22,
        height: 22,
        objectFit: 'contain',
      }}
    />
  </a>

  <a
    href="https://vk.com/"
    target="_blank"
    rel="noreferrer"
    className="footer-social"
  >
    <img
      src="/icons/vk.svg"
      alt="VK"
      style={{
        width: 22,
        height: 22,
        objectFit: 'contain',
      }}
    />
  </a>

  <a
    href="https://max.ru/"
    target="_blank"
    rel="noreferrer"
    className="footer-social"
  >
    <img
      src="/icons/max.svg"
      alt="MAX"
      style={{
        width: 22,
        height: 22,
        objectFit: 'contain',
      }}
    />
  </a>
</div>
      </div>
    </div>

    <div
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: 28,
        display: 'flex',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 720,
          lineHeight: 1.7,
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} федеральное государственное автономное
        образовательное учреждение высшего образования «Московский
        политехнический университет»
      </div>

      <div
        style={{
          fontWeight: 700,
          color: '#fff',
        }}
      >
        Московский Политех
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}
