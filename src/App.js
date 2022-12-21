import styled from "styled-components"
import GlobalStyles from "./Global/Styles/GlobalStyles"
import Theme from "./Global/Styles/Theme"
import Dashboard from "./Pages/Dashboard"

const AppContainer = styled.div`
   padding-top: var(--header-top-height);
`

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <AppContainer>
        <Dashboard />
      </AppContainer>
    </Theme>

  )
}

export default App
