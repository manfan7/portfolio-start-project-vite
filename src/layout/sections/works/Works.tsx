import React from 'react';

import {style} from './Wotks_styles.tsx'
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

export const Works:React.FC = () => {

    return (
        <style.StyledSWorks>
            <Container>
                <SectionTitle><span>My Works</span></SectionTitle>
                <TabMenu menuItems={worksItemss}/>

                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {worksInfo.map(({title,description,imageSrc},index)=><WorkItem title={title} imageSrc={imageSrc} description={description} key={index}/>)}
                </FlexWrapper>
            </Container>

        </style.StyledSWorks>
    );
};

