import React from 'react';

import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SkillItem} from "./skillItem/SkillItem.tsx";
import {Container} from "../../../components/Container.tsx";
import {style} from './Skills_style.tsx'

export const mySkills = [
    {
        title: 'HTML5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        id: 'htmlSvg',
        keyId:'1'
    },
    {
        title: 'CSS3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        id: 'cssSvg',
        keyId:'2'
    },
    {
        title: 'react',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        id: 'reactSvg',
        keyId:'3'
    },
    {
        title: 'typescript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        id: 'typescriptSvg',
        keyId:'4'
    },
    {
        title: 'styled components',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        id: 'stylecomponentsSvg',
        keyId:'5'
    },
    {
        title: 'web design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        id: 'figmaSvg',
        keyId:'6'
    }
]
export const Skills:React.FC = () => {
    return (
        <style.SkillStyled id={'Skills'}>
            <Container>
                <SectionTitle><span>My Skills</span></SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} minHeight={'550px'}>
                    {mySkills.map(({title, description,id,keyId})=> <SkillItem iconId={id} title={title} description={description} key={keyId}/>)}
                </FlexWrapper>
            </Container>

        </style.SkillStyled>
    );
};


