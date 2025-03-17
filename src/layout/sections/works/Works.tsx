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
        description: 'Learning React through building a social network is highly beneficial because it provides hands-on experience with key concepts like component-based architecture, state management, and routing. It helps you understand how to structure large applications, manage user interactions, and handle real-time data updates. Additionally, you gain practical skills in integrating APIs, implementing authentication, and optimizing performance, which are crucial for modern web development. This project also enhances your ability to work with libraries like Redux or Context API for state management and React Router for navigation, preparing you for real-world development challenges',
        imageSrc: socialNetwork,
        type: 'SPA',
site:'github.com'
    },
    {
        title: 'Timer on react',
        description: 'Creating a timer in React involves challenges like managing state updates efficiently, avoiding memory leaks with setInterval, ensuring accurate timekeeping, and handling component re-renders without disrupting the timer\'s functionality. Proper cleanup in useEffect is crucial.seEffect is essential for creating a timer in React. It helps manage side effects, such as starting and clearing intervals. You can use it to set up the timer with setInterval and clean it up with clearInterval when the component unmounts to prevent memory leaks.',
        imageSrc: react,
        type: 'React',
        site:'github.com'
    },
    {
        title: 'Miami - scrolling page',
        description: 'The business card website was created using Flexbox and integrated with the Swiper.js library. Leveraging its capabilities, a visually appealing parallax effect was implemented, enhancing the overall design and user experience.',
        imageSrc: landing,
        type: 'Landing Page',
        site:'https://manfan7.github.io/miami/'
    },
    {
        title: 'Single page application',
        description: 'A SPA (Single Page Application) is a web application that loads a single HTML page and dynamically updates its content as the user interacts with it, without requiring full page reloads. SPAs use JavaScript frameworks like React, Angular, or Vue.js to fetch data and render views on the client side, providing a smoother and faster user experience similar to a desktop application. Key features include efficient navigation, reduced server load, and seamless transitions between views.',
        imageSrc: spa,
        type: 'spa',
        site:'github.com'
    },
    {
        title: 'React banner',
        description: 'React is a popular JavaScript library for building user interfaces, particularly for single-page applications (SPAs). Developed and maintained by Facebook, React allows developers to create reusable UI components, making code more modular and easier to maintain. It uses a virtual DOM to optimize rendering performance, ensuring that only the necessary parts of the UI are updated when data changes. React\'s declarative approach simplifies debugging and enhances readability, as developers describe what the UI should look like for each state rather than how to achieve it step-by-step. It supports one-way data binding, which helps manage data flow predictably. React can be integrated with other libraries or frameworks, such as Redux for state management or React Router for navigation. Its component-based architecture encourages reusability and scalability, making it ideal for both small projects and large, complex applications. Additionally, React has a vast ecosystem, strong community support, and is widely used in modern web development.',
        imageSrc: react,
        type: 'React',
        site:'github.com'
    },
     {
        title: 'Manchester United Gallary',
        description: 'This is a great idea! Creating a gallery of legendary Manchester United players will not only allow you to express your love for the club but also serve as an excellent way to practice using Flexbox and JavaScript.',
        imageSrc: manutd,
        type: 'Landing Page',
        site:'https://manfan7.github.io/manunitedGallery/'
    },
    {
        title: 'AvtoTechIngeneering',
        description: 'The website was created for an automotive company providing repair services. Technologies such as Flexbox were used, along with the integration of libraries like GSAP and AOS. Additionally, Yandex Maps was connected, and optimization was performed.',
        imageSrc: avtotech,
        type: 'spa',
        site:'https://manfan7.github.io/done/'
    },
    {
        title: 'Creative Gallary about Dali',
        description: 'Inspired by the creativity of Salvador Dalí, the capabilities of the GSAP library were demonstrated to create stunning animations. GSAP (GreenSock Animation Platform) allows for smooth, high-performance animations that can bring a unique and artistic flair to web projects. By leveraging its powerful tools, such as timeline control, morphing, and scroll-triggered animations, it\'s possible to achieve surreal and captivating effects reminiscent of Dalí\'s imaginative style. This approach not only enhances user engagement but also showcases the potential of modern web animation techniques.',
        imageSrc: dali,
        type: 'Landing Page',
        site:'https://manfan7.github.io/dali/'
    },
    {
        title: 'Beauty for everyone',
        description: 'After visiting the Tretyakov Gallery, an idea emerged to create a business card-style website for the library. This was implemented using CSS hover effects to add interactivity and visual appeal, as well as JavaScript to create a custom cursor. The hover effects bring elements to life when users interact with them, while the custom cursor enhances the overall user experience, making the website more engaging and unique. This combination of techniques results in a visually captivating and modern representation of the library\'s essence.',
        imageSrc: timer,
        type: 'Landing Page',
        site:'https://manfan7.github.io/page-with-parallax/'
    },
    {
        title: 'React - beginning of story',
        description: 'Thanks to the IT-Kamasutra course by Dimych, I’ve developed a desire to dive deeper into the world of React development.',
        imageSrc: reactdim,
        type: 'React',
        site:'https://manfan7.github.io/react-app/'
    },
    {
        title: 'Vtop - pages',
        description: 'A custom website builder designed specifically for a company, utilizing CSS techniques such as Flexbox and Grid for responsive and flexible layouts. The website incorporates the Swiper.js library for interactive and dynamic sliders. The design is modular, allowing various blocks to be reused and rearranged in different combinations and positions across the site. Additionally, the website includes a functional form with integrated submission capabilities.',
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

