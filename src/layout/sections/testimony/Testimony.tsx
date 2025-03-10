import React from 'react';

import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {style} from "../skills/Skills_style.tsx";

export const Testimony:React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
            <SectionTitle><span>Testimony</span></SectionTitle>
            <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                <style.IconWrapper>
                    <Icon id={'quoteSvg'}/>
                </style.IconWrapper>

                <Slider/>

            </FlexWrapper>

            </Container>
        </StyledTestimony>
    );
};
const StyledTestimony = styled.section`
    padding-bottom: 71px;
${style.IconWrapper} {
    margin:48px 0 67px;
}
    
  
`

