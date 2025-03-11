import {theme} from "../../styles/theme.tsx";
import styled from "styled-components";
import {NavPropsTypes} from "../../layout/header/Header.tsx";
import {Font} from "../../styles/Common.tsx";

const StyledButton = styled.button``
const StyledNav = styled.nav<NavPropsTypes>`
    position: absolute;;
    width: 100%;
    left: 0;
    transition: .5s;
    height: 100vh;
    z-index: 10;
    transform: ${({visible}) => (visible ? 'translateY(0)' : 'translateY(-140%)')};
    background-color: ${theme.colors.secondaryBg};

    ul {
        display: flex;
        gap: 30px;
        flex-direction: column;
    }

    ${StyledButton} {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 30px;
        right: 20px;
        cursor: pointer;
        display: flex;align-items: center;
        justify-content: center;
        
    }

    @media ${theme.media.tablet} {
        position: fixed;
        background-color: rgba(31, 31, 32, 0.9);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: 1.2s;

    }
`
const Mask = styled.span`
    position: absolute;

    color: ${theme.colors.itemsColor};
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    transition: .4s;

    & + & {
        top: 50%;

        span {
            transform: translateY(-50%);
            display: inline-block;
        }
    }

`
const Link = styled.a`
    ${Font({family:"'Josefin Sans', sans-serif",weight:400,Fmax:50,Fmin:36})}
    
    line-height: 1.1;
    text-align: center;
    color: transparent;
    position: relative;

    &:hover {
        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.textColor};

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }

        &:after {
            transform: scale(1);
        }

    }

    &:after {
        content: '';
        position: absolute;
        transition: .5s;
        top: 50%;
        left: -15px;
        right: -15px;
        height: 4px;
        background-color: ${theme.colors.itemsColor};
        transform: scale(0);
    }

`

const ListItem = styled.li`

`
export const style = {
    Link, ListItem, StyledNav,StyledButton,Mask
}