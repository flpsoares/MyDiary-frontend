import styled from 'styled-components'

import { motion } from 'framer-motion'

interface CloseButtonProps {
  top: string
  right: string
}

export const Container = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;

  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.6);
`
export const Box = styled(motion.div)`
  width: 600px;

  background: rgba(20, 20, 20, 1);

  border-radius: 7px;
  position: relative;
`

export const Header = styled.div`
  width: 100%;

  padding: 20px;

  font-size: 20px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid var(--primary);
`

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
`

export const SendFile = styled.div`
  display: flex;
  align-items: center;
  input[type='file'] {
    display: none;
  }

  label {
    cursor: pointer;
    margin: 0 15px;
  }
`

export const CloseButton = styled.button<CloseButtonProps>`
  position: absolute;

  // @ts-ignore
  top: ${(props) => props.top};
  right: ${(props) => props.right};

  /* top: 12px;
  right: 12px; */

  &:hover {
    filter: brightness(1.2);
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
  }

  span {
    margin-left: 10px;
    font-weight: 600;
    font-size: 18px;
  }
`

export const ImageArea = styled.div`
  position: relative;
  width: 200px;
`

export const Content = styled.textarea`
  background: transparent;
  font-size: 20px;
  padding: 5px 20px;
  border: 0;
  width: 100%;
  height: 200px;
  resize: none;
`

export const SubmitArea = styled.div`
  padding: 0 20px;
  width: 100%;
  margin: 5px 0 20px 0;
`

export const SubmitButton = styled.button`
  border: 2px solid var(--primary);
  width: 100%;
  padding: 8px;

  font-size: 20px;
  font-weight: 500;

  border-radius: 7px;
  background: var(--primary);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.1);
  }
`
