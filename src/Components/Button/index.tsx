import React, { ButtonHTMLAttributes } from 'react';


import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  redirect?: any;
}

const Button: React.FC<ButtonProps> = ({ name, children, redirect }) => {
  return (
    <Container to={redirect}>

        <button name={name} type="button">
          {children}
        </button>

    </Container>
  );
};

export default Button;
