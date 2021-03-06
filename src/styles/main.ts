import styled from 'styled-components'

export const Container = styled.div`
  background: #111;
  overflow-x: hidden;
  overflow-y: scroll;

  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar content';
`
