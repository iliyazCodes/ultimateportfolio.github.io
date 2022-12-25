import styled from "styled-components"
import GlobalStyles from "./Global/Styles/GlobalStyles"
import Theme from "./Global/Styles/Theme"
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./Global/Routes"
import Header from "./Components/Header"
import ProgressIconProvider from "./Global/Contexts/ScrollProgressIconMapper"
import { useEffect, useState } from "react"
import LoaderProvider from "./Global/Contexts/LoarderContext"
import Loader from "./Components/Loader"
import { LOADER_TIME } from "./Global/Data/Constants"

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
