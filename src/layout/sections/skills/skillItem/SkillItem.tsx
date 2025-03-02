import React from 'react';
import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {ItemsTitle} from "../../../../components/ItemsTitle.tsx";
import {ItemsDescr} from "../../../../components/ItemsDescr.tsx";


type SkillPropsType = {
    iconId: string,
title?:string
    description?:string
}

export const SkillItem = ({iconId,title,description}: SkillPropsType) => {
    return (
        <SkillStyled>
            <Icon id={iconId}/>
            <ItemsTitle>{title}</ItemsTitle>
            <ItemsDescr>{description}</ItemsDescr>
        </SkillStyled>
    );
};

const SkillStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
`
