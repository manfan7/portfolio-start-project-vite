import {theme} from "../../styles/theme.tsx";
import styled from "styled-components";
import {Font} from "../../styles/Common.tsx";

const StyledFooter = styled.footer`
   
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0px;

`
const Name = styled.span`
    ${Font({family:"'Josefin Sans', sans-serif",weight:700,Fmax:22,Fmin:16})}
    letter-spacing: 3px;
    text-transform: uppercase;
`
const SocialList = styled.ul`
    margin: 30px 0;
    display: flex;
    gap: 20px;
    position: relative;
`
const SocialLiItem = styled.li`
    
    &:hover a{
        background-color: ${theme.colors.itemsColor};
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`
const SocialLink = styled.a`
    background-color: #252527;
    z-index: 10;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    transition: .4s;
    align-items: center;
    color: ${theme.colors.itemsColor};

    &:hover {
        background-color: ${theme.colors.itemsColor};
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }

`
const CopyRight = styled.small`
    opacity: 0.5;
    font-size: 12px;
    text-align: center;

    &:before {
        content: '\\00A9';
        vertical-align: super;
        margin-right: 3px;
    }
`
export const style = {
    CopyRight, SocialLink,SocialLiItem,SocialList,StyledFooter,Name
}