import styled from "styled-components"
import GlobalStyles from "./Global/Styles/GlobalStyles"
import Theme from "./Global/Styles/Theme"
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./Global/Routes"
import Header from "./Components/Header"
import ProgressIconProvider from "./Global/Contexts/ScrollProgressIconMapper"

const AppContainer = styled.div`
   padding-top: var(--header-top-height);
`

const App = () => {
  return (
    <Router>
      <Theme>
        <GlobalStyles />
        <ProgressIconProvider>
          <AppContainer>
            <Header />
            <AppRoutes />
          </AppContainer>
        </ProgressIconProvider>
      </Theme>
    </Router>

  )
}

export default App
