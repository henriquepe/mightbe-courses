import { shade } from 'polished';
import styled from 'styled-components';


export const ContentCardContainer = styled.div`
    max-width: 300px;
    width: 60%;
    border: 0;
    border-radius: 20px;

    &:first-child {
        margin-right: 50px;
    }

    &:last-child {
        margin-left: 50px;
    }

    background: ${shade(0.2, '#1A1D20')};
    display: flex;
    flex-direction: column;
    padding: 10% 8%;


    &:hover {
        border: .1px solid; 
        border-color: #555ee6;

    }
    
`;

export const ContentImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;


`;

export const ContentImage = styled.img`
    margin-top: 0px !important;
    width: 40px;
    height: 40px;
    margin-right: 30px;


`;

