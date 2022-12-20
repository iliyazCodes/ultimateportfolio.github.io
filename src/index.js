import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import GlobalStyles from "./components/global/Styled"
import Theme from "./components/global/Theme"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Theme>
      <>
        <GlobalStyles />
        <App />
      </>
    </Theme>
  </React.StrictMode>
)