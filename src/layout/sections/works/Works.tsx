import React, {useState} from 'react';

import {style} from './Wotks_styles.tsx'
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {WorkItem} from "./workItem/WorkItem.tsx";
import socialNetwork from '../../../assets/images/social.png'
import timer from '../../../assets/images/timer.png'
import spa from '../../../assets/images/spa.jpg'
import react from '../../../assets/images/react.jpg'
import landing from '../../../assets/images/landing.jpg'
import {Container} from "../../../components/Container.tsx";
import {TabMenu} from "./tabs/TabMenu.tsx";


const tabsItems: Array<string> = ['All', "Landing Page", 'React', 'SPA']
const worksInfo = [
    {
        title: 'Social Network',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: socialNetwork,
        type: 'SPA'

    },
    {
        title: 'Timer',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: timer,
        type: 'React'
    },
    {
        title: 'Miami - scrolling page',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: landing,
        type: 'Landing Page'
    },
    {
        title: 'Single page application',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: spa,
        type: 'spa'
    },
    {
        title: 'React banner',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: react,
        type: 'React'
    },

]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('ALL')

    const [filteredItems, setFilteredItems] = useState([...worksInfo]);


    function changeItems(value: string) {
        setCurrentFilterStatus(value)

        'all'.toUpperCase() === value.toUpperCase()
            ? setFilteredItems([...worksInfo])
            : setFilteredItems(worksInfo.filter((item) => item.type.toUpperCase() === value.toUpperCase()));

    }

    return (
        <style.StyledSWorks>
            <Container>
                <SectionTitle><span>My Works</span></SectionTitle>
                <TabMenu menuItems={tabsItems} changeItems={changeItems} currentFilterStatus={currentFilterStatus}/>

                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {filteredItems.map(({title, description, imageSrc}, index) => <WorkItem title={title}
                                                                                                  imageSrc={imageSrc}
                                                                                                  description={description}
                                                                                                  key={index}/>)}

                </FlexWrapper>
            </Container>

        </style.StyledSWorks>
    );
};

