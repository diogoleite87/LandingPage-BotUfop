import { BrowserRouter } from "react-router-dom"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { Router } from './router'

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar></NavBar>
        </header>
        <main>
          <Router/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
