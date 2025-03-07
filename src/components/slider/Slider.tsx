import React from 'react';
import styled from "styled-components";
import {ItemsDescr} from "../ItemsDescr.tsx";
import {ItemsTitle} from "../ItemsTitle.tsx";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../styles/theme.tsx";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper width={'auto'}>
                <Slide>
                    <ItemsDescr>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt
                        ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.</ItemsDescr>
                    <ItemsTitle>@igorgrytsuk</ItemsTitle>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span className={'active'}> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    ${ItemsTitle}{
        font-weight: 600;
      letter-spacing: 1px;
        margin: 22px 0 42px;
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