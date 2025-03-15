import styled, {css, keyframes} from "styled-components";
import {NavPropsTypes} from "./Header.tsx";
import {theme} from "../../styles/theme.tsx";


//desctop
const StyledButton = styled.button`
    display: flex;
    width: 36px;
    height: 36px;
    align-items: center;
    cursor: pointer;
`
const fadeOut = keyframes`
    from {
        opacity: 1;

    }
    to {
        opacity: 0;
        top: 100px;

    }
`;

const StyledHeader = styled.header<NavPropsTypes>`
    background-color: ${theme.colors.primaryBg};
    display: flex;

    padding-right: 27px;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    margin-bottom: -80px;
    ${({visible}) => visible && css`animation: ${fadeOut} 1s forwards;`}
    z-index: 10;
    align-items: center;
    overflow: hidden;
    box-shadow: 0px -16px 67px -60px rgba(111, 77, 140, 0.66) inset;


    &:after {
        content: '';
        width: 100%;
        position: absolute;
        height: 2px;
        left: 0;
        bottom: 2px;
        box-shadow: 0px 6px 20px rgba(111, 77, 140, 0.66);

    }


`

//mobile
const BurgerButton = styled.button<NavPropsTypes & {opacity:number}>`
    position: fixed;
    width: 200px;
    opacity: ${({opacity})=>opacity};
    display: ${({opacity})=>opacity<0.2 ? 'none': 'block'};
    height: 200px;
    top: -100px;
    right: -100px;
z-index: 5;
    span {

        display: block;

        height: 2px;
        width: 36px;
        transition: .4s;
        background-color: ${theme.colors.textColor};
        left: 0px;
        bottom: 0px;

        ${({visible}) => visible && css`background-color: rgba(255, 255, 255, 0);`}
        ${({visible}) => visible && css`animation: ${fadeOut} 1s forwards;`}
        &:before {
            content: '';
            display: block;
            position: absolute;
            height: 2px;
            width: 36px;
            background-color: ${theme.colors.textColor};
            transition: .4s;
            transform: translateY(-10px);
            ${({visible}) => visible && css`
                transform: rotate(-45deg) ;
                animation: ${fadeOut} 1s forwards
            `}
        
        }

        &:after {
            content: '';
            display: block;
            position: absolute;
            height: 2px;
            width: 24px;
            right: 0;
            background-color: ${theme.colors.textColor};
            transition: .4s;
            transform: translateY(10px);
            ${({visible}) => visible && css`
                transform: rotate(45deg) ;
                width: 36px;
            `}
        }

        ${({visible}) => visible && css`animation: ${fadeOut} 1s forwards;`}

    }
`


const MobileHeadeWrapperr = styled.header`
    background-color: ${theme.colors.primaryBg};
    display: flex;
    padding-left: 20px;
    padding-right: 15px;
    justify-content: flex-end;
    position: sticky;
    animation-delay: .5s;
    border-bottom: 1px solid #1f1f20;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 28px;
    align-items: center;
    overflow: hidden;


    div {
        cursor: pointer;
        position: absolute;
        height: 36px;
        width: 36px;
        left: 40px;
        bottom: 37px;
        display: flex;
        justify-content: center;
        align-items: center;
    }




`


export const style = {
    fadeOut, StyledButton, StyledHeader, BurgerButton, MobileHeadeWrapperr
}