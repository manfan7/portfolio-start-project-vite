import React from 'react';
import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {ItemsTitle} from "../../../../components/ItemsTitle.tsx";
import {ItemsDescr} from "../../../../components/ItemsDescr.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../styles/theme.tsx";




type SkillPropsType = {
    iconId: string,
    title?: string
    description?: string
}

export const SkillItem = ({iconId, title, description}: SkillPropsType) => {
    return (
        <SkillStyled>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon id={iconId}/>
                </IconWrapper>
                <ItemsTitle>{title}</ItemsTitle>
                <ItemsDescr>{description}</ItemsDescr>
            </FlexWrapper>

        </SkillStyled>
    );
};

const SkillStyled = styled.div`

    width: 330px;
    padding: 62px 20px 40px;
    flex-grow:1 ;
    h3{
        margin: 70px 0 15px;
    }
  @media  ${theme.media.mobile} {
      padding: 62px 0px 40px;
  }
`
export const IconWrapper= styled.div`
    position: relative;

    &:before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
    }
`