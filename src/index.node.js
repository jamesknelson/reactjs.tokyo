import fs from 'fs'
import { createMemoryNavigation } from 'navi'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { NaviProvider, View } from 'react-navi'
import { StripeProvider } from 'react-stripe-elements'
import { ServerStyleSheet } from 'styled-components/macro'
import GlobalIconFontStyle from 'components/icon/font'
import GlobalResetStyle from './reset.css'
import routes from './routes'

const renderer = async (request, response) => {
  let sheet = new ServerStyleSheet()

  try {
    let navigation = createMemoryNavigation({
      context: {
        currentUser: undefined,
      },
      request,
      routes,
    })

    await navigation.getRoute()

    // The index.html file is a template, which will have environment variables
    // and bundled scripts and stylesheets injected during the build step, and
    // placed at the location specified by `process.env.HTML_TEMPLATE_PATH`.
    //
    // To customize the rendered HTML, you can add other placeholder strings,
    // and replace them within this function -- just as %RENDERED_CONTENT% is
    // replaced. Note however that if you name the placeholder after an
    // environment variable available at build time, then it will be
    // automatically replaced by the build script.
    let body = renderToString(
      sheet.collectStyles(
        <StripeProvider stripe={null}>
          <NaviProvider navigation={navigation}>
            {/*
              Putting the global styles any deeper in the tree causes them to
              re-render on each navigation, even on production.
            */}
            <GlobalResetStyle />
            <GlobalIconFontStyle />

            <View />
          </NaviProvider>
        </StripeProvider>,
      ),
    )
    let styleTags = sheet.getStyleTags()
    let template = fs.readFileSync(process.env.HTML_TEMPLATE_PATH, 'utf8')
    let [header, footer] = template.split('%RENDERED_CONTENT%')
    let html = header + styleTags + body + footer
    response.send(html)
  } catch (error) {
    console.error(error)
    response.status(500).send('Error')
  } finally {
    sheet.seal()
  }
}

export default renderer
