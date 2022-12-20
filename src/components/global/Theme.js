import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"

const themeDetails = {
  colors: {
    background: "#29293d",
    primary: "#d8d8dd",
    secondary: "#5fc1e2",
    background_dark: "#1a1a27", 
    primary_dark: "#60869a",
    secondary_dark: "#6c6c74",
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
  children: PropTypes.element.isRequired
}

export default Theme