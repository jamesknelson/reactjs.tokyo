import { createGlobalStyle } from 'styled-components/macro'

const requireFont = ext => require('./icomoon/fonts/icomoon.' + ext)

// eslint-disable-next-line import/no-webpack-loader-syntax
const { default: rawStyles } = require('!!raw-loader!./icomoon/style.css')

const IconFont = createGlobalStyle`${rawStyles.replace(
  /url\('fonts\/icomoon\.([a-z]+)/g,
  (_, ext) => "url('" + requireFont(ext),
)}`

export default IconFont
