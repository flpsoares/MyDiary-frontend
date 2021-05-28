import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #111;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  cursor: default;
  margin-top: 100px;
  margin-bottom: 20px;
`

export const Box = styled.div`
  border-radius: 5px;
  background: #161b2270;

  width: 400px;

  padding: 25px;
`

export const AuthButton = styled.button`
  background: var(--primary);
  width: 100%;
  margin-top: 5px;

  font-size: 20px;
  font-weight: 500;

  border-radius: 5px;

  padding: 10px 0;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Question = styled.div`
  margin-top: 10px;
  font-size: 18px;

  button {
    margin-left: 6px;
    font-size: 18px;
    font-weight: 600;

    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }
`
