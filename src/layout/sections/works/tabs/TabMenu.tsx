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
  

    ul {
        display: flex;
       
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin:0 auto 40px
    }
`



const ListItem = styled.li`   
`