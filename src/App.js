import styled from "styled-components"
import { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import GlobalStyles from "./Global/Styles/GlobalStyles"
import Theme from "./Global/Styles/Theme"
import AppRoutes from "./Global/Routes"
import ProgressIconProvider from "./Global/Contexts/ScrollProgressIconMapper"
import LoaderProvider from "./Global/Contexts/LoarderContext"
import Loader from "./Components/Loader"
import { LOADER_TIME } from "./Global/Data/Constants"
import Header from "/Components/Header"

const AppContainer = styled.div`
   padding-top: var(--header-top-height);
`

const App = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)
    }, LOADER_TIME)
  }, [])

  return (
    <Router>
      <Theme>
        <GlobalStyles />
        <LoaderProvider initialLoad={!isMounted}>
          <Loader />
          {isMounted ? (
            <ProgressIconProvider>
              <AppContainer>
                <Header />
                <AppRoutes />
              </AppContainer>
            </ProgressIconProvider>
          ) : null}
        </LoaderProvider>
      </Theme>
    </Router>

  )
}

export default App
