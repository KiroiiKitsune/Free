/* eslint-disable react/react-in-jsx-scope */

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'

import CourseDetails from './pages/Project/projects'
import Footer from './components/footer/Footer'
import BackToTopButton from './Helper/scroll/BackToTopButton'
import './styles/style.css'
import InfoSchool from './pages/InfoSchool/InfoSchool'
import ScrollToTop from './utils/ScrolToToppage'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
          <Route path="/Home" element={<Home />} />
          <Route path="/projects/:slug" element={<CourseDetails />} />
          <Route
            path="/information-about-the-school"
            element={<InfoSchool />}
          ></Route>
          <Route path="*" element={<Home/>} />
        </Routes>

        <BackToTopButton />

        <Footer />
      </Router>
    </div>
  )
}

export default App

// ${createUrlSafeSlug(course.slug)}