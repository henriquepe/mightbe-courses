import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import {
  Container,
  BackButton
} from './styles';

interface HeaderProps {
  headerTitle: string;
}

const MightBeHeader: React.FC<HeaderProps> = ({headerTitle}) => {

  return (
    <Container>
        <BackButton>
            <FiArrowLeft/>
            <p>Voltar</p>
        </BackButton>

        <h2>{headerTitle}</h2>
        

    </Container>
  );
};
export default MightBeHeader;
