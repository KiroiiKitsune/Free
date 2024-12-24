import React, { useEffect, useRef, useState } from 'react'

import './style.css'
import LogoTop from './../../img/лого.png'
import ScrollToForm from './../../Helper/scroll/scrollForm'
import ScrollToContacts from './../../Helper/scroll/scrollContacts'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const navbarRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToFormFunc = ScrollToForm()
  const scrollToContactsFunc = ScrollToContacts()

  const [nav, setNav] = useState(false)

    const handleNavLinkClick = (targetPath, targetId) => {
      setNav(false)

      if (targetId) {
        sessionStorage.setItem('scrollTargetId', targetId)
      } else {
        sessionStorage.removeItem('scrollTargetId')
      }
      if (targetPath && targetPath !== location.pathname) {
        navigate(targetPath)
      } else if (targetId) {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          })
        }
      }
    }
    useEffect(() => {
      if (nav) {
        document.body.style.height = '100%'
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
        document.body.style.width = '100%'
      } else {
        document.body.style.height = ''
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.width = ''
      }
    }, [nav])
    useEffect(() => {
      const targetId = sessionStorage.getItem('scrollTargetId')
      if (targetId) {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          })
          sessionStorage.removeItem('scrollTargetId')
        }
      }
    }, [location.pathname, location.hash])

  return (
    <header className="header" ref={navbarRef}>
      <NavLink to="/Home" onClick={handleNavLinkClick}>
        <img className="header-logo" src={LogoTop} alt="" />
      </NavLink>

      <nav className="nav">
        <ul className={nav ? ['nav-list', 'active'].join(' ') : ['nav-list']}>
          <NavLink to="/information-about-the-school">
            <li
              className="nav-item"
              onClick={() =>
                handleNavLinkClick('/information-about-the-school')
              }
            >
              О нас
            </li>
          </NavLink>

          <li
            className="nav-item"
            onClick={() => handleNavLinkClick('/Home', 'courses')}
          >
            Образовательная программа
          </li>
          <NavLink to="/Club-Free-Sun" onClick={handleNavLinkClick}>
            <li
              className="nav-item"
              onClick={() => handleNavLinkClick('/Club-Free-Sun')}
            >
              Клуб Free Sun
            </li>
          </NavLink>
          <NavLink to="/Gold-Bonus" onClick={handleNavLinkClick}>
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
