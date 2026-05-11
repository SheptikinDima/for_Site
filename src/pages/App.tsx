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
            <NavLink to="/catalog">Продукция</NavLink>
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
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} FENCEPRO. Все права защищены.</div>
      </footer>
    </div>
  )
}
