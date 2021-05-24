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

const BackEndContentBoard: React.FC = () => {

  return (
    <Container>
      <MightBeHeader headerTitle="Frameworks Frontend"/>

      <div>

        <ContentCard 
          contentImage="https://cdn.iconscout.com/icon/free/png-256/node-js-1-1174935.png"
          contentTitle="NodeJS"
        />

        <ContentCard 
          contentImage="http://mongodb-js.github.io/leaf/mongodb-leaf_256x256.png"
          contentTitle="MongoDB"
        />

      </div>

    </Container>
  );
};
export default BackEndContentBoard;