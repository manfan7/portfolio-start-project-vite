import React from 'react';
import {StyledSections} from "../../../components/StyledSections.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";


export const Slogan = ({slogan}:{slogan:string}) => {
    return (
<StyledSections>
    <SectionTitle>{slogan}</SectionTitle>
    <Button>Hire me</Button>
</StyledSections>
    );
};

