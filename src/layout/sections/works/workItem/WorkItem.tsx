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
site:string
}

export const WorkItem:React.FC<WorksItemProps> = ({imageSrc, title, description,site}: WorksItemProps) => {

    return (
        <style.WorkItemStyles >
            <style.ImageWrapperSlider>
            <style.Image src={imageSrc} alt={''}></style.Image>
                <a href={site}> <Button>View Project</Button></a>

            </style.ImageWrapperSlider>
            <style.DescrWrapper>
            <ItemsTitle>{title}</ItemsTitle>
            <ItemsDescr>{description}</ItemsDescr>
            <Link active href={site}>demo</Link>
            <Link active={false} href={'#'}>code</Link>
            </style.DescrWrapper>
        </style.WorkItemStyles>
    );
};

