import styled from 'styled-components'

export const Container = styled.div`
  background: #111;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar content';
`
