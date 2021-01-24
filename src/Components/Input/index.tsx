import React, { InputHTMLAttributes, useState } from 'react';

import { Container } from './styles';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  name: string;
}

const Input: React.FC<inputProps> = ({ type, placeholder, name }) => {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container isFocused={isFocused}>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Input;
