import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 10%;
    background-color: #151719;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center !important;


    @media (max-width: 870px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const BackButton = styled.div`

    width: 100px !important; 
    height: 30px !important;
    display: flex;
    align-items: center !important;
    left: 15%;
    position: absolute;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }


    p {
        font-size: 14px;
        margin-left: 7px;
    }

`;
