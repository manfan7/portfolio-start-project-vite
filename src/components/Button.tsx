import styled from "styled-components";
import {theme} from "../styles/theme.tsx";


export const Button = styled.button`
    background-color: transparent;
    transition: .4s;
    font-size: 14px;
    width: 170px;
    height: 32px;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    z-index: 2;
&:before{
    content: '';
    display: inline-block;
 height: 10px;
    position: absolute;
    background-color: ${theme.colors.itemsColor};
    width: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: .4s;
   z-index: -1;
}
    &:hover {
      &:before{
          width: 100%;
          height: 100%;
      }

    }
    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
`