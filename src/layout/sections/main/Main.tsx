import React from 'react';
import imageSrc from '../../../assets/images/my.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
export const Main = () => {
    return (
        <MainStyled>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <StyledWelcome>Hi, there</StyledWelcome>
                    <StyledName>I am Igor Gritsuk</StyledName>
                    <TextStyled>A Web Developer</TextStyled>
                </div>
                <div>
                    <ImageContainer src={imageSrc} alt={'Portfolio Photo'}></ImageContainer>
                </div>
            </FlexWrapper>

        </MainStyled>
    );
};
const ImageContainer = styled.img`
object-fit: cover;
    max-width: 100%;
`

const MainStyled = styled.div`
    background-color: #1f1f20;
    display: flex;
    align-items: center;
    justify-content: center;
`
const TextStyled = styled.h1`
    color: #fff;
    font-size: 27px;
`
const StyledName = styled(TextStyled)`
font-size: 50px;
    
`
const StyledWelcome = styled(TextStyled)`
font-size: 14px;
    
`