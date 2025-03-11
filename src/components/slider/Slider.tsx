import React from 'react';
import styled from "styled-components";
import {ItemsDescr} from "../ItemsDescr.tsx";
import {ItemsTitle} from "../ItemsTitle.tsx";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../styles/theme.tsx";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">1</div>,
    <div className="item" data-value="2">2</div>,
    <div className="item" data-value="3">3</div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
];

export const Slider = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);




// export const Slider:React.FC = () => {
//     return (
//         <StyledSlider>
//             <FlexWrapper width={'auto'}>
//                 <Slide>
//                     <ItemsDescr>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
//                         incididunt
//                         ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
//                         elit.</ItemsDescr>
//                     <ItemsTitle>@igorgrytsuk</ItemsTitle>
//                 </Slide>
//             </FlexWrapper>
//             <Pagination>
//                 <span> </span>
//                 <span className={'active'}> </span>
//                 <span> </span>
//             </Pagination>
//         </StyledSlider>
//     );
// };







const StyledSlider = styled.div`
    max-width: 500px;
    ${ItemsTitle}{
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
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 20px;
        transition: .4s;
        background-color: pink;
        & + span {
            margin-left: 5px;
        }
        &.active {
            background-color: ${theme.colors.itemsColor};
            width: 20px;
        }

       
    }

`