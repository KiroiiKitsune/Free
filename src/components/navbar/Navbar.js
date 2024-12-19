import React, { useRef, useState} from 'react'

import './style.css'
import LogoTop from './../../img/лого.png'
import ScrollToForm from './../../Helper/scroll/scrollForm'
import ScrollToCourse from './../../Helper/scroll/scrollCourse'
import ScrollToContacts from './../../Helper/scroll/scrollContacts'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const navbarRef = useRef(null)

  const scrollToFormFunc = ScrollToForm()
  const scrollToCourseFunc = ScrollToCourse()
  const scrollToContactsFunc = ScrollToContacts()

  const [nav, setNav ] = useState(false);
     const handleNavLinkClick = () => {
       setNav(false)
     }

  return (
    <header className="header" ref={navbarRef}>
      <NavLink to="/" onClick={handleNavLinkClick}>
        <img className="header-logo" src={LogoTop} alt="" />
      </NavLink>

      <nav className="nav">
        <ul className={nav ? ['nav-list', 'active'].join(' ') : ['nav-list']}>
          <NavLink to="/information-about-the-school">
            <li className="nav-item">О нас</li>
          </NavLink>

          <li className="nav-item" onClick={scrollToCourseFunc}>
            Образовательная программа
          </li>
          <NavLink to="/Home" onClick={handleNavLinkClick}>
            <li className="nav-item">Клуб Free Sun</li>
          </NavLink>
          <NavLink to="/Home" onClick={handleNavLinkClick}>
            <li className="nav-item">Золотой бонус</li>
          </NavLink>
          <NavLink to="/Home" onClick={handleNavLinkClick}>
            <li className="nav-item">Блок</li>
          </NavLink>
          <NavLink to="/Home" onClick={handleNavLinkClick}>
            <li className="nav-item">Новости</li>
          </NavLink>

          <li className="nav-item" onClick={scrollToContactsFunc}>
            Контакты
          </li>
        </ul>
        <div onClick={() => setNav(!nav)} className="mobile-btn">
          {nav ? (
            <AiOutlineClose color="white" size={30} />
          ) : (
            <AiOutlineMenu color="white" size={30} />
          )}
        </div>
      </nav>

      <button className="header-btn" onClick={scrollToFormFunc}>
        Получить консультацию
      </button>
    </header>
  )
}

export default Navbar
