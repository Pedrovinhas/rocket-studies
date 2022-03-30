import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root {
        --body-bg-color: #121214;
        --text-color: #E1E1E6;
        --title-color: #04D361;
        --form-color: #A8A8A8;
        --bg-button-color: #8257e5;

        --font-1: 'Spartan', sans-serif;
        --font-2: 'Work Sans', sans-serif;
      }

      #root {
          display: flex;
      }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        height: 100vh;
        overflow: hidden;
        display: flex;
        background-color: var(--body-bg-color);
    }


`