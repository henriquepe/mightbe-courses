import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 24px;
  }

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #555ee6;
    `}

  input {
    width: 90%;
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;
    padding-right: 20px;
  }
`;
