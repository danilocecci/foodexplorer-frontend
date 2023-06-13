import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, a, button, input {
    font-size: 1.6rem;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

    -webkit-font-smoothing: antialiased;
    overflow-y: hidden;
  }

  input, label, textarea {
    font-family: ${({ theme }) => theme.FONT.ROBOTO};
  }

  a, button {
    cursor: pointer;
    
    font-family: ${({ theme }) => theme.FONT.POPPINS};
    font-size: 15px;
    
    outline: none;
    text-decoration: none;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`
