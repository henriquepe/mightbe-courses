import React from 'react';

import { Form } from '@unform/web';
import {

  ContentCardContainer,
  ContentImage,
  ContentImageContainer,

} from './styles';


interface ContentCardProps {
    contentImage?: string;
    contentTitle?: string;
    contentDescription?: string;
    background?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({contentImage, contentTitle, background}) => {
 

  return (

      <ContentCardContainer>
        <ContentImageContainer>
            <ContentImage src={contentImage} alt={contentTitle} />
            <p>{contentTitle}</p>
        </ContentImageContainer>
      </ContentCardContainer>

  );
};
export default ContentCard;
