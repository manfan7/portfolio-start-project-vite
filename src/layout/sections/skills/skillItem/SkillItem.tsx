import React from 'react';
import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";


type SkillPropsType = {
    iconId: string,
title?:string
    description?:string
}

export const SkillItem = ({iconId,title,description}: SkillPropsType) => {
    return (
        <SkillStyled>
            <Icon id={iconId}/>
            <SkillTitle>{title}</SkillTitle>
            <SkillText>{description}</SkillText>
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
const SkillTitle = styled.h3`
    font-size: 16px;
    color: white;
`
const SkillText = styled.span`
    font-size: 14px;
    color: white;
`