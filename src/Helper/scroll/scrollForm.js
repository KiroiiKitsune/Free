const ScrollToForm = () => {
  const scrollToForm = () => {
    const formElement = document.querySelector('.form') // Select the form element
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.error('Form element not found.') //Added error handling
    }
  }

  return scrollToForm //Return the function itself
}

export default ScrollToForm;