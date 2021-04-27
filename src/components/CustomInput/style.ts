import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 35px;
`

export const Header = styled.div`
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
  

  span {
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: 500;
  }
`

export const InputArea = styled.div`
  border: 2px solid var(--primary);
  border-radius: 5px;
  
  display: flex;
  justify-content: space-between;

  input {
    background: 0;
    border: 0;

    width: 100%;

    padding: 5px 12px;
    
    font-size: 20px;
  }

  button {
    font-size: 25px;
    padding-right: 5px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      filter: brightness(1.2);
    }
  }
`