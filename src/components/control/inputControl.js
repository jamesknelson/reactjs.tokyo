import styled, { css } from 'styled-components/macro'
import React from 'react'
import { useField } from 'react-final-form'
import { Control, ControlIconLabel } from './control'
import { colors, radii } from 'theme'

// The border radius on the input is set in case the browser forces the
// background-color to something other than transparent, e.g. in case of
// autofill.
const StyledInput = styled.input`
  background-color: transparent;
  color: ${colors.text.default};
  flex: 1;
  font-size: 0.9rem;
  padding: 0.75rem;
  border-radius: ${radii.small};
  ${props =>
    props.hasIconLabel &&
    css`
      padding-left: 2.5rem;
    `}
`

const StyledControlIconLabel = styled(ControlIconLabel)`
  position: absolute;
  left: 0;
`

export const InputControl = ({
  onChange,
  glyph,
  className,
  style,
  label,
  placeholder,
  id,
  variant,
  value,
  ...props
}) => {
  let hasIconLabel = glyph !== undefined

  return (
    <Control
      id={id}
      label={label}
      variant={variant}
      className={className}
      style={style}>
      {id => (
        <>
          {hasIconLabel && (
            <StyledControlIconLabel
              glyph={glyph}
              variant={variant || (!value && 'empty')}
            />
          )}
          <StyledInput
            {...props}
            id={id}
            hasIconLabel={hasIconLabel}
            placeholder={placeholder || label}
            value={value}
            onChange={event => onChange(event.target.value)}
          />
        </>
      )}
    </Control>
  )
}

export function FormInputControl({ name, initialValue, variant, ...props }) {
  let field = useField(name, {
    initialValue,
  })
  let error = field.meta.submitFailed && field.meta.invalid

  return (
    <InputControl
      {...field.input}
      {...props}
      variant={variant || (error && 'warning')}
    />
  )
}

export default InputControl
