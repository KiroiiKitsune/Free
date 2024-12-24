import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const savedScrollY = localStorage.getItem('scrollY')
    if (savedScrollY) {
      window.scrollTo(0, parseInt(savedScrollY))
      localStorage.removeItem('scrollY')
    }

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('scrollY', window.scrollY)
    })

    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.setItem('scrollY', window.scrollY)
      })
    }
  }, [pathname])

  return null
}

export default ScrollToTop
