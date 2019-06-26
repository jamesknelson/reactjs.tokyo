import React from 'react'
import { css } from 'styled-components/macro'
import {
  StyledControlGroupDivider,
  StyledControlGroupRowDivider,
} from './styles'

export const ControlGroupRowItemContext = React.createContext({
  firstColumn: true,
  lastColumn: true,
})
export const ControlGroupItemContext = React.createContext(null)

export const ControlGroupRow = ({ children, flex = [], ...props }) => {
  let childrenCount = React.Children.count(children)

  return (
    <div
      {...props}
      children={React.Children.map(children, (child, i) => (
        <>
          {i !== 0 && <StyledControlGroupRowDivider />}
          <ControlGroupRowItemContext.Provider
            children={child}
            value={{
              firstColumn: i === 0,
              lastColumn: i === childrenCount - 1,
              flex: flex[i],
            }}
          />
        </>
      ))}
      css={css`
        display: flex;
      `}
    />
  )
}

export function ControlGroup({ children, ...props }) {
  let childrenCount = React.Children.count(children)

  return (
    <div
      {...props}
      css={css`
        padding: 1px;
      `}>
      {React.Children.map(children, (child, i) => (
        <>
          {i !== 0 && <StyledControlGroupDivider />}
          <ControlGroupItemContext.Provider
            key={i}
            children={child}
            value={{
              firstRow: i === 0,
              lastRow: i === childrenCount - 1,
            }}
          />
        </>
      ))}
    </div>
  )
}

export default ControlGroup
