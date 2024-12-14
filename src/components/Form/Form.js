/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */

import { forwardRef } from 'react'
import './style.css'

// eslint-disable-next-line no-unused-vars, react/prop-types
const Form = forwardRef(({ form }, ref) => {
  return (
    <section className="form center " ref={ref}>
      <div className="form-bx">
        <h2 className="form-text">
          Оставьте заявку, чтобы получить консультацию или узнать больше о “FREE
          SUN SCHOOL”
        </h2>

        <div className="form-box">
          <input className="form-box-data" type="text" placeholder="Имя" />
          <input className="form-box-data" type="number" placeholder="+7" />
          <input className="form-box-data" type="email" placeholder="E-mail" />
          <input className="form-box-data" type="email" placeholder="" />
          <div className="form-checkbox">
            <input
              type="checkbox"
              className="form-checkbox-year"
              id="happy"
              name="happy"
              value="yes"
            />
            <label htmlFor="18+">Мне уже исполнилось 18 лет</label>
          </div>
        </div>

        <button className="form-btn">Оставить заявку</button>
        <p className="form-pol">
          Нажимая кнопку «заполнить», вы соглашаетесь с{' '}
          <span>
            политикой обработки персональных данных
          </span>
        </p>
      </div>

      <img src="./img/Polygon 5.png" alt="" />
    </section>
  )
})

export default Form
