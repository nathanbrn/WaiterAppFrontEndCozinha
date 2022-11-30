import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  display: flex;
  gap: 32px;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  @media (max-width: 700px) {
    max-width: 600px;
    flex-direction: column;
  }

  @media (max-width: 1100px) {
    max-width: 900px;
  }
`;
