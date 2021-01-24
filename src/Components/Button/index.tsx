import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name, children }) => {
  return (
    <Container>
      <button name={name} type="button">
        {children}
      </button>
    </Container>
  );
};

export default Button;
