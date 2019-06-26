import React, { useContext } from 'react'
import 'styled-components/macro'
import { colors, srOnly } from 'theme'
import Icon from 'components/icon'
import useControlId from 'hooks/useControlId'
import {
  ControlGroupItemContext,
  ControlGroupRowItemContext,
} from './controlGroup'
import {
  StyledControlBackground,
  StyledControlBorders,
  StyledControlIconLabel,
  StyledControlWrapper,
} from './styles'

export function ControlIconLabel({ glyph, ...props }) {
  return (
    <StyledControlIconLabel {...props}>
      <Icon glyph={glyph} size={'1rem'} />
    </StyledControlIconLabel>
  )
}

export function Control({ as, children, glyph, id, label, variant, ...props }) {
  let controlId = useControlId(id)
  let controlGroupItem = useContext(ControlGroupItemContext)
  let firstRow = !controlGroupItem || controlGroupItem.firstRow
  let lastRow = !controlGroupItem || controlGroupItem.lastRow
  let { firstColumn, lastColumn, flex } = useContext(ControlGroupRowItemContext)
  let bg = colors.control.bg[variant] || colors.control.bg['default']
  let border =
    colors.control.border[variant] || colors.control.border['default']
  let corners = {
    topLeft: firstRow && firstColumn,
    topRight: firstRow && lastColumn,
    bottomRight: lastRow && lastColumn,
    bottomLeft: lastRow && firstColumn,
  }

  return (
    <StyledControlWrapper {...props} style={{ ...props.style, flex }}>
      {label && (
        <label htmlFor={controlId} css={srOnly}>
          {label}
        </label>
      )}
      {children(controlId)}
      {glyph && (
        <ControlIconLabel htmlFor={controlId} variant={variant} glyph={glyph} />
      )}
      <StyledControlBackground as={as} backgroundColor={bg} {...corners} />
      <StyledControlBorders color={border} priority={!!variant} {...corners} />
    </StyledControlWrapper>
  )
}

export default Control
