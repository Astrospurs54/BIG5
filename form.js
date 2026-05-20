const scriptURL = 'https://script.google.com/macros/s/AKfycbzOYUTljkbomrRFMJ9csy7Qm6eHKz_zP2gTQoIlM1TDEEGJSJrAKlBdsXkjtqBdxNkOBg/exec'

const form = document.forms['contact-form']
const submitButton = form ? form.querySelector('button[type="submit"]') : null
const originalButtonText = submitButton ? submitButton.textContent : 'Send Message'

form.addEventListener('submit', e => {
  e.preventDefault()

  if (submitButton) {
    submitButton.disabled = true
    submitButton.textContent = 'Sending...'
  }

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      if (!response.ok) {
        throw new Error(`Submission failed (${response.status})`)
      }
      alert(" Your request has been submitted successfully.")
      window.location.reload()
    })
    .catch(error => {
      console.error('Form submit error:', error)
      if (submitButton) {
        submitButton.disabled = false
        submitButton.textContent = originalButtonText
      }
      alert("Unable to submit right now. Please try again later.")
    })
})