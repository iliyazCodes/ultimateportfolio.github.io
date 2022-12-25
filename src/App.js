import styled from "styled-components"
import { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import GlobalStyles from "./global/styles/globalStyles"
import Theme from "./global/styles/theme"
import AppRoutes from "./global/routes"
import ProgressIconProvider from "./global/contexts/scrollProgressIconMapper"
import LoaderProvider from "./global/contexts/loarderContext"
import Loader from "./components/loader"
import { LOADER_TIME } from "./global/data/constants"
import Header from "./components/header"

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
