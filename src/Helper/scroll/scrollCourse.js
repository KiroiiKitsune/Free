const ScrollToCourse = () => {
  const ScrollToCourse = () => {
    const CourseElement = document.querySelector('.main') // Select the form element
    if (CourseElement) {
      CourseElement.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.error('Form element not found.') //Added error handling
    }
  }

  return ScrollToCourse  //Return the function itself
}

export default ScrollToCourse 
