import styled from 'styled-components'

import { motion } from 'framer-motion'

interface ChooseButtonProps {
  color: string
  border: string
  background: string
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
export const Box = styled(motion.form)`
  width: 600px;

  background: rgba(20, 20, 20, 1);

  border-radius: 7px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 28px;
`

export const Title = styled.h1`
  font-size: 28px;
  text-align: center;
`

export const ProfileImage = styled.div`
  margin: 52px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  label {
    width: 140px;
    height: 140px;
    border: 2px solid var(--text-primary);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  input[type='file'] {
    display: none;
  }
`

export const ChooseButtonArea = styled.div`
  button {
    font-size: 20px;
    font-weight: 500;
    padding: 10px;
    width: 100%;
    border: 1px solid transparent;
    transition: background 0.2s, border 0.2s, color 0.2s;
    border-radius: 6px;
  }

  button:nth-child(1) {
    background: var(--primary);
    margin-bottom: 18px;

    &:disabled {
      opacity: 0.2;
    }

    &:hover:enabled {
      background: transparent;
      color: var(--primary);
      border: 1px solid var(--primary);
    }
  }
  button:nth-child(2) {
    background: var(--error);

    &:hover {
      background: transparent;
      color: var(--error);
      border: 1px solid var(--error);
    }
  }
`
