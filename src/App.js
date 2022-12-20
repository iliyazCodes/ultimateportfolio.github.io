import styled from "styled-components"

const AppWrapper = styled.div`
   width: 100vw;
   height: 100vh;
   overflow: auto;
   position: relative;
   background: ${(props) => `radial-gradient(at top, ${props.theme.colors.background}, ${props.theme.colors.background_dark})`};
`

function App() {
  return (
    <AppWrapper>
      App
    </AppWrapper>
  )
}

export default App
