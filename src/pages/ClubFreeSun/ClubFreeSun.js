/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import './style.css'

import Camera from '../../img/pngwing.com (15) 1.png'

const ClubFreeSun = () => {
  return (
    <>
      <section className="club center">
        <h1 className="club-title">
          КЛУБ <span className="yellow-span">FREE SUN</span>
        </h1>

        <div className="club-conteiner">
          <div className="club-box">
            <div className="club-box-philosophy">
              <h3 className="club-philosophy-title">
                <span className="yellow-span">Философия:</span>
              </h3>
              <p className="club-philosophy-txt">
                Мы создаем сообщество, объединяющее профессионалов кино,
                инвесторов и лучших выпускников киношколы , предоставляя
                поддержку и возможность реализовать свои таланты и идеи, а также
                создать профессиональное портфолио благодаря реальным проектам.
                Это способствует развитию новых талантов и созданию качественных
                проектов, продвигающих киноиндустрию вперед.
              </p>
            </div>
            <div className="club-box-conditions">
              <h3 className="club-conditions-title">
                <span className="yellow-span">Условия участия:</span>
              </h3>
              <p className="club-conditions-txt">
                • Мастера курсов и известные деятели кино и рекламы — бесплатное
                членство.
              </p>
              <p className="club-conditions-txt">
                • Лучшие студенты киношколы получают бесплатное членство по
                программе "Золотой бонус".
              </p>
              <p className="club-conditions-txt">
                • Инвесторы киношколы автоматически становятся членами клуба.
              </p>
            </div>
          </div>
          <div className="club-concept">
            <h3 className="club-concept-title">Концепция:</h3>
            <p className="club-concept-txt">
              Клуб функционирует как творческая лаборатория для создания
              рекламных и игровых проектов. Лучшие выпускники киношколы
              представляют разработанные тритменты на питчинге. Жюри выбирает{' '}
              <strong className="club-italic">самые сильные работы</strong>,
              которые{' '}
              <strong className="club-italic">
                получают возможность финансирования и реализации
              </strong>
              .
            </p>
            <p className="club-concept-txt">
              Благодаря поддержке профессионалов и участию в реальных проектах с
              бюджетом{' '}
              <strong className="club-italic">
                выпускники получают незаменимый опыт
              </strong>
              , формируют портфолио и
              <strong className="club-italic">
                становятся полноправными участниками киносообщества
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="slogal center">
        <h2 className="slogan-txt">
          Клуб Free Sun — это место, где таланты раскрываются, проекты оживают,
          а{' '}
          <span className="yellow-span">
            возможности становятся реальностью
          </span>
          .
        </h2>
        <h2 className="slogan-txt">
          Присоединяйтесь к нашему сообществу,{' '}
          <span className="yellow-span">воплотите свои идеи в жизнь</span> и
          станьте частью будущего киноиндустрии.
        </h2>
      </section>

      <section className="role">
        <div className="role-container">
          <div className="role-container-1">
            <h3 className="role-title">РОЛЬ ЖЮРИ</h3>
            <p className="role-txt">
              • Оценивают разработанные проекты, предоставляют обратную связь и
              выбирают лучшие работы для реализации
            </p>
          </div>
          <div className="role-container-2">
            <h3 className="role-title">РОЛЬ ВЫПУСКНИКОВ</h3>
            <p className="role-txt">
              • Разрабатывают проекты и участвуют в питчингах (от идеи до
              заявки)
            </p>
            <p className="role-txt">
              • Лучшие проекты получают финансирование, что дает участникам
              уникальный практический опыт и возможность добавить значимые
              работы в своё портфолио
            </p>
          </div>
          <div className="role-container-3">
            <h3 className="role-title">РОЛЬ ИНВЕСТОРОВ</h3>
            <p className="role-txt">
              {' '}
              • Инвесторы могут заказывать рекламу, сценарии и к/м фильмы для
              своего бизнеса и финансируют выбранные проекты
            </p>
          </div>
        </div>
      </section>

      <section className="free">
        <img className="free-img" src={Camera} alt="" />
        <h2 className="free-sun">
          <span className="yellow-span">FREE SUN FILM SCHOOL —</span>
        </h2>
        <h3 className="free-kino">будь в фокусе кино</h3>
      </section>
    </>
  )
}

export default ClubFreeSun
