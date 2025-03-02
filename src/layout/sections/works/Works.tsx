import React from 'react';
import styled from "styled-components";

import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Nav} from "../../../components/navigation/Nav.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {WorkItem} from "./workItem/WorkItem.tsx";
import socialNetwork from '../../../assets/images/social.png'
import timer from '../../../assets/images/timer.png'
import {StyledSections} from "../../../components/StyledSections.tsx";

const worksItemss: Array<string> = ['All', "Landing Page", 'React', 'SPA']
const worksInfo = [
    {
        title: 'Social Network',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: socialNetwork,

    },
    {
        title: 'Timer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: timer,

    },
]

export const Works = () => {

    return (
        <StyledSections>
            <SectionTitle>My works</SectionTitle>
            <Nav menuItems={worksItemss}/>

            <FlexWrapper justify={'space-between'}>
                {worksInfo.map(({title,description,imageSrc},index)=><WorkItem title={title} imageSrc={imageSrc} description={description} key={index}/>)}
            </FlexWrapper>
        </StyledSections>
    );
};

