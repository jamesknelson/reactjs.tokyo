function validateEmail(email) {
  if (!email) {
    return 'required'
  } else if (!/.+@.+\..+/.test(email)) {
    return 'invalid'
  }
}

export default validateEmail
