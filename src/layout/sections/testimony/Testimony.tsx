import React from 'react';

import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {StyledSections} from "../../../components/StyledSections.tsx";

import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                <Icon id={'quoteSvg'}/>
                <Slider/>

            </FlexWrapper>


        </StyledTestimony>
    );
};
const StyledTestimony = styled(StyledSections)`
min-height: 615px;
  
`

