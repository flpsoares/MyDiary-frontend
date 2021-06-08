import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;

  background: var(--dark);

  z-index: 2;

  border-bottom: 3px solid var(--primary);

  position: fixed;
  height: 80px;
  width: calc(100% - 310px);

  right: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 30px;

  span {
    margin-right: 20px;
    font-size: 20px;
  }

  img {
    border-radius: 50%;
    transition: border-radius 0.2s;

    &:hover {
      border-radius: 15px;
      cursor: pointer;
    }
  }
`
