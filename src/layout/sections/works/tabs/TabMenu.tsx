import React from 'react';

import {Link} from "../../../../components/Link.tsx";
import {NavPropsTypes} from "../../../header/Header.tsx";

import{style} from "../Wotks_styles.tsx";

export const TabMenu:React.FC<NavPropsTypes> = ({menuItems}:NavPropsTypes) => {



    return (
        <style.StyledTab>
            <ul>

                {menuItems.map((item,index)=> <style.ListItem key={index}>
                    <Link href="">{item}</Link>
                </style.ListItem>)}
            </ul>
        </style.StyledTab>
    );
};

