import { mount, route } from 'navi'
import React from 'react'
import { useNavigation } from 'react-navi'
import { css } from 'styled-components/macro'

import join from 'actions/join'
import { ControlGroup, FormInputControl } from 'components/control'
import CenteredCardLayout, {
  P,
  StyledFormSubmitButton,
} from 'components/centeredCardLayout'
import { Form, FormIssue } from 'controls/form'
import { colors } from 'theme'

function Landing() {
  let navigation = useNavigation()

  return (
    <CenteredCardLayout title="React Skill Up 研修">
      <p
        css={css`
          color: ${colors.text.secondary};
          font-size: 12px;
          margin-top: -1rem;
          margin-bottom: 1rem;
        `}>
        Tokyo / 東京 /{' '}
        <span role="img" aria-label="Tokyo Tower">
          🗼
        </span>
      </p>
      <Form
        onSubmit={async value => {
          let error = await join(value)
          if (error) {
            return error
          }
          await navigation.navigate('/thankyou')
        }}
        validate={join.validate}>
        <FormIssue>
          {message => (
            <P variant={message && 'error'}>
              {message ||
                'Level up your team with practical training on modern React.'}
            </P>
          )}
        </FormIssue>
        <ControlGroup>
          <FormInputControl label="Name" glyph="person" name="name" />
          <FormInputControl
            label="Email"
            glyph="envelope"
            name="email"
            type="email"
          />
          <FormInputControl
            label="Phone (optional)"
            glyph="phone"
            name="phone"
            type="phone"
          />
        </ControlGroup>
        <StyledFormSubmitButton glyph="envelope">
          Enquire / お問い合わせ
        </StyledFormSubmitButton>
      </Form>
    </CenteredCardLayout>
  )
}

export default mount({
  '/': route({
    title: 'React Skill Up 研修 東京',
    view: <Landing />,
  }),
})
