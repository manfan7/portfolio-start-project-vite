import React from 'react';

import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SkillItem} from "./skillItem/SkillItem.tsx";
import {Container} from "../../../components/Container.tsx";


import {style} from './Skills_style.tsx'


export const mySkills = [
    {
        title: 'HTML5',
        description: '1. Proficient in writing semantic HTML5 markup for modern web applications.\n' +
            '\n' +
            '2. Experienced in creating accessible and SEO-friendly web structures.\n' +
            '\n' +
            '3. Skilled in integrating multimedia elements (audio, video, canvas) using HTML5.',
        id: 'htmlSvg',
        keyId: '1'
    },
    {
        title: 'CSS3',
        description: '1. Advanced knowledge of CSS3 for styling and layout design.\n' +
            '\n' +
            '2. Proficient in responsive design techniques using media queries and flexbox/grid layouts.\n' +
            '\n' +
            '3. Experienced in animations, transitions, and custom properties (CSS variables).',
        id: 'cssSvg',
        keyId: '2'
    },
    {
        title: 'react + Redux',
        description: '1. Proficient in building dynamic and interactive user interfaces using React.\n' +
            '\n' +
            '2. Experienced in state management (e.g., useState, useContext, Redux).\n' +
            '\n' +
            '3. Skilled in component-based architecture and reusable UI components.\n' + '\n' + '4. Proficient in state management using Redux for large-scale applications.\n' +
            '\n' +
            '5. Experienced in creating and managing Redux stores, reducers, and actions.\n' +
            '\n' +
            '6. Familiar with Redux Toolkit for simplified and efficient state management.',
        id: 'reactSvg',
        keyId: '3'
    },
    {
        title: 'typescript',
        description: '1. Strong understanding of TypeScript for building scalable and maintainable applications.\n' +
            '\n' +
            '2. Skilled in defining types, interfaces, and enums to ensure type safety.\n' +
            '\n' +
            '3. Experienced in integrating TypeScript with React and other frontend libraries.',
        id: 'typescriptSvg',
        keyId: '4'
    },
    {
        title: 'styled components',
        description: '1. Experienced in using Styled Components for CSS-in-JS solutions.\n' +
            '\n' +
            '2. Skilled in creating dynamic and themeable styles for React components.\n' +
            '\n' +
            '3. Proficient in integrating Styled Components with React for scalable styling.',
        id: 'stylecomponentsSvg',
        keyId: '5'
    },
    {
        title: 'web design',
        description: '1. Strong understanding of modern web design principles and best practices.\n' +
            '\n' +
            '2. Experienced in creating visually appealing and user-friendly interfaces.\n' +
            '\n' +
            '3. Skilled in tools like Figma, Adobe XD, or Sketch for prototyping and design.',
        id: 'figmaSvg',
        keyId: '6'
    },


]
export const Skills: React.FC = () => {
    return (
        <style.SkillStyled id={'Skills'}>
            <Container>
                <SectionTitle><span>My Skills</span></SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} minHeight={'550px'}>

                    {mySkills.map(({title, description, id, keyId}) => <SkillItem iconId={id} title={title}
                                                                                  description={description}
                                                                                  key={keyId}/>)}

                </FlexWrapper>
            </Container>

        </style.SkillStyled>
    );
};


