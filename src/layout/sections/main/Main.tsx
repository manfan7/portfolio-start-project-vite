import React from 'react';
import imageSrc from '../../../assets/images/my.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/theme.tsx";
import {Font} from "../../../styles/Common.tsx";
export const Main = () => {
    return (
        <MainStyled>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
                    <div>
                        <StyledWelcome>Hi, everyone</StyledWelcome>
                        <StyledName>I am <span>Igor Gritsuk</span> </StyledName>
                        <TextStyled>A Web Developer</TextStyled>
                    </div>
                    <PhotoWrapper>
                        <ImageContainer src={imageSrc} alt={'Portfolio Photo'}></ImageContainer>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>


        </MainStyled>
    );
};
const ImageContainer = styled.img`
object-fit: cover;
   
    width: 350px;
    height: 430px;
    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
    
`

const MainStyled = styled.section`
       display: flex;
    min-height: 100vh;
    background-color: ${theme.colors.primaryBg}!important;
`
const TextStyled = styled.h1`
    ${Font({weight: 400, Fmax: 27, Fmin: 20})}
    
    text-align: start;
`
const StyledName = styled.h2`
    ${Font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
    margin: 10px 0;
    letter-spacing: 0.05em;

    span {
        position: relative;
        z-index: 2;
        white-space: nowrap;

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            display: inline-block;
            height: 10px;
            z-index: -1;
            width: 100%;
            background-color: ${theme.colors.itemsColor};
        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
        padding-right: 10px;
        text-align: start;
    }
`
const StyledWelcome = styled.span`
    
font-size: 14px;
    display: flex;
`
export const PhotoWrapper = styled.div`
position: relative;
    z-index: 1;
   
    
    &:before{
        content: '';
        position: absolute;
        width: 360px;
        height: 470px;
        top: -20px;
        left: 24px;
        z-index: -1;
        border: 5px solid ${theme.colors.itemsColor};
        
        @media ${theme.media.mobile}{
            width: 314px;height: 414px;
            top: -17px;
            left: 16px;
        }
    }
    @media screen and (max-width:1223px) {
        margin-right: 20px;
    }
    @media ${theme.media.mobile} {
        margin-top: 60px;
    }
`