import React from 'react';
import { FiLogIn, FiPrinter } from 'react-icons/fi';


import { Form } from '@unform/web';
import {
  Container,
  WorkPresentationContainer,
  MarketingArea,
  LoginContainer,
  MightBeLogo,
  SignupButton
} from './styles';

import tagImage from '../../assets/tag.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface FormDataProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  function handleSubmit(data: FormDataProps) {
    console.log(data);
  }

  return (
    <Container>
      <WorkPresentationContainer>
        <MightBeLogo>
          <img src={tagImage} alt="brackets" />
          MightBe Development
        </MightBeLogo>
        <MarketingArea>
          <h1>Aprenda programação</h1>
          <h1>do começo</h1>
          <h1>ao fim.</h1>

          <SignupButton to="/register">

              <FiLogIn size={30} />
              <strong>Cadastre-se</strong>

          </SignupButton>
        </MarketingArea>

        
      </WorkPresentationContainer>
      <LoginContainer>
        <img src={tagImage} alt="brackets" />
        <h2>Vamos continuar sua jornada?</h2>
        <p>
          O conhecimento que você precisa está na próxima tela: HTML, CSS,
          Javascript, Node, React, MongoDB, Postgres, SQL e muito mais.
        </p>
        <p>Em programação, nem tudo é rápido, dê mais um passo, faça login!</p>

        <Form onSubmit={handleSubmit}>
          <Input name="email" placeholder="E-mail" type="text" />
          <Input name="senha" placeholder="Senha" type="password" />
          <Button redirect="/launchBoard" name="login">CODE</Button>
        </Form>
      </LoginContainer>
    </Container>
  );
};
export default SignIn;
