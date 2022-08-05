import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import usePersistedState from './utils/usePersistedState'

import GlobalStyled from './styles/global'
import light from "./styles/themes/light"
import dark from "./styles/themes/dark"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { Router } from './router'

function App() {

  const [theme, setTheme] = usePersistedState('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <BrowserRouter>
          <header>
            <NavBar toggleTheme={toggleTheme} />
          </header>
          <main>
            <Router />
          </main>
          <footer>
            <Footer />
          </footer>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
