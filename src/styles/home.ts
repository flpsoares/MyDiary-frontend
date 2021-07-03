import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NewPostButton = styled.button`
  font-size: 20px;

  display: flex;
  align-items: center;

  margin-top: 10px;

  span {
    padding-left: 5px;
  }

  &:hover {
    filter: brightness(0.8);
  }
`

export const PostArea = styled.div`
  margin-top: 20px;
`
