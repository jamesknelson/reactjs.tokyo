import React from 'react'
import { css } from 'styled-components/macro'

const DEFAULT_ICON_SIZE = '2rem'

function Icon({ glyph, size = DEFAULT_ICON_SIZE, color, ...props }) {
  return (
    <span
      {...props}
      className={`icon-${glyph} ${props.className || ''}`}
      css={css`
        display: inline-block;
        font-size: ${size};
        text-align: center;
        line-height: ${size};
        height: ${size};
        width: ${size};

        ${color &&
          css`
            color: ${color};
          `}
      `}
    />
  )
}

export default Icon
