/* eslint-disable react/react-in-jsx-scope */
import Creative from '../../img/Creative Photography.png'
import Polygon from '../../img/Polygon 5.png'
import Planet from '../../img/планета (2).png'

import './style.css'

const InfoSchool = () => {
  return (
    <>
      <section className="about center">
        <div className="about-cont">
          <h1 className="about-us">О НАС</h1>
          <div className="about-box">
            <p className="about-box-txt">
              Мы получили образование в нескольких киношколах и пришли к выводу,
              что многиеважные темы остаются нераскрытыми в процессе обучения.
              Вот тогда у нас и возникла идея создания киношколы{' '}
              <span className="yellow-span">
                с детальным подходом к образованию
              </span>
              .
            </p>
            <p className="about-box-txt">
              Кроме того, в большинстве случаев студенты, получив диплом, не
              имели четкого представления о том,{' '}
              <span className="yellow-span">
                как развивать свою карьеру вкиноиндустрии
              </span>
              . Мы начали анализ качества кинообразования и приступили к работе
              над получением образовательной лицензии.
            </p>
            <p className="about-box-txt">
              И в 2023 году получили лицензию, укрепив наши позиции в сфере
              кинообразования. FREE SUN FILM SCHOOL привлекла к работе
              практикующих профессионалов киноиндустрии, которыеразработали{' '}
              <span className="yellow-span">уникальные авторские курсы</span> .
            </p>
          </div>
          <img className="about-img" src={Creative} alt="" />
        </div>

        <img className="polygon" src={Polygon} alt="" />
      </section>

      <section className="philosophy center">
        <h2 className="philosophy-title">
          ФИЛОСОФИЯ <span className="yellow-span">FREE SUN FILM SCHOOL</span>{' '}
        </h2>
        <div className="philosophy-box">
          <p className="philosophy-box-txt">
            Free Sun Film School создает актуальные образовательные программы,
            сопровождая студентов на пути в{' '}
            <span className="yellow-span">профессиональное киносообщество</span>{' '}
          </p>
        </div>

        <ul className="philosophy-content">
          <li className="philosophy-content-box">
            <div className="philosophy-num">
              <p className="philosophy-num-txt">1</p>
            </div>
            <div className="philosophy-content-wrap">
              <h3 className="philosophy-content-title">
                Детальность и практичность
              </h3>
              <p className="philosophy-content-txt">
                Мы предлагаем тщательно проработанные{' '}
                <span className="yellow-span">авторские программы</span>,
                которые глубоко раскрывают все аспекты кинопроизводства и
                основаны на актуальных запросах киноиндустрии. Каждая новая тема
                закрепляется путем выполнения практических заданий, позволяя{' '}
                <span className="yellow-span">выработать навык</span> и{' '}
                <span className="yellow-span">
                  усовершенствовать мастерство
                </span>{' '}
              </p>
            </div>
          </li>
          <li className="philosophy-content-box philosophy-content-box-bg philosophy-content-box-mob">
            <div className="philosophy-num">
              <p className="philosophy-num-txt">2</p>
            </div>
            <div className="philosophy-content-wrap">
              <h3 className="philosophy-content-title">
                Индивидуальный подход
              </h3>
              <p className="philosophy-content-txt">
                Каждому студенту предоставляется персональное внимание и
                поддержка. Мы адаптируем образовательный процесс под ваш опыт,
                обеспечивая максимально эффективное и{' '}
                <span className="yellow-span">комфортное обучение</span>{' '}
              </p>
            </div>
          </li>
          <li className="philosophy-content-box philosophy-content-box-bg ">
            <div className="philosophy-num">
              <p className="philosophy-num-txt">3</p>
            </div>
            <div className="philosophy-content-wrap">
              <h3 className="philosophy-content-title">Уникальность</h3>
              <p className="philosophy-content-txt">
                Наши курсы разработаны действующими профессионалами
                киноиндустрии и включают самые практичные методики. Вы получите{' '}
                <span className="yellow-span">
                  доступ к эксклюзивным материалам
                </span>{' '}
                и инсайтам, недоступным в других учебных заведениях
              </p>
            </div>
          </li>

          <li className="philosophy-content-box philosophy-content-box-mob">
            <div className="philosophy-num">
              <p className="philosophy-num-txt">4</p>
            </div>
            <div className="philosophy-content-wrap">
              <h3 className="philosophy-content-title">
                Карьерное сопровождение и менеджмент
              </h3>
              <p className="philosophy-content-txt">
                Мы поддерживаем ваше профессиональное развитие даже после
                прохождения обучения в нашей киношколе, предоставляя
                консультации и помощь. Программа{' '}
                <span className="yellow-span">«Золотой бонус»</span>{' '}
                обеспечивает лучшим студентам{' '}
                <span className="yellow-span">
                  уникальные возможности для продвижения
                </span>{' '}
                и создания успешной карьеры в киноиндустрии
              </p>
            </div>
          </li>
          <li className="philosophy-content-box ">
            <div className="philosophy-num">
              <p className="philosophy-num-txt">5</p>
            </div>
            <div className="philosophy-content-wrap">
              <h3 className="philosophy-content-title">
                Профессиональное сообщество и нетворкинг
              </h3>
              <p className="philosophy-content-txt">
                Обучаясь у нас,{' '}
                <span className="yellow-span">вы становитесь частью</span>{' '}
                активного профессионального{' '}
                <span className="yellow-span">киносообщества</span>. Мы
                организуем мастер-классы, семинары и мероприятия, способствующие
                обмену опытом и установлению ценных контактов в киноиндустрии
              </p>
            </div>
          </li>
        </ul>
      </section>
      <img className="polygon" src={Polygon} alt="" />

      <section className="concept center">
        <div className="concept-box">
          <div className="concept-content">
            <h2 className="concept-title">КОНЦЕПЦИЯ ОБРАЗОВАНИЯ</h2>
            <p className="concept-txt">
              Концепция образования Free Sun Film School заключается в том, что
              каждая кинопрофессия рассматривается как большая планета, а{' '}
              <span className="yellow-span">
                каждый курс — <br />
                как пиксель
              </span>
              , постепеннонаполняющий и раскрывающий все аспектыэтой профессии,
              будь то режиссура, сценарноемастерство, актерское мастерство,
              продюсирование и другое
            </p>
          </div>

          <div className="concept-wrap">
            <img className="concept-wrap-img" src={Planet} alt="" />
            <p className="concept-wrap-txt concept-wrap-txt-1">
              Режиссура рекламы
            </p>
            <p className="concept-wrap-txt concept-wrap-txt-2">
              Планета кинорежиссура
            </p>
            <p className="concept-wrap-txt concept-wrap-txt-3">
              Работа режиссера с актером
            </p>
            <p className="concept-wrap-txt concept-wrap-txt-4">Киножанры</p>
          </div>
        </div>
      </section>
      <img className="polygon" src={Polygon} alt="" />
    </>
  )
}

export default InfoSchool
