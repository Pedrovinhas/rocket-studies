import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    :root {
    --purple-bg: #290742;
     --dark-bg: #170027;
     --button-bg: #9e6dc2;
     --white: #fff;
     --light-purple: #fbf6ff;
     --green: #4fff4b;

     --poppins:'Poppins', sans-serif;
     --roboto:'Roboto', sans-serif;

      }

    h1, h2, h3 {
        font-family: var(--poppins);
    }

    h2, h3 {
        font-size: 24px;
        font-weight: 700;
        color: var(--purple-bg);
    }

    li, p, span {
        font-family: var(--roboto);
    }

    body {
        background-color: var(--purple-bg);
    }
`