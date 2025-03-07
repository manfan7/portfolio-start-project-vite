import React from 'react';

import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {IconWrapper} from "../skills/skillItem/SkillItem.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
            <SectionTitle><span>Testimony</span></SectionTitle>
            <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                <IconWrapper>
                    <Icon id={'quoteSvg'}/>
                </IconWrapper>

                <Slider/>

            </FlexWrapper>

            </Container>
        </StyledTestimony>
    );
};
const StyledTestimony = styled.section`
${IconWrapper} {
    margin:22px 0 72px;
}
    
  
`

