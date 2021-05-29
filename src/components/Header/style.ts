import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;

  border-bottom: 3px solid var(--primary);

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 30px;

  span {
    margin-right: 20px;
    font-size: 20px;
  }

  button {
    img {
      border-radius: 50%;
      transition: border-radius 0.2s;

      &:hover {
        border-radius: 15px;
      }
    }
  }
`
