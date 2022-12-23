import { css } from "styled-components"

const variables = css`
  :root {
    --border-radius: 4px;
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --header-box-shadow: 0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 18px #0000001f;
    --header-top-height: 100px;
    --header-scroll-height: 70px;
    --xs-space-size: 1em;
    --md-space-size: 2em;
    --lg-space-size: 3em;
    --font-size-1: 12px;
    --font-size-2: 16px;
    --font-size-3: 24px;
    --font-size-4: 32px;
    --font-heading: 32px;
    --font-family: 'Poppins', sans-serif;
  }
`

export default variables