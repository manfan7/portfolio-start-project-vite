import React from 'react';
import styled from "styled-components";
import {ItemsDescr} from "../ItemsDescr.tsx";
import {ItemsTitle} from "../ItemsTitle.tsx";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './slider.css'
type SlidePropsType = {
    text: string,
    name:string
}

const SlideItem: React.FC<SlidePropsType> = ({name,text}:SlidePropsType) => {
    return (

        <Slide>
            <ItemsDescr>{text}</ItemsDescr>
            <ItemsTitle>{name}</ItemsTitle>
        </Slide>

    );
};


const items = [
    <SlideItem  text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'} name={'@igorgrytsuk'}/>,
    <SlideItem  text={'Lorem Ipsum is ard dummy text ever since the 1500pecimen book. It has'} name={'@alexa_gritsuk'}/>,

    <SlideItem  text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been nce the 1500s, whepe and scrambled it to make a type specimen book. It has'} name={'@nutriSasha'}/>,

]

export const Slider = () => (
    <StyledSlider>

        <AliceCarousel
            mouseTracking
            items={items}
            infinite
            disableButtonsControls
        />

    </StyledSlider>
);


const StyledSlider = styled.div`
    max-width: 500px;
width: 100%;
    ${ItemsTitle} {
        font-weight: 600;
        letter-spacing: 1px;
        margin: 22px 0 34px;
        display: inline-block;
    }
`
const Slide = styled.div`
    width: 100%;
    text-align: center;
`
// const Pagination = styled.div`
//     span {
//         display: inline-block;
//         width: 7px;
//         height: 7px;
//         border-radius: 20px;
//         transition: .4s;
//         background-color: pink;
//
//         & + span {
//             margin-left: 5px;
//         }
//
//         &.active {
//             background-color: ${theme.colors.itemsColor};
//             width: 20px;
//         }
//
//
//     }
//
// `