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
          <li className="nav-item">
            <a href="">Клуб Free Sun</a>
          </li>
          <li className="nav-item">
            <a href="">Золотой бонус</a>
          </li>
          <li className="nav-item">
            <a href="">Блог</a>
          </li>
          <li className="nav-item">
            <a href="">Новости</a>
          </li>
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
