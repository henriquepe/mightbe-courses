import { shade } from 'polished';
import styled from 'styled-components';
import { Link  } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  @media (max-width: 870px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const WorkPresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  height: 690px;
  border: 0;
  border-radius: 20px;
  margin: 3.5% 0 3.5% 3.5%;
  background: #555ee6;
  align-items: flex-start;


  > strong {
    display: flex;

    img {
      margin-right: 16px;
    }
  }

  @media (max-width: 870px) {
    height: 100%;
    width: 90%;
    padding-bottom: 0;
    margin: 0;
    align-items: center;
  }
`;

export const MightBeLogo = styled.strong`
  display: flex;
  align-items: center;
  padding-left: 120px !important;
  padding: 70px 20px;
  font-size: 30px;

  img {
    width: 50px;
    height: 50px;
  }


  @media (max-width: 870px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 120px;
    padding-top: 20px;
    padding-bottom: 50px;
    text-align: center;

    img {
      display: none;
    }

  }

`;

export const MarketingArea = styled.div`
  display: flex;
  max-width: 550px;
  width: 100%;
  flex-direction: column;

  text-align: left;
  padding-left: 120px;
  padding-right: 120px;

  

  h1 {
    flex: 1;
    font-weight: 700;
    font-size: 50px;
  }

  @media (max-width: 870px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 40px;
    margin: 0;


    h1 {
      font-weight: 700;
      font-size: 25px;
    }
  }
`;

export const SignupButton = styled(Link)`

  display: flex;
  width: 100% !important;
  align-items: center;
  margin-top: 90px;
  text-decoration: none;
  color: #fff;
  font-size: 20px;


  svg {
    margin-right: 8px;
  }
  

  @media (max-width: 870px) {
    justify-content: center;
  }

  @media (max-width: 400px) {
    width: 100%;
    height: 100%;
    font-size: 10px;
  }

`

export const LoginContainer = styled.div`
  max-width: 550px;
  width: 90%;
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
    border-radius: 20px 20px 20px 0;
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

