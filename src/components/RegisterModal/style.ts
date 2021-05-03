import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);

  width: 100vw;
  height: 100vh;

  position: fixed;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Box = styled.div`
  width: 500px;
  border-radius: 5px;
  background: #161b22;
  padding: 25px;

  z-index: 2;

  position: relative;

  margin-top: 20px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;

  font-size: 24px;

  &:hover {
    filter: brightness(1.2);
  }
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`

export const AuthButton = styled.button`
  background: var(--primary);
  width: 100%;
  margin-top: 10px;

  font-size: 20px;
  font-weight: 500;

  border-radius: 5px;

  padding: 10px 0;

  transition: filter .2s;

  &:hover {
    filter: brightness(0.9);
  }
`