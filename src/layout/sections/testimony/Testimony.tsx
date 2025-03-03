import React from 'react';

import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle><span>Testimon</span>y</SectionTitle>
            <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                <Icon id={'quoteSvg'}/>
                <Slider/>

            </FlexWrapper>


        </StyledTestimony>
    );
};
const StyledTestimony = styled.section`

  
`

