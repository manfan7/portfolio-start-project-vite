import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/theme.tsx";
type NavPropsTypes = {
    menuItems: string[];
}

export const Nav = ({menuItems}:NavPropsTypes) => {

    return (
        <StyledNav>
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
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    margin-right: 3%;
    
    ul {
        display: flex;
        gap: 30px;
     
    }
`

const Link = styled.a`
font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 50px;
    line-height: 1.1;
    text-align: center;
    color: transparent;
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
const ListItem = styled.li`
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