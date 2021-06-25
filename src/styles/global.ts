import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Exo 2', sans-serif;
    color: var(--text-primary);

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 10px;

      &:hover {
        background: rgba(117, 63, 252, 0.8);
      }
    }
  }

  button {
    cursor: pointer;
    border: 0;
    background: 0;
  }

  :root {
    --primary: #753ffc;
    --text-primary: #c9d1d9;
    --dark: #111;
    --error: #dc4a46;
  }
`
