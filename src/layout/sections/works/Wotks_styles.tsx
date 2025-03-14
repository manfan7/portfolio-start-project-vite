import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/theme.tsx";
import {Link} from "../../../components/Link.tsx";
import {ItemsDescr} from "../../../components/ItemsDescr.tsx";
import {Button} from "../../../components/Button.tsx";


const StyledSWorks = styled.section`
    padding-bottom: 115px;
${FlexWrapper}{
    gap: 30px;
}
    h2{
        margin-bottom: 80px;
    }
    a{
        letter-spacing: 0px;
    }
    @media ${theme.media.tablet} {
        padding-bottom: 80px;
    }
`

// workItem



const WorkItemStyles = styled.div`

 
    ${Link} {
        padding: 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }

    ${ItemsDescr} {
        margin: 14px 0 10px;
        @media ${theme.media.tablet} {
            letter-spacing: 1px;
        }
    }
    
    width: 330px;
    max-width: 540px;
    flex-grow: 1;
    background-color: ${theme.colors.secondaryBg};
    
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;

    transition: .4s;
    @media ${theme.media.tablet} {
        height: 270px;
    }

`
const ImageWrapperSlider = styled.div`
    position: relative;
    overflow: hidden;
    
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        transition: .4s;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
    }

    &:hover {
        ${Button} {
            opacity: 1;
            top: 50%;
        }

        &:before {
            opacity: 1;
        }
    }

    ${Button} {
        cursor: pointer;
        position: absolute;
        left: 50%;
        top: 60%;
        transform: translate(-50%, -50%);
        opacity: 0;

        &:before {
            width: 100%;
            height: 100%;
        }
    }
    @media  ${theme.media.tablet}, (hover: none),(pointer: coarse) {
        ${Button}{
            opacity: 1;
            top: 51%;
        }
        &:before {
            opacity: 1;
        }
    }
`

const DescrWrapper= styled.div`
padding: 22px 20px;
    ${Link}{
        &:before{
            bottom: -5px;
        }
    }
`



//tabmenu
const StyledTab = styled.nav`


    ul {
        display: flex;

        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 45px
    }

    @media ${theme.media.mobile} {
        // ${Link} {
        //     &:before {
        //         bottom: -5px;
        //
        //     }
        // }
    }
`



const ListItem = styled.li`   
`

export const style = {
    StyledSWorks,DescrWrapper,ImageWrapperSlider,Image,WorkItemStyles,StyledTab,ListItem
}