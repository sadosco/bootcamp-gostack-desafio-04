import styled from 'styled-components';

export const Header = styled.header`
  background: #4a90e2;
  max-width: 1024px;
  height: 64px;
  margin: 0 auto;
  padding: 20px 40px;

  img {
    width: 124px;
  }

  nav {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      span {
        color: #fff;
        font-weight: bold;
        margin-right: 8px;
      }
    }
  }
`;
