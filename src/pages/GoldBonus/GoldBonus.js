/* eslint-disable react/react-in-jsx-scope */
import './style.css'

import boxOne from "../../img/1.png"
import boxTwo from '../../img/2.png'
import boxThree from '../../img/3.png'
import boxFour from '../../img/4.png'
import boxFive from '../../img/5.png'

const GoldBonus = () => {
    return (
      <>
        <section className="gold center">
          <div className="gold-box">
            <h1 className="gold-title">ЗОЛОТОЙ БОНУС</h1>
            <h2 className="gold-prog-txt">ОПИСАНИЕ ПРОГРАММЫ</h2>
            <p className="gold-info-txt">
              Специальное предложение для кинопрофессий, представленных в
              киношколе Free Sun Film School. Программа предназначена для лучших
              студентов, обеспечивая{' '}
              <span className="yellow-span">
                индивидуальное карьерное сопровождение
              </span>{' '}
              и интеграцию в киноиндустрию. Лучшие студенты получают возможность{' '}
              <span className="yellow-span">
                бесплатного членства и стажировку в Клубе Free Sun
              </span>
            </p>
            <h className="gold-conditions">Условия отбора лучших студентов:</h>
            <p className="gold-info-txt">
              Отбор проходит после просмотра дипломных работ куратором и
              мастером курса. Оцениваются как теоретические знания, так и
              профессиональные навыки, проявленные в процессе обучения
            </p>
          </div>
        </section>

        <div className="bonus">
          <div className="bonus-conteiner">
            <div className="bonus-box bonus-box-bot">
              <img className="bonus-img" src={boxOne} alt="" />
              <div className="bonus-box-txt">
                <h2 className="bonus-title">
                  АКТЕРСКОЕ МАСТЕРСТВО: ЗОЛОТОЙ БОНУС
                </h2>
                <p className="bonus-txt">
                  1. Индивидуальная консультация от мастера курс— получите
                  ценные рекомендации и советы от профессионала
                </p>
                <p className="bonus-txt">
                  2. Персональная встреча с менеджером — получите рекомендации
                  по развитию карьеры и продвижению в индустрии
                </p>
                <p className="bonus-txt">
                  3. Знакомство с кастинг-агентами — начните строить свою
                  карьеру с правильных контактов{' '}
                </p>
                <p className="bonus-txt">
                  4. Клуб FREE SUN — станьте частью эксклюзивного клуба,
                  открывающего доступ к закрытым мастер-классам и питчингам
                  киношколы, а также к участию в проектах FREE SUN PRODUCTION
                </p>
              </div>
            </div>
            <div className="bonus-box bonus-box-bot bonus-box-pos">
              <img className="bonus-img" src={boxTwo} alt="" />
              <div className="bonus-box-txt">
                <h2 className="bonus-title bonus-title-col">
                  ПРОДЮСИРОВАНИЕ РЕКЛАМЫ: ЗОЛОТОЙ БОНУС
                </h2>
                <p className="bonus-txt bonus-txt-col">
                  1. Индивидуальная консультация от мастера курса — получите
                  уникальные знания и инсайты от профессионала
                </p>
                <p className="bonus-txt bonus-txt-col">
                  2. Персональная встреча с менеджером — получите советы по
                  карьерному росту и развитию
                </p>
                <p className="bonus-txt bonus-txt-col">
                  3. Практика ассистентом мастера курса на съемочной площадке —
                  начните свой путь с реального опыта в индустрии
                </p>
                <p className="bonus-txt bonus-txt-col">
                  4. Клуб FREE SUN — получите доступ к закрытым мастер-классам и
                  питчингам и участвуйте в проектах FREE SUN PRODUCTION
                </p>
              </div>
            </div>
            <div className="bonus-box">
              <img className="bonus-img" src={boxThree} alt="" />
              <div className="bonus-box-txt">
                <h2 className="bonus-title bonus-title-col">
                  РЕЖИССУРА: ЗОЛОТОЙ БОНУС
                </h2>
                <p className="bonus-txt bonus-txt-col">
                  1. Индивидуальная консультация от мастера курса —
                  воспользуйтесь опытом наставника для достижения своих целей
                </p>
                <p className="bonus-txt bonus-txt-col">
                  2. Персональная встреча с менеджером — получите советы по
                  успешному карьерному продвижению
                </p>
                <p className="bonus-txt bonus-txt-col">
                  3. Клуб FREE SUN — участвуйте в мастер-классах, питчингах и
                  проектах FREE SUN PRODUCTION, став частью киносообщества
                </p>
              </div>
            </div>

            <div className="bonus-box ">
              <img className="bonus-img" src={boxFour} alt="" />
              <div className="bonus-box-txt">
                <h2 className="bonus-title">
                  СЦЕНАРНОЕ МАСТЕРСТВО: ЗОЛОТОЙ БОНУС
                </h2>
                <p className="bonus-txt">
                  1. Индивидуальная консультация от мастера курса — узнайте
                  секреты создания успешных сценариев
                </p>
                <p className="bonus-txt">
                  2. Персональная встреча с менеджером — получите советы по
                  развитию сценарной карьеры
                </p>
                <p className="bonus-txt">
                  3. Клуб FREE SUN — откройте доступ к закрытым мастер-классам и
                  питчингам, и станьте частью проектов FREE SUN PRODUCTION
                </p>
              </div>
            </div>
            <div className="bonus-box ">
              <img className="bonus-img" src={boxFive} alt="" />
              <div className="bonus-box-txt">
                <h2 className="bonus-title">
                  СЦЕНАРНОЕ МАСТЕРСТВО: ЗОЛОТОЙ БОНУС
                </h2>
                <p className="bonus-txt">
                  1. Индивидуальная консультация от мастера курса —получите
                  эксклюзивные знания и рекомендации
                </p>
                <p className="bonus-txt">
                  2. Клуб FREE SUN — получите бесплатный доступ к мастер-классам
                  и участвуйте в проектах продакшена FREE SUN{' '}
                </p>
                <p className="bonus-txt">
                  3. Менторинг и работа под руководством М.Томяка на проектах
                  ТНТ продакшен — уникальная возможность развиваться под
                  руководством настоящего мастера
                </p>
              </div>
            </div>
          </div>
          <div className="bonus-line-box">
            <svg
              className="bonus-line"
              width="1667"
              height="100"
              viewBox="0 0 1667 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 41L1665 41"
                stroke="#FBDF00"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M375 1V41"
                stroke="#FBDF00"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M943 1V21V41"
                stroke="#FBDF00"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M655 41V97"
                stroke="#FBDF00"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M1227 41V83"
                stroke="#FBDF00"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M116 43V81"
                stroke="#FBDF00"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </>
    )
}
 
export default GoldBonus;