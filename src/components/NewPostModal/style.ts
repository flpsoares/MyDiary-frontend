import styled from 'styled-components'

import { motion } from 'framer-motion'

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
  height: 600px;

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

export const CloseButton = styled.button`
  position: absolute;

  top: 12px;
  right: 12px;

  &:hover {
    filter: brightness(1.2);
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  padding: 20px;

  img {
    border-radius: 50%;
  }

  span {
    margin-left: 10px;
    font-weight: 600;
    font-size: 18px;
  }
`

export const Content = styled.textarea`
  background: transparent;
  font-size: 20px;
  padding: 5px 20px;
  border: 0;
  width: 100%;
  height: 63%;
  resize: none;
`

export const SubmitArea = styled.div`
  padding: 0 20px;
  width: 100%;
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
