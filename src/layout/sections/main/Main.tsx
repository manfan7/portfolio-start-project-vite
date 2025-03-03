import React from 'react';
import imageSrc from '../../../assets/images/my.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/theme.tsx";
export const Main = () => {
    return (
        <MainStyled>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
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
    max-width: 100%;
    width: 350px;
    height: 430px;
    
`

const MainStyled = styled.section`
       display: flex;
    min-height: 100vh;
   
`
const TextStyled = styled.h1`
       font-size: 27px;
    text-align: start;
`
const StyledName = styled.h2`
    font-size: 50px;
    font-weight: 700;
    margin: 10px 0;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 0.05em;
    span {
        position: relative;
        z-index: 2;
        &:after{
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
    }

`