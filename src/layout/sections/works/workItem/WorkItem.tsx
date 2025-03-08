import React from 'react';
import styled from "styled-components";
import {ItemsTitle} from "../../../../components/ItemsTitle.tsx";
import {ItemsDescr} from "../../../../components/ItemsDescr.tsx";
import {Link} from "../../../../components/Link.tsx";
import {theme} from "../../../../styles/theme.tsx";
import {Button} from "../../../../components/Button.tsx";

type WorksItemProps = {
    imageSrc: string
    title: string
    description: string
}

export const WorkItem = ({imageSrc, title, description}: WorksItemProps) => {
    return (
        <WorkItemStyles>
            <ImageWrapperSlider>
            <Image src={imageSrc} alt={''}></Image>
                <Button>View Project</Button>
            </ImageWrapperSlider>
            <DescrWrapper>
            <ItemsTitle>{title}</ItemsTitle>
            <ItemsDescr>{description}</ItemsDescr>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
            </DescrWrapper>
        </WorkItemStyles>
    );
};

const WorkItemStyles = styled.div`
 ${Link} {
    padding: 0;
     &+${Link}{
         margin-left: 20px;
     }
}
    ${ItemsDescr} {
        margin: 14px 0 10px;
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
        }

        &:before {
            opacity: 1;
        }
    }

    ${Button} {
        position: absolute;
        left: 50%;
        top: 50%;
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
        }
        &:before {
            opacity: 1;
        }
    }
`

const DescrWrapper= styled.div`
padding: 25px 20px;
`