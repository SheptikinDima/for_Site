import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import Catalog from './Catalog'
import Product from './Product'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import { AnimatePresence, motion } from 'framer-motion'
export default function App(){const location=useLocation();return (<div>
<div className="topbar"><div className="container inner"><span>📍 Москва, Производственная 1</span><span>•</span><span>🕘 Пн–Сб 9:00–19:00</span><span style={{marginLeft:'auto'}}>☎️ +7 (900) 000-00-00</span></div></div>
<header className="header"><div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:64}}><NavLink to="/" style={{fontWeight:800,fontSize:20,textDecoration:'none',color:'#fff'}}>FENCEPRO</NavLink><nav className="nav" style={{display:'flex',gap:18}}><NavLink to="/catalog">Продукция</NavLink><NavLink to="/projects">Кейсы</NavLink><NavLink to="/about">О нас</NavLink><NavLink to="/contact">Контакты</NavLink></nav><div className="info">+7 (967) 202-74-79 • Пн–Вс 9:00–19:00</div></div></header>
<AnimatePresence mode="wait"><motion.main key={location.pathname} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:0.25}}>
  <Routes location={location}>
    <Route path="/" element={<Home/>}/>
    <Route path="/catalog" element={<Catalog/>}/>
    <Route path="/catalog/:slug" element={<Product/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
</motion.main></AnimatePresence>
<footer className="footer"><div className="container">© {new Date().getFullYear()} FENCEPRO. Все права защищены.</div></footer>
</div>) }
