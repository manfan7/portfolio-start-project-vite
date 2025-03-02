import React from 'react';
import styled from "styled-components";
import {ItemsDescr} from "../ItemsDescr.tsx";
import {ItemsTitle} from "../ItemsTitle.tsx";
import {FlexWrapper} from "../FlexWrapper.tsx";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper width={'auto'}>
            <Slide>
                <ItemsDescr>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.</ItemsDescr>
                <ItemsTitle>@igorgrytsuk</ItemsTitle>
            </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
`
const Slide = styled.div`
width: 100%;
    text-align: center;
`
const Pagination = styled.div`
span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 5px;
    border-radius: 50%;
    background-color: pink;
}
  
`