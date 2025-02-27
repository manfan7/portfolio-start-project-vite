import React from 'react';
import styled from "styled-components";
import {StyledSections} from "../skills/Skills.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Nav} from "../../../components/navigation/Nav.tsx";

const worksItemss: Array<string> = ['All', "Landing Page", 'React', 'SPA']


export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My works</SectionTitle>
            <Nav menuItems={worksItemss}/>
        </StyledWorks>
    );
};

const StyledWorks = styled(StyledSections)`
    background-color: #1f1f20;
`