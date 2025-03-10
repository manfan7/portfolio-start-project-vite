import React from 'react';

import {FlexWrapper} from "../FlexWrapper.tsx";
import {Icon} from "../icon/Icon.tsx";
import {NavPropsTypes} from "../../layout/header/Header.tsx";
import {style} from'./Nav_styles.tsx'




export const Nav:React.FC<NavPropsTypes> = ({menuItems, visible, onClick}: NavPropsTypes) => {

    return (
        <style.StyledNav visible={visible} aria-modal='true'>
            <FlexWrapper align={'center'} justify={'center'}>

                <ul>
                    {menuItems.map((item: string, index: number) => <style.ListItem key={index}>
                        <style.Link href="">{item}
                            <style.Mask>
                                <span>{item}</span>
                            </style.Mask>
                            <style.Mask>
                                <span>{item}</span>
                            </style.Mask>
                        </style.Link>
                    </style.ListItem>)}

                </ul>
            </FlexWrapper>
            <style.StyledButton onClick={onClick}>
                <Icon id={'closeIcon'} width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
            </style.StyledButton>
        </style.StyledNav>
    );
};


