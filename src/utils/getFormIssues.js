import { BaseIssue, normalizeIssues } from './Issues'

function getFormIssues({
  formState,

  /**
   * Allows you to specify a list of specific codes to not include in the list.
   */
  except = [],
  only,

  /**
   * Allows you to specify a base issue for when there is an issue with
   * the form, but it is not in the filtered paths.
   */
  defaultInvalidCode,

  /**
   * Allows you to set the base issue for when the form couldn't be submitted,
   * and there's no submit error message.
   */
  defaultSubmitFailedCode,
}) {
  if (!formState || !formState.invalid || !formState.submitFailed) {
    return undefined
  }

  let issues = normalizeIssues(formState.errors, formState.submitErrors)

  let keys = issues ? Object.keys(issues) : []
  let keyCount = keys.length
  for (let key of keys) {
    if (only) {
      if (only.indexOf(key) === -1) {
        delete issues[key]
        keyCount--
      }
    } else if (except.indexOf(key) !== -1) {
      delete issues[key]
      keyCount--
    }
  }

  if (keyCount === 0) {
    issues = undefined
  }

  if (!issues) {
    if (!formState.hasValidationErrors && defaultSubmitFailedCode) {
      issues = {
        [BaseIssue]: defaultSubmitFailedCode,
      }
    } else if (defaultInvalidCode) {
      issues = {
        [BaseIssue]: defaultInvalidCode,
      }
    }
  }

  return issues
}

export default getFormIssues
