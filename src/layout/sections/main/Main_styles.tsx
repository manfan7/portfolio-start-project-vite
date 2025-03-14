import styled from "styled-components";
import {theme} from "../../../styles/theme.tsx";
import {Font} from "../../../styles/Common.tsx";
import bgImage from '../../../assets/images/IMG20231.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
const ImageContainer = styled.img`
    object-fit: cover;
    box-shadow: 0px 4px 25px 2px black, 0px 4px 25px 2px inset black;
   backdrop-filter: saturate(231%) blur(1px);
    width: 350px;
    height: 430px;
    @media ${theme.media.mobile} {
        width: 310px;
        height: 370px;
    }

`

const MainStyled = styled.section`
  

    display: flex;
    min-height: 100vh;

    & .parallax-effect-img {
        background-image: url(${bgImage});
    }
  
        overflow: hidden;
    

`
const TextStyled = styled.h1`
    ${Font({weight: 400, Fmax: 27, Fmin: 20})}
    text-align: start;
    &>span{
        display: none;
    }
    @media ${theme.media.mobile} {
        margin-bottom: 74px;
    }
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
            @media ${theme.media.mobile} {
                height: 20px;
                bottom: -9px;
            }
        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
        padding-right: 10px;
        text-align: start;
        ${FlexWrapper} {
            justify-content: center;
        }
    }
`
const StyledWelcome = styled.span`
    
font-size: 14px;
    display: flex;
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;


    &:before {
        content: '';
        position: absolute;
        width: 360px;
        height: 470px;
        top: -20px;
        left: 24px;
        z-index: -1;
        border: 5px solid ${theme.colors.itemsColor};

        @media ${theme.media.mobile} {
            width: 314px;
            height: 416px;
            top: -20px;
            left: 12px;
        }
    }

   
`




export const style = {
    MainStyled,StyledWelcome,StyledName,TextStyled,ImageContainer,PhotoWrapper
}