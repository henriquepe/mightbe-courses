import { shade } from 'polished';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  background: ${shade(0.5, '#555ee6')};
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 60px;
  margin-top: 60px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.3, '#555ee6')};
  }

  button {
    background: transparent;
    border: 0;
    color: #fff;
    width: 90%;
    font-weight: 700;
    font-size: 16px;
  }
`;
