import styled from 'styled-components'

export const Container = styled.div`
  background: var(--error);
  border: 1px solid #e8544f;

  width: 100%;

  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 10px 0;

  border-radius: 5px;
`

export const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
`

export const CloseButton = styled.button`
  font-size: 18px;

  transition: filter .2s;

  &:hover {
    filter: brightness(1.2);
  }
`