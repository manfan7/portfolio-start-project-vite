import React from 'react';
import styled from "styled-components";

import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {WorkItem} from "./workItem/WorkItem.tsx";
import socialNetwork from '../../../assets/images/social.png'
import timer from '../../../assets/images/timer.png'
import {Container} from "../../../components/Container.tsx";
import {TabMenu} from "./tabs/TabMenu.tsx";


const worksItemss: Array<string> = ['All', "Landing Page", 'React', 'SPA']
const worksInfo = [
    {
        title: 'Social Network',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: socialNetwork,

    },
    {
        title: 'Timer',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: timer,

    },
]

export const Works = () => {

    return (
        <StyledSWorks>
            <Container>
                <SectionTitle><span>My works</span></SectionTitle>
                <TabMenu menuItems={worksItemss}/>

                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    {worksInfo.map(({title,description,imageSrc},index)=><WorkItem title={title} imageSrc={imageSrc} description={description} key={index}/>)}
                </FlexWrapper>
            </Container>

        </StyledSWorks>
    );
};

const StyledSWorks = styled.section`

`