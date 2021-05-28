import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Exo 2', sans-serif;
    color: var(--text-primary);
  }

  button {
    cursor: pointer;
    border: 0;
    background: 0;
  }

  :root {
    --primary: #753ffc;
    --text-primary: #c9d1d9;
    --error: #dc4a46;
  }
`
