import { mount, route } from 'navi'
import React from 'react'
import CenteredCardLayout, { P } from 'components/centeredCardLayout'

function Thankyou() {
  return (
    <CenteredCardLayout title="Thankyou! 🙏">
      <P>You'll hear from us shortly.</P>
    </CenteredCardLayout>
  )
}

export default mount({
  '/': route({
    title: 'React Skill Up 研修 東京',
    view: <Thankyou />,
  }),
})
