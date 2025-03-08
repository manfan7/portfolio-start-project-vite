import styled from "styled-components";
import {theme} from "../styles/theme.tsx";
import {Font} from "../styles/Common.tsx";

export const SectionTitle = styled.h2`
    ${Font({family:"'Josefin Sans', sans-serif",weight: 600,Fmax:36,Fmin:30})}
    letter-spacing: 5px;
    text-align: center;
    margin-bottom: 50px;

    span {
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
            @media ${theme.media.tablet} {
                bottom: -24px;
            }
        }
    }
`