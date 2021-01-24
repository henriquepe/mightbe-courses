import React from 'react';
import { FiLogIn, FiPrinter } from 'react-icons/fi';

import { Form } from '@unform/web';
import {
  Container,
  WorkPresentationContainer,
  MarketingArea,
  MenuContainer,
  LoginContainer,
} from './styles';

import tagImage from '../../assets/tag.svg';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

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
        <strong>
          <img src={tagImage} alt="brackets" />
          MightBe Development
        </strong>
        <MarketingArea>
          <h1>Aprenda programação.</h1>
          <h1>Do começo.</h1>
          <h1>Ao fim.</h1>

          <div>
            <a href="signup">
              <FiLogIn size={20} />
              <strong>Cadastre-se</strong>
            </a>
          </div>
        </MarketingArea>

        <MenuContainer>
          <a href="teste">Cursos</a>
          <a href="teste">Instrutor</a>
          <a href="teste">Material gratuito</a>
        </MenuContainer>
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
          <Button name="login">CODE</Button>
        </Form>
      </LoginContainer>
    </Container>
  );
};
export default SignIn;
