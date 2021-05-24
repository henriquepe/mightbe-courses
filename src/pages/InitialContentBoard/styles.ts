import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  height: 100vh;

  

  div {

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;



  }



  @media (max-width: 870px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

