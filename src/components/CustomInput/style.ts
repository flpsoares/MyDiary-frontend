import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 35px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 16px;

      transition: color .2s;

      &:hover {
        color: #FFF;
      }
    }
  }

  span {
    font-size: 25px;
    margin-bottom: 5px;
    font-weight: 500;
  }

  input {
    background: 0;

    border: 1px solid var(--primary);
    border-radius: 5px;

    padding: 5px 12px;
    
    font-size: 20px;

    transition: .1s;

    &:focus {
      box-shadow: 0 0 5px var(--primary);
      border: 1px solid #753ffc99;
    }
  }
`