/* eslint-disable react/react-in-jsx-scope */
import './style.css'
import Course from '../../Helper/HomePageCourse/CourseBox'
import Form from '../../components/Form/Form'
import CourseData from './../../courses'

import Polygon from '../../img/Polygon 5.png'
import { useEffect } from 'react'

const Home = () => {

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
 }, [])


  return (
    <>
      <section className="top center">
        <section className="top-content  ">
          <h1 className="top-content-title">
            <span className="yellow-span">FREE SUN</span> FILM SCHOOL
          </h1>
          <h2 className="top-content-slogan">— БУДЬ В ФОКУСЕ КИНО!</h2>
          <p className="top-content-text top-content-text-1">
            FREE SUN FILM SCHOOL предлагает{' '}
            <span className="yellow-span">уникальные</span> образовательные
            программы, закрывающие пробелы в кинообразовании.
            <br />
            Киношкола сосредоточена на детальном изучении процессов
            кинопроизводства и практическом закреплении знаний.
          </p>
          <p className="top-content-text top-content-text-2">
            Студенты получают продуктивную обратную связь от кураторов и
            мастеров курсов на протяжении всего обучения. Лучшие выпускники
            гарантированно получают
            <span className="yellow-span">
              {' '}
              «Золотой бонус» — поддержку и продвижение в киноиндустрии
            </span>
            . Мы создаем прочную основу для успешной карьеры в мире кино
          </p>

          <button className="top-content-btn">ИДУ В КИНО</button>
        </section>
        <img className="polygon-top polygon  center" src={Polygon} alt="" />
      </section>
      <Course courseData={CourseData} />
      <img className="polygon" src={Polygon} alt="" />
      <Form />
      <img className="polygon" src={Polygon} alt="" />
    </>
  )
}

export default Home
