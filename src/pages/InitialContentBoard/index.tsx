import React from 'react';

import { Form } from '@unform/web';
import {
  Container,

} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import ContentCard from '../../components/ContentCard';
import MightBeHeader from '../../components/MightBeHeader';

interface FormDataProps {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const InitialContentBoard: React.FC = () => {

  return (
    <Container>
      <MightBeHeader headerTitle="Conteúdo inicial"/>

      <div>

        <ContentCard 
          contentImage="https://icons-for-free.com/iconfiles/png/512/icon++html+icon-1320194800994962643.png"
          contentTitle="HTML"
        />

        <ContentCard 
          contentImage="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_css3-512.png"
          contentTitle="CSS"
        />

        <ContentCard 
          contentImage="https://media-exp1.licdn.com/dms/image/C560BAQE4Gl_BTLoH8Q/company-logo_200_200/0/1548063106795?e=1629936000&v=beta&t=J2ZwYNYXwSZTGrwBwCbhMXrF7cs180A3UCln2CqpzBA"
          contentTitle="Javascript"
        />

      </div>

    </Container>
  );
};
export default InitialContentBoard;
