import React from 'react'
import { Form as FinalForm, useFormState } from 'react-final-form'
import getFormIssues from 'utils/getFormIssues'

export function Form({
  children,
  className,
  as: Component = 'form',
  style,
  ...props
}) {
  return (
    <FinalForm {...props}>
      {({ handleSubmit }) =>
        React.createElement(Component, {
          children,
          className,
          onSubmit: handleSubmit,
          style,
        })
      }
    </FinalForm>
  )
}

export function FormIssue({ children, ...rest }) {
  let formState = useFormState()
  let issues = getFormIssues({ formState, ...rest })
  return children(issues && Object.values(issues)[0])
}

export default Form
