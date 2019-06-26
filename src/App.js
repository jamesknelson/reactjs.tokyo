import React from 'react'
import { View, useCurrentRoute } from 'react-navi'
import Layout from 'components/layout'
import { CurrentUserContext, CurrentLanguageContext } from 'context'
import { ControlIdProvider } from 'hooks/useControlId'

function App({ navigationContext = {} }) {
  let route = useCurrentRoute()
  let RouteLayout = route.data.layout || Layout

  return (
    <ControlIdProvider>
      <CurrentUserContext.Provider value={navigationContext.currentUser}>
        <CurrentLanguageContext.Provider value={navigationContext.language}>
          <RouteLayout>
            <View />
          </RouteLayout>
        </CurrentLanguageContext.Provider>
      </CurrentUserContext.Provider>
    </ControlIdProvider>
  )
}

export default App
