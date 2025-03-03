import styled from "styled-components";
import {theme} from "../styles/theme.tsx";

export const SectionTitle = styled.h2`
    font-size: 36px;
    font-family: "Josefin Sans", sans-serif;;
    letter-spacing: 5px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 90px;

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
        }
    }
`