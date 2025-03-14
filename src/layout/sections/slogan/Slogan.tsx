import React from 'react';

import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/theme.tsx";
import {Font} from "../../../styles/Common.tsx";



export const Slogan: React.FC<{slogan:string}> = ({slogan}: { slogan: string }) => {
    return (
        <SlogaStyled>
            <Container>
                <FlexWrapper align={'center'} direction={'column'}>
                    <SectionTitle>{slogan}</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>

            </Container>

        </SlogaStyled>
    );
};
const SlogaStyled = styled.section`
    position: relative;
    ${SectionTitle} {
        ${Font({Fmax: 36, Fmin: 23, weight: 600})}
        position: relative;

        &:after {
            content: '';
            position: absolute;
            display: inline-block;
            width: 55px;
            height: 1px;
            left: 50%;
            bottom: -30px;
            transform: translateX(-50%);
            background-color: ${theme.colors.itemsColor};
        }
    }

    padding: 80px 0;
`

