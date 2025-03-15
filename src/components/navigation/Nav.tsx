import React from 'react';

import {FlexWrapper} from "../FlexWrapper.tsx";
import {Icon} from "../icon/Icon.tsx";
import {NavPropsTypes} from "../../layout/header/Header.tsx";
import {style} from'./Nav_styles.tsx'




export const Nav:React.FC<NavPropsTypes> = ({menuItems, visible, onClick,scrollHeight}: NavPropsTypes) => {

    return (
        <style.StyledNav scrollHeight={scrollHeight} visible={visible} aria-modal='true' onClick={onClick}>
            <FlexWrapper align={'center'} justify={'center'}>

                <ul>
                    {menuItems && menuItems.map((item: string, index: number) => <style.ListItem key={index}>
                        <style.LinkItem to={`${item}`} smooth={true} onClick={onClick}>{item}
                            <style.Mask>
                                <span>{item}</span>
                            </style.Mask>
                            <style.Mask>
                                <span>{item}</span>
                            </style.Mask>
                        </style.LinkItem>
                    </style.ListItem>)}
               </ul>
            </FlexWrapper>
            <style.StyledButton >
                <Icon  id={'closeIcon'} width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
            </style.StyledButton>
        </style.StyledNav>
    );
};


