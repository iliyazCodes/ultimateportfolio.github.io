import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        font-weight: 400;
    }

    body {
        margin: 0;
        font-family: ${(props) => props.theme.fonts};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${(props) => props.theme.colors.background_dark};
        color: ${(props) => props.theme.colors.primary};
    }
`

export default GlobalStyles