import { compose, lazy, mount, withView } from 'navi'
import React from 'react'
import App from 'App'

export default compose(
  withView((request, context) => <App navigationContext={context} />),
  mount({
    '/': lazy(() => import('./landing')),
    '/thankyou': lazy(() => import('./thankyou')),
  }),
)
