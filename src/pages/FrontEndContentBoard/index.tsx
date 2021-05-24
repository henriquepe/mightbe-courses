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

const FrontEndContentBoard: React.FC = () => {

  return (
    <Container>
      <MightBeHeader headerTitle="Frameworks Frontend"/>

      <div>

        <ContentCard 
          contentImage="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&s=3f7493995143d3cf40b1fedc582607cea194b579"
          contentTitle="ReactJS"
        />

        <ContentCard 
          contentImage="https://i.pinimg.com/favicons/dc21e16ef640223c5257d21c12804a3907a936d15a702adee646875e.png?ade12638984a3f8638c369f033ed2096"
          contentTitle="Styled Components"
        />

      </div>

    </Container>
  );
};
export default FrontEndContentBoard;