import styled from 'styled-components';

export const Container = styled.header`
  background: #D73035;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-size: 32px;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
      margin-top: 6px;
    }
  }

  @media (max-width: 480px) {
    img {
      display: none;
    }

    justify-content: center;
  }

  @media (max-width: 700px) {

    justify-content: space-evenly;
  }

  @media (max-width: 1100px) {

    max-width: 900px;
  }
`;
