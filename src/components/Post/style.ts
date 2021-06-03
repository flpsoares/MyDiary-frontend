import styled from 'styled-components'

export const Container = styled.div`
  padding: 15px;

  width: 600px;

  margin-top: 10px;

  border-radius: 7px;
  background: rgba(30, 30, 30, 0.9);
  position: relative;
`

export const Header = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  span {
    margin-left: 10px;
    font-weight: 600;
    font-size: 18px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

export const Content = styled.div`
  margin-top: 15px;
`
