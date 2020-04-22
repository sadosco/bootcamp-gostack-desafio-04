import styled from 'styled-components';

export const PostBody = styled.li`
  background: #fff;
  max-width: 700px;
  margin: 14px auto;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  p {
    padding: 20px 0px;
    border-bottom: 1px solid #eeeeee;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }

  small {
    color: #9a9a9a;
  }
`;
