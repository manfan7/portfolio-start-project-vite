import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/theme.tsx";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {Icon} from "../icon/Icon.tsx";
type NavPropsTypes = {
    menuItems: string[];
    visible:boolean
    onClick?: ()=>void
}

export const Nav = ({menuItems,visible,onClick}:NavPropsTypes) => {

    return (
        <StyledNav visible={visible} aria-modal='true'>
            <FlexWrapper  align={'center'} justify={'center'}>
                <ul>
                    {menuItems.map((item:string,index:number)=> <ListItem key={index}>
                        <Link href="">{item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>)}

                </ul>
            </FlexWrapper>
            <StyledButton onClick={onClick}>
                <Icon   id={'closeIcon'} width={"25"} height={"25"} viewBox={"0 0 25 25"}/>

            </StyledButton>
        </StyledNav>
    );
};

type StyledNavProps= {
    visible: boolean;
}
const StyledButton = styled.button``
const StyledNav = styled.nav<StyledNavProps>`
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
        top: 30px;
        right: 20px;
        cursor: pointer;

    }

    @media ${theme.media.tablet} {
        & {
            position: fixed;
            background-color: rgba(31, 31, 32, 0.9);
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transition: 1.2s;
        }
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
        span{
            transform: translateY(-50%);
            display: inline-block;
        }
    }
    
`
const Link = styled.a`
font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 50px;
    line-height: 1.1;
    text-align: center;
    color: transparent;
    position: relative;
    &:hover{
        ${Mask}{
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.textColor};
            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
        &:after{
            transform: scale(1);
        }

    }

    &:after{
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