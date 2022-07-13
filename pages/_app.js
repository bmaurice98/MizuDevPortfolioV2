import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../components/Themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={lightTheme}>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
