import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  height: 100vh;

  @media (max-width: 870px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;


export const SignUpContainer = styled.div`
  max-width: 550px;
  width: 90%;
  border: 0;
  border-radius: 20px;

  background: ${shade(0.2, '#1A1D20')};
  display: flex;
  flex-direction: column;
  padding: 2% 4%;
  align-items: initial;

  img {
    margin-top: 50px;
    align-self: flex-start;
  }

  h2 {
    font-size: 35px;
    font-weight: 700;
  }

  p {
    line-height: 25px;

    /* @media (max-width: 900px) {
      display: none;
    } */

    & + form {
      margin-top: 50px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 870px) {
    max-width: 700px;
    width: 90%;
    border: 0;
    border-radius: 20px;
    margin: 0;
    background: ${shade(0.2, '#1A1D20')};
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    align-items: initial;

    img {
      padding-top: 10px;
      align-self: flex-start;
    }

    h2 {
      font-size: 30px;
      margin: 30px 0;
      font-weight: 700;
    }

    p {
      line-height: 25px;

    }

    form {
      display: flex;
      flex-direction: column;
    }
  }
`;

