import React from 'react';

import { Form } from '@unform/web';
import {
  Container,
  SignUpContainer,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface FormDataProps {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const SignUp: React.FC = () => {
  function handleSubmit(data: FormDataProps) {
    console.log(data);
  }

  return (
    <Container>
      <SignUpContainer>
        <h2>Preencha os dados a baixo</h2>
        <br></br>
        <p>
          "É melhor você tentar algo, vê-lo não funcionar e aprender com isso, do que não fazer nada.""
        </p>
        <p style={{fontSize: 12}}>
          Mark Zuckerberg
        </p>

        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" type="text" />
          <Input name="phone" placeholder="Celular" type="text" />
          <Input name="email" placeholder="E-mail" type="text" />
          <Input name="senha" placeholder="Senha" type="password" />
          <Button name="login">CADASTRAR</Button>
        </Form>
      </SignUpContainer>
    </Container>
  );
};
export default SignUp;
