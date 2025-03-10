import React from 'react';
import {Icon} from "../../../../components/icon/Icon.tsx";

import {ItemsTitle} from "../../../../components/ItemsTitle.tsx";
import {ItemsDescr} from "../../../../components/ItemsDescr.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {style} from "../Skills_style.tsx";





type SkillPropsType = {
    iconId: string,
    title?: string
    description?: string
}

export const SkillItem:React.FC<SkillPropsType> = ({iconId, title, description}: SkillPropsType) => {
    return (
        <style.SkillItemStyled>
            <FlexWrapper direction={'column'} align={'center'}>
                <style.IconWrapper>
                    <Icon id={iconId}/>
                </style.IconWrapper>
                <ItemsTitle>{title}</ItemsTitle>
                <ItemsDescr>{description}</ItemsDescr>
            </FlexWrapper>

        </style.SkillItemStyled>
    );
};

