import React from 'react';
import styled from "styled-components";
type NavPropsTypes = {
    menuItems: string[];
}

export const Nav = ({menuItems}:NavPropsTypes) => {

    return (
        <StyledNav>
            <ul>
                {menuItems.map((item:string,index:number)=> <li key={index}>
                    <a href="">{item}</a>
                </li>)}

            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
ul {
    display: flex;
    gap: 30px;
    list-style: none;
}
`