import React from 'react';
import imageSrc from '../../../assets/images/my.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
export const Main = () => {
    return (
        <MainStyled>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'}>
                    <div>
                        <StyledWelcome>Hi, everyone</StyledWelcome>
                        <StyledName>I am Igor Gritsuk</StyledName>
                        <TextStyled>A Web Developer</TextStyled>
                    </div>
                    <div>
                        <ImageContainer src={imageSrc} alt={'Portfolio Photo'}></ImageContainer>
                    </div>
                </FlexWrapper>
            </Container>


        </MainStyled>
    );
};
const ImageContainer = styled.img`
object-fit: cover;
    max-width: 100%;
`

const MainStyled = styled.section`
       
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