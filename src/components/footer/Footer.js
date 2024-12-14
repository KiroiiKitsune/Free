/* eslint-disable react/react-in-jsx-scope */

import './style.css'
import Footerlog from './../../img/logofoot.png'
import Telegram from './../../img/Telegram App.png'
import VK from './../../img/VK com.png'
import BackToTopButton from '../../Helper/scroll/BackToTopButton'


const Footer = () => {
    return (
      <footer className="footer center">
        <div className="footer-box">
          <img className="fooret-img" src={Footerlog} alt="" />

          <div className="footer-info">
            <div className="footer-info-box">
              <a className="footer-info-txt" href="">
                О нас
              </a>
              <a className="footer-info-txt" href="">
                Образовательная программа
              </a>
              <a className="footer-info-txt" href="">
                Клуб Free Sun
              </a>
              <a className="footer-info-txt" href="">
                Золотой бонус
              </a>
              <a className="footer-info-txt" href="">
                Блог
              </a>
              <a className="footer-info-txt" href="">
                Новости
              </a>
            </div>
            <div className="footer-info-box">
              <a className="footer-info-txt" href="">
                Политика обработки персональных данных
              </a>
              <a className="footer-info-txt" href="">
                Публичная оферта
              </a>
              <a className="footer-info-txt" href="">
                Способы оплаты
              </a>
              <a className="footer-info-txt" href="">
                Кредит на образование с господдержкой
              </a>
              <a className="footer-info-txt" href="">
                Лицензия на осуществление образовательной деятельности
              </a>
              <a className="footer-info-txt" href="">
                СМИ о нас
              </a>
            </div>
          </div>

          <div className="footer-info-num">
            <h2 className="footer-num">НОМЕР ТЕЛЕФОНА</h2>
            <h2 className="footer-num">ЭЛ. ПОЧТА</h2>
            <h2 className="footer-num">АДРЕС</h2>
          </div>
        </div>

        <div className="footer-icon">
          <a href="">
            <img src={VK} alt="" />
          </a>
          <a href="">
            <img src={Telegram} alt="" />
          </a>
        </div>

        <div className="footer-log">
          <p className="footer-log-txt">2024 All rights reserved</p>
          <p className="footer-log-txt">FREE SUN FILM SCHOOL</p>
          <BackToTopButton />
        </div>
      </footer>
    )
}
 
export default Footer;