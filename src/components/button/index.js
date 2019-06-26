import React from 'react'
import { useFormState } from 'react-final-form'
import { Button } from './styles'

export { Button, StyledLink } from './styles'

export function FormSubmitButton(props) {
  let formState = useFormState({
    subscription: {
      submitting: true,
    },
  })
  let submitting = !!(formState && formState.submitting)
  return (
    <Button
      {...props}
      type="submit"
      busy={submitting || props.busy}
      disabled={submitting || props.disabled}
    />
  )
}

export default Button
