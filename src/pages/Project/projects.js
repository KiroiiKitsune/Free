

import LearnBot from '../../AboutCourse/learnBot/LearnBot'
import LearnTop from '../../AboutCourse/learnTop/LearnTop'
import Form from '../../components/Form/Form'
import './style.css'
import Courses from '../../courses'
import React from 'react'
import { useParams } from 'react-router-dom'
import CourseSchedule from '../../Helper/courseList/courseList'
import Tape from '../../img/Rectangle (1).png' //пленка
import Marks from '../../img/кавычки.png'
import Polygon from '../../img/Polygon 5.png'

const Projects = () => {
 const { slug } = useParams()
 const decodedSlug = decodeURIComponent(slug)
 const project = Courses.projectList.find((item) => item.slug === decodedSlug)
  if (!project) {
    return (
      <p className="Sorry">
        Извините курс еще в разработке, любо в ссылке есть ошибка
      </p>
    )



    
  }
  return (
    <>
      <section className="course cen">
        <div
          className="course-title"
          dangerouslySetInnerHTML={{ __html: project.name }}
        />
        <div className="course-wrap">
          <img className="course-wrap-img" src={project.bgHeader} alt="" />
          <div className="course-box">
            <img className="course-tape" src={Tape} alt="" />
            <div className=" course-info">
              <p className="course-info-txt">
                {' '}
                <strong>Мастер курса:</strong> {project.courseInfo[0].name}
              </p>
              <p className="course-info-txt">
                <strong>Количество студентов:</strong>{' '}
                {project.courseInfo[0].value}
              </p>
              <p className="course-info-txt">
                <strong>Количество академических часов:</strong>{' '}
                {project.courseInfo[0].hourse}
              </p>
              <p className="course-info-txt">
                <strong>Запуск курса:</strong> {project.courseInfo[0].start}
              </p>
              <p className="course-info-txt">
                <strong>{project.courseInfo[0].set}</strong>{' '}
                {project.courseInfo[0].set1}
              </p>
            </div>
          </div>
        </div>
        <img className="polygon polygon-course" src={Polygon} alt="" />
      </section>

      <section className="tutor cen">
        <div className="tutor-box">
          <div className="tutor-box-info">
            <div className="tutor-info">
              <h2 className="tutor-name">
                <span className="yellow-span ">{project.nameTutor}</span>
              </h2>
              <p
                className="tutor-txt"
                dangerouslySetInnerHTML={{
                  __html: project.tutorInfo[0].text,
                }}
              ></p>
            </div>
            <img
              className="tutor-photo"
              src={project.tutorInfo[0].imgTutor}
              alt=""
            />
          </div>
          <div className="tutor-quote">
            <img className="tutor-quote-img" src={Marks} alt="" />
            <div className="tutor-quote-box">
              <p
                className="tutor-quote-txt"
                dangerouslySetInnerHTML={{ __html: project.tutorInfo[0].quote }}
              ></p>
            </div>
          </div>
        </div>
        <img className="polygon " src={Polygon} alt="" />
      </section>
      <section className="data cen">
        <div className="data-box">
          <p
            className="data-txt"
            dangerouslySetInnerHTML={{ __html: project.data }}
          ></p>
        </div>
      </section>
      <section className="dream cen">
        <div
          className="dream-bg"
          style={{ backgroundImage: `url(${project.bg})` }}
        ></div>
        <div className="dream-info">
          <h2 className="dream-title">{project.dream[0].textTitle}</h2>
          <p
            className="dream-txt"
            dangerouslySetInnerHTML={{ __html: project.dream[0].text1 }}
          ></p>
        </div>
        <div className="purpose">
          <h2 className="purpose-title">
            <span className="yellow-span">ЦЕЛЬ</span> КУРСА—
          </h2>
          <p
            className="purpose-txt"
            dangerouslySetInnerHTML={{ __html: project.dream[0].text2 }}
          ></p>
        </div>
        <img className="polygon polygon-tutor" src={Polygon} alt="" />
      </section>

      <LearnTop project={project} />
      <LearnBot project={project} />
      <section className="focus cen">
        <h2
          className="focus-kino"
          dangerouslySetInnerHTML={{ __html: project.quotesTitle }}
        ></h2>
        <h2
          className="focus-kino"
          dangerouslySetInnerHTML={{ __html: project.quotes }}
        ></h2>
      </section>
      <section className="scheme cen">
        <div className="scheme-bg ">
          <div className="scheme-box">
            <div>
              <img className="scheme-bg-img" src={project.bgCourse} alt="" />
              <h2 className="scheme-title"> Программа курса</h2>
              <CourseSchedule project={project} />
            </div>
          </div>
        </div>
        <img  src={Polygon} alt="" />
      </section>
      <Form />
    </>
  )
}

export default Projects
