import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Button, FormSubmitButton } from 'components/button'
import Card from 'components/card'
import { colors, dimensions, media } from 'theme'

export const StyledButton = styled(Button)`
  margin: 1rem 0;
  width: 100%;
`

export const StyledFormSubmitButton = styled(FormSubmitButton)`
  margin: 1rem 0;
  width: 100%;
`

export const P = styled.p`
  color: ${props => colors.text[props.variant || 'secondary']};
  line-height: 1.4rem;
  margin-bottom: 1.5rem;
  text-align: center;
`

export const Title = styled.h1`
  color: ${colors.lightBlack};
  font-size: 1.4rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  text-align: center;
`

export const CenteredCardLayout = ({ children, title, ...props }) => (
  <div
    {...props}
    css={css`
      align-items: stretch;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: stretch;
      margin: 2rem 1rem 1rem;
      ${media.tabletPlus`
        margin: 3rem 1rem 1rem;
      `}
    `}>
    <div
      css={css`
        flex-grow: 1;
        max-width: ${dimensions.narrowCard};
        width: 100%;
        margin: 0 auto;
        position: relative;
      `}>
      <Card
        radius="medium"
        css={css`
          font-size: 90%;
          padding: 2rem 1.5rem;
          text-align: center;

          ${media.mediumPhonePlus`
            padding: 2rem 3rem;
          `}
        `}>
        <Title>{title}</Title>
        {children}
      </Card>
      <footer
        css={css`
          &,
          a {
            color: ${colors.text.tertiary};
            font-size: 0.8rem;
          }
          a {
            text-decoration: underline;
          }
          margin: 1rem 1rem 2rem;
          text-align: center;
        `}>
        By <a href="https://twitter.com/james_k_nelson">@james_k_nelson</a>.{' '}
        <br />
        Landing page{' '}
        <a href="https://github.com/jamesknelson/reactjs.tokyo">
          source on GitHub.
        </a>
      </footer>
    </div>
  </div>
)

export default CenteredCardLayout
