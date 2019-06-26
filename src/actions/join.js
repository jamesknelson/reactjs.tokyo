import { functions } from 'firebaseApp'
import i18n from '../i18n'
import { normalizeIssues } from 'utils/Issues'
import validateEmail from 'utils/validateEmail'

const enquire = functions.httpsCallable('enquire')

const emailErrorMessages = {
  required: 'Please enter your email, so we know how to contact you.',
  invalid: 'That email looks invalid - please check it and try again.',
}

export function validate(params) {
  return normalizeIssues({
    name: params.name ? undefined : 'Please enter your name.',
    email: emailErrorMessages[validateEmail(params.email)],
  })
}

export async function invoke(params) {
  try {
    await enquire({
      ...params,
      language: i18n.language,
    })
  } catch (error) {
    return normalizeIssues(error.message || 'Something went wrong')
  }
}

export default Object.assign(invoke, { validate })
