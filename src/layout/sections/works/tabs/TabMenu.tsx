import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
type NavPropsTypes = {
    menuItems: string[];
}

export const TabMenu = ({menuItems}:NavPropsTypes) => {

    return (
        <StyledTab>
            <ul>
                {menuItems.map((item:string,index:number)=> <ListItem key={index}>
                    <Link href="">{item}</Link>
                </ListItem>)}
            </ul>
        </StyledTab>
    );
};

const StyledTab = styled.nav`
     margin-bottom: 40px;
    ul {
        display: flex;
        gap: 20px;
     justify-content: center;
    }
`



const ListItem = styled.li`   
`