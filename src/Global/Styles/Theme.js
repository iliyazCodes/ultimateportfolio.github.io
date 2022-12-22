import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"

const themeDetails = {
  colors: {
    background: "#1f1f2e",
    primary: "#f1f1f1",
    secondary: "#5fc1e2",
    background_dark: "#11111e", 
    primary_dark: "#6c6c74",
    secondary_dark: "#60869a",
  },
  fonts: ["'Poppins', sans-serif"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={themeDetails}>{children}</ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default Theme