import React from 'react'
import { css, keyframes } from 'styled-components/macro'

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  90% {
    transform: rotate(350deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = ({
  active = true,
  color = '#aabbcc',
  backgroundColor = 'inherit',
  borderWidth = 2.5,
  size = '100%',
  ...props
}) => (
  <span
    {...props}
    css={css`
      position: relative;
      background-color: ${backgroundColor};
      border-radius: 50%;
      display: block;
      width: ${typeof size === 'number' ? size + 'px' : size};
      height: ${typeof size === 'number' ? size + 'px' : size};
      box-shadow: inset 0 0 0 ${borderWidth}px ${color};
    `}>
    <span
      css={css`
        position: absolute;
        display: block;
        width: calc(50% + 1.5px);
        height: calc(100% + 3px);
        background-color: ${backgroundColor};
        border-radius: 9999px 0 0 9999px;
        top: -1px;
        left: -1px;
        transform-origin: calc(100% - 0.5px) calc(50%);
        ${active &&
          css`
            animation: ${spinnerAnimation} 1.2s infinite
              cubic-bezier(0.5, 0, 0.5, 1) 0.32s;
          `}
      `}
    />
    <span
      css={css`
        position: absolute;
        display: block;
        width: calc(50% + 1.5px);
        height: calc(100% + 3px);
        background-color: ${backgroundColor};
        border-radius: 0 9999px 9999px 0;
        top: -1px;
        left: calc(50% - 0.5px);
        transform-origin: 0 calc(50%);
        ${active &&
          css`
            animation: ${spinnerAnimation} 1.2s infinite
              cubic-bezier(0.5, 0, 0.5, 1);
          `}
      `}
    />
  </span>
)
