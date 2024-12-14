import React from 'react'
import { useEffect, useState } from 'react'
import upArrow from '../../img/upArrow.webp'

const BackToTopButton = () => {
  const [BackToTopButton, setBackToTopButton] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {BackToTopButton && (
        <button
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            height: '50px',
            width: '50px',
            borderRadius: '50%', // Make it circular
            // border: 'none',
            border: '1px solid #000000',
            cursor: 'pointer',
            display: 'flex', //Align items in the center
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden', //Hide overflow, crucial for circular shape
          }}
          onClick={scrollUp}
        >
          <img
            src={upArrow}
            alt="Back to top"
            style={{ height: '60px', width: '150px' }}
          />
        </button>
      )}
    </>
  )
}

export default BackToTopButton
