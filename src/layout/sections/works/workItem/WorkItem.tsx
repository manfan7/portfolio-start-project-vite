import React from 'react';

import {ItemsTitle} from "../../../../components/ItemsTitle.tsx";
import {ItemsDescr} from "../../../../components/ItemsDescr.tsx";
import {Link} from "../../../../components/Link.tsx";

import {Button} from "../../../../components/Button.tsx";
import {style} from "../Wotks_styles.tsx";

type WorksItemProps = {
    imageSrc: string
    title: string
    description: string
}

export const WorkItem:React.FC<WorksItemProps> = ({imageSrc, title, description}: WorksItemProps) => {
    return (
        <style.WorkItemStyles>
            <style.ImageWrapperSlider>
            <style.Image src={imageSrc} alt={''}></style.Image>
                <Button>View Project</Button>
            </style.ImageWrapperSlider>
            <style.DescrWrapper>
            <ItemsTitle>{title}</ItemsTitle>
            <ItemsDescr>{description}</ItemsDescr>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
            </style.DescrWrapper>
        </style.WorkItemStyles>
    );
};

