import React from 'react';
import styled from "styled-components";
import {ItemsTitle} from "../../../../components/ItemsTitle.tsx";
import {ItemsDescr} from "../../../../components/ItemsDescr.tsx";
import {Link} from "../../../../components/Link.tsx";

type WorksItemProps = {
    imageSrc: string
    title: string
    description: string
}

export const WorkItem = ({imageSrc, title, description}: WorksItemProps) => {
    return (
        <WorkItemStyles>
            <Image src={imageSrc} alt={''}></Image>
            <ItemsTitle>{title}</ItemsTitle>
            <ItemsDescr>{description}</ItemsDescr>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </WorkItemStyles>
    );
};

const WorkItemStyles = styled.div`
 ${Link} {
    padding: 0;
}
    max-width: 540px;
    width: 100%;
   
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;

    transition: .4s;

    &:hover {
        transform: scale(1.1);
    }
`


