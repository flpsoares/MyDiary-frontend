import styled from 'styled-components'

export const Container = styled.div`
  padding: 60px;
  position: relative;
`

export const Header = styled.div`
  background: var(--primary);
  width: 100%;
  height: 200px;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  span {
    font-size: 30px;
    font-weight: 600;
  }
`

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
  width: 100%;

  padding: 0 60px;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 26px;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;

    span:nth-child(2) {
      font-size: 16px;
    }
  }
`
