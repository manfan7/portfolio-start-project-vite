import styled, {css} from "styled-components";


import {theme} from "../../styles/theme.tsx";
import {StyledNavProps} from "./Header.tsx";




export const MobileHeader = ({visible,onClick}:StyledNavProps) => {


    return (
            <MobileHeadeWrapperr visible={visible}>
                <BurgerButton aria-haspopup visible={visible}onClick={onClick} >
                    <span>
                   </span>
                </BurgerButton>
            </MobileHeadeWrapperr>



    );
};
const BurgerButton = styled.button<{visible:boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    span {
        display: block;
        position: absolute;
       height: 2px;
        width: 36px;
        transition: .4s;
        background-color: ${theme.colors.textColor};
        left: 40px;
        bottom: 50px;
        ${({visible})=>visible && css<{visible:boolean}>`
        background-color: rgba(255,255,255,0);
        `}
        &:before{
        content: '';
            display: block;
            position: absolute;
            height: 2px;
            width: 36px;
            background-color: ${theme.colors.textColor};
            transition: .4s;
            transform: translateY(-10px);
            ${({visible})=>visible && css`
        transform: rotate(-45deg) translateY(0);
                
        `}
    }
        &:after{
            content: '';
            display: block;
            position: absolute;
            height: 2px;
            width: 24px;
            right: 0;
            background-color: ${theme.colors.textColor};
            transition: .4s;
            transform: translateY(10px);
            ${({visible})=>visible && css`
                transform: rotate(45deg) translateY(0);
                width: 36px;
        `}
        }
    }
`


const MobileHeadeWrapperr = styled.header<StyledNavProps>`
    background-color: ${theme.colors.primaryBg};
    display: none;
    padding-left: 20px;
    padding-right: 15px;
    justify-content: flex-end;
    position: sticky;
    display: ${({visible}) => visible && 'none'};
    top: 0;
    width: 100%;
    height: 60px;
    align-items: center;
    overflow: hidden;


    svg {
        cursor: pointer;
    }

    @media ${theme.media.tablet} {
        display: flex;
    }


`