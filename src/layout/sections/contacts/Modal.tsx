
import styled from "styled-components";
import {theme} from "../../../styles/theme.tsx";
import spasibo from '../../../assets/images/spasibo.jpg'

export const Modal = ({modal}:{modal:boolean}) => {
    return (
        <ModalStyled modal={modal}>
        <img src={spasibo} alt={'Thanks'}/>
        </ModalStyled>
    );
};


const ModalStyled = styled.div<{modal:boolean}>`
position: absolute;
  top: 50%;
    left: 50%;
    z-index: ${({modal})=>modal ? 1:-1};
    opacity: ${({modal})=>modal ? 1:0};;
    height: ${({modal})=>modal ? '165px':0};;
    transition: .4s;
    transform: translate(-50%,-50%);
    width: 300px;
     box-shadow: 0px 6px 20px rgba(111, 77, 140, 0.66);
    background-color: ${theme.colors.primaryBg};
    img {
        width: 100%;
        object-fit: cover;
        
    }
    
`