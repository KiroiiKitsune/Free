/* eslint-disable react/react-in-jsx-scope */


const CourseSchedule = (project) => {
  
  return (
    <ul className="scheme-list">
      {project.project.schemeList.map((item, index) => (
        <li key={index} className="scheme-list-box">
          <h2 className="scheme-tit">{item.title}</h2>
          {item.points?.map((point, pointIndex) => (
            <p key={pointIndex} className="scheme-txt">
              {point}
            </p>
          ))}
        </li>
      ))}
    </ul>
  )
}

export default CourseSchedule
