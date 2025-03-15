import React, {useState} from 'react';

import {style} from './Wotks_styles.tsx'
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {WorkItem} from "./workItem/WorkItem.tsx";
import socialNetwork from '../../../assets/images/social.png'
import timer from '../../../assets/images/parallax.jpg'
import spa from '../../../assets/images/spa.jpg'
import react from '../../../assets/images/react.jpg'
import landing from '../../../assets/images/landing.jpg'
import avtotech from '../../../assets/images/avtotechingenerring.jpg'
import reactdim from '../../../assets/images/reactdimych.jpg'
import manutd from '../../../assets/images/manunitedgal.jpg'
import vtop from '../../../assets/images/vtop.jpg'
import dali from '../../../assets/images/dali.jpg'
import {Container} from "../../../components/Container.tsx";
import {TabMenu} from "./tabs/TabMenu.tsx";

import {motion, AnimatePresence} from "motion/react"


const tabsItems: Array<string> = ['All', "Landing Page", 'React', 'SPA']
const worksInfo = [
    {
        title: 'Social Network',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: socialNetwork,
        type: 'SPA',
site:'github.com'
    },
    {
        title: 'Timer on react',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: react,
        type: 'React',
        site:'github.com'
    },
    {
        title: 'Miami - scrolling page',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: landing,
        type: 'Landing Page',
        site:'https://manfan7.github.io/miami/'
    },
    {
        title: 'Single page application',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: spa,
        type: 'spa',
        site:'github.com'
    },
    {
        title: 'React banner',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: react,
        type: 'React',
        site:'github.com'
    },
     {
        title: 'Manchester United Gallary',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: manutd,
        type: 'Landing Page',
        site:'https://manfan7.github.io/manunitedGallery/'
    },
    {
        title: 'AvtoTechIngeneering',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: avtotech,
        type: 'spa',
        site:'https://manfan7.github.io/done/'
    },
    {
        title: 'Creative Gallary about Dali',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: dali,
        type: 'Landing Page',
        site:'https://manfan7.github.io/dali/'
    },
    {
        title: 'Beauty for everyone',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: timer,
        type: 'Landing Page',
        site:'https://manfan7.github.io/page-with-parallax/'
    },
    {
        title: 'React - beginning of story',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: reactdim,
        type: 'React',
        site:'https://manfan7.github.io/react-app/'
    },
    {
        title: 'Vtop - pages',
        description: 'Lorem ipsum dLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
        imageSrc: vtop,
        type: 'spa',
        site:'https://manfan7.github.io/111111/'
    },
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('ALL')

    const [filteredItems, setFilteredItems] = useState([...worksInfo]);
    const transition = {
        duration: 0.8,


    }

    function changeItems(value: string) {
        setCurrentFilterStatus(value)

        'all'.toUpperCase() === value.toUpperCase()
            ? setFilteredItems([...worksInfo])
            : setFilteredItems(worksInfo.filter((item) => item.type.toUpperCase() === value.toUpperCase()));

    }

    return (
        <style.StyledSWorks id={'Works'}>

            <Container>
                <SectionTitle><span>My Works</span></SectionTitle>
                <TabMenu menuItems={tabsItems} changeItems={changeItems} currentFilterStatus={currentFilterStatus}/>

                <FlexWrapper justify={'space-between'} align={'normal'} wrap={'wrap'}>
                    <AnimatePresence propagate>
                        {filteredItems.map(({title, description, imageSrc,site}, index) => {
                            return (

                                <motion.div style={{
                                    width: '400px',
                                    maxWidth: '540px',
                                    flexGrow: 1,

                                }}
                                            layout={true}
                                            initial={{ y: 150, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={transition}
                                            exit={{ y: -150, opacity: 0 }}
                                            key={index}


                                >

                                    <WorkItem title={title}
                                              imageSrc={imageSrc}
                                              site={site}
                                              description={description}
                                              key={index}/>
                                </motion.div>

                            )
                        })}
                    </AnimatePresence>

                </FlexWrapper>
            </Container>

        </style.StyledSWorks>
    );
};

