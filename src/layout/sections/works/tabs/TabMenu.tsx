import React from 'react';

import {Link} from "../../../../components/Link.tsx";
import {NavPropsTypes} from "../../../header/Header.tsx";

import{style} from "../Wotks_styles.tsx";
type ChangeStatusFunctionPropsType = {
    changeItems:(value:string)=>void
    currentFilterStatus:string
}
export const TabMenu:React.FC<NavPropsTypes & ChangeStatusFunctionPropsType> = ({menuItems,changeItems,currentFilterStatus}:NavPropsTypes & ChangeStatusFunctionPropsType) => {

    return (

        <style.StyledTab>
            <ul>

                {menuItems.map((item,index)=> <style.ListItem key={index}>
                    <Link active={item.toUpperCase()===currentFilterStatus.toUpperCase()} as={'button'} onClick={()=>changeItems(item)}>{item}</Link>
                </style.ListItem>)}
            </ul>
        </style.StyledTab>
    );
};

