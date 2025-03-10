import React from 'react';
import {style} from "./Header_styles.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {NavPropsTypes} from "./Header.tsx";

export const DesctopHeader:React.FC<NavPropsTypes> = ({visible, onClick}:NavPropsTypes) => {

    return (
        <style.StyledHeader visible={visible}>
            <style.StyledButton onClick={onClick} tabIndex={1}>
                <Icon aria-haspopup id={'menuIcon'} width={'36'} height={'20'}
                      viewBox={'0 0 36 20'}/>
            </style.StyledButton>
        </style.StyledHeader>
    );
};

