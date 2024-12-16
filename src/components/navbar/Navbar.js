import React, { useRef } from 'react'
import './style.css'
import LogoTop from './../../img/лого.png'
import ScrollToForm from './../../Helper/scroll/scrollForm'
import ScrollToCourse from './../../Helper/scroll/scrollCourse'
import ScrollToContacts from './../../Helper/scroll/scrollContacts'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const navbarRef = useRef(null)

  const scrollToFormFunc = ScrollToForm()
  const scrollToCourseFunc = ScrollToCourse()
  const scrollToContactsFunc = ScrollToContacts()

  return (
    <header className="header" ref={navbarRef}>
      <NavLink to="/">
        <img className="header-logo" src={LogoTop} alt="" />
      </NavLink>

      <nav className="nav">
        <ul className="nav-list">
          <NavLink to="/information-about-the-school">
            <li className="nav-item">О нас</li>
          </NavLink>

          <li className="nav-item" onClick={scrollToCourseFunc}>
            Образовательная программа
          </li>
          <NavLink to="/Home">
            <li className="nav-item">Клуб Free Sun</li>
          </NavLink>
          <NavLink to="/Home">
            <li className="nav-item">Золотой бонус</li>
          </NavLink>
          <NavLink to="/Home">
            <li className="nav-item">Блок</li>
          </NavLink>
          <NavLink to="/Home">
            <li className="nav-item">Новости</li>
          </NavLink>

          <li className="nav-item" onClick={scrollToContactsFunc}>
            Контакты
          </li>
        </ul>
      </nav>

      <button className="header-btn" onClick={scrollToFormFunc}>
        Получить консультацию
      </button>
    </header>
  )
}

export default Navbar