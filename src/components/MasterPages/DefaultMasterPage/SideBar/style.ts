import styled from 'styled-components'

export const Container = styled.div`
  grid-area: sidebar;
  border-right: 3px solid var(--primary);

  position: fixed;
  width: 300px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 100px 25px 20px 25px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    font-size: 18px;
    width: 100%;
    height: 50px;
    padding: 0 15px;
    margin-bottom: 10px;

    border-radius: 5px;

    display: flex;
    align-items: center;

    cursor: pointer;

    transition: background 0.3s, font-weight 0.3s;

    &:hover {
      background: var(--primary);
      font-weight: 600;
    }

    a {
      text-decoration: none;
    }
  }

  button {
    height: 40px;

    font-size: 18px;

    border-radius: 5px;

    transition: background 0.2s;

    &:hover {
      background: #e53935;
    }
  }
`
