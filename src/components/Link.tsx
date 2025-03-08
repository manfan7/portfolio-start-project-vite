import {theme} from "../styles/theme.tsx";
import styled from "styled-components";
import {Font} from "../styles/Common.tsx";

export const Link = styled.a`
    ${Font({family:"'Josefin Sans', sans-serif",weight: 400,Fmax:14,Fmin:14})}
   
    letter-spacing: 1px;
    position: relative;
    text-transform: uppercase;
    z-index: 2;
    color: ${theme.colors.textColor};
    padding: 10px;

    &:before {
        content: '';
        transition: .5s;
        position: absolute;
        height: 10px;
        display: inline-block;
        bottom: -5px;
        z-index: -1;
        width: 100%;
        left: 0;
        background-color: ${theme.colors.itemsColor};
        transform: scale(0);
    }

    &:hover {
        &:before {
            transform: scale(1);
        }
    }

`