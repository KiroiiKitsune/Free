const ScrollToContacts = () => {
  const ScrollToContacts = () => {
    const ContactsElement = document.querySelector('.footer') // Select the form element
    if (ContactsElement) {
      ContactsElement.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.error('Form element not found.') //Added error handling
    }
  }

  return ScrollToContacts //Return the function itself
}

export default ScrollToContacts
