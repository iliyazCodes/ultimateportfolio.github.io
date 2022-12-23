import { createGlobalStyle } from "styled-components"
import TransitionStyles from "./Transitions"
import variables from "./Variables"

const GlobalStyles = createGlobalStyle`
    ${variables};
    ${TransitionStyles}

    *, *::before, *::after {
        box-sizing: border-box;
        font-weight: 400;
        font-size: var(--font-size-2);
    }

    body {
        margin: 0;
        font-family: var(--font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${(props) => props.theme.colors.primary};
        background: ${(props) => `radial-gradient(100em 30em at top, ${props.theme.colors.background}, ${props.theme.colors.background_dark})`};
        background-attachment: fixed;
    }

    html, body {
        overscroll-behavior-y: none;
    }

    body.blur {
        overflow: hidden;
        height: 100vh;
    }

    body.blur #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
    }
`

export default GlobalStyles