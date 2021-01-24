import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const WorkPresentationContainer = styled.div`
  max-width: 700px;
  width: 90%;
  height: 750px;
  border: 0;
  border-radius: 20px;
  margin: 3.5% 0 3.5% 3.5%;
  background: #555ee6;

  > strong {
    display: flex;
    align-items: center;
    margin-left: 120px;
    margin-top: 50px;

    img {
      margin-right: 16px;
    }
  }
`;

export const MarketingArea = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 120px;
  margin-top: 100px;

  h1 {
    flex: 1;
    font-weight: 700;
    font-size: 40px;
  }

  div {
    margin-top: 100px;

    a {
      display: flex;
      align-items: center;
      margin-left: 8px;
      text-decoration: none;
      color: #fff;

      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 670px;
  margin-left: 120px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 14px;

    & + a {
      margin-left: 30px;
    }
  }
`;

export const LoginContainer = styled.div`
  max-width: 550px;
  width: 90%;
  height: 750px;
  border: 0;
  border-radius: 20px 20px 20px 0;
  margin: 3.5% 3.5% 3.5% 0;
  background: ${shade(0.2, '#1A1D20')};
  display: flex;
  flex-direction: column;
  padding: 0 4%;
  align-items: initial;

  img {
    margin-top: 50px;
    align-self: flex-start;
  }

  h2 {
    font-size: 35px;
    margin: 30px 0;
    font-weight: 700;
  }

  p {
    line-height: 25px;

    & + form {
      margin-top: 50px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;
