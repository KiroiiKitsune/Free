
/* eslint-disable no-unused-vars */

import { forwardRef, memo, useMemo } from 'react'
import './style.css'
import React from 'react'

import {  NavLink } from 'react-router-dom'
import courseData from '../../courses'



const Course = memo(
  // eslint-disable-next-line react/prop-types
  forwardRef(({ course }, ref) => {
    const projectListCopy = useMemo(() => {
      return JSON.parse(JSON.stringify(courseData?.projectList ?? []))
    }, [courseData?.projectList])

    return (
      <section className="main center" ref={ref}>
        <h2 className="main-title">
          <span className="yellow-span">ОБРАЗОВАТЕЛЬНЫЕ</span> ПРОГРАММЫ
        </h2>

        <ul className="main-box">
          {projectListCopy.map((item) => (
            <li className="main-box-cur" key={item.slug}>
              <NavLink to={`/projects/${item.slug}`}>
                <div className="main-img">
                  <img
                    className="main-img-orig"
                    src={item.src}
                    alt={item.alt}
                  />
                  <p className="main-box-text">{item.alt}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>

        <img src="./img/Polygon 5.png" alt="" />
      </section>
    )
  }),
)

export default Course
