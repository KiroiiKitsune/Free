/* eslint-disable react/react-in-jsx-scope */
import Polygon from '../../img/Polygon 5.png'

const LearnBot = (project) => {
  return (
    <>
      <section className="learn cen">
        <div className="learn-box ">
          <h3 className="learn-title">
            Что ты{' '}
            <span className="yellow-span">
              <em>получишь</em>
            </span>
          </h3>
          <div className="lear-list-box">
            <ul className="learn-list">
              {project.project.learnListBot.map((item, index) => (
                <li key={index} className="learn-list-txt">
                  <img
                    className="right-arrow"
                    src={item.image}
                    alt="Right Arrow"
                  />
                  {item.text}
                </li>
              ))}
            </ul>
            <ul className="learn-list">
              {project.project.learnListBot2.map((item, index) => (
                <li key={index} className="learn-list-txt">
                  <img
                    className="right-arrow"
                    src={item.image}
                    alt="Right Arrow"
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <img className='polygon' src={Polygon} alt="" />
    </>
  )
}

export default LearnBot
