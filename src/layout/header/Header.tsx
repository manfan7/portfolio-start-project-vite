import styled from "styled-components";

import {Nav} from "../../components/navigation/Nav.tsx";
import {theme} from "../../styles/theme.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {useState} from "react";
import {MobileHeader} from "./MobileMenu.tsx";

export type StyledNavProps = {
    visible: boolean;
    onClick?: ()=>void
}
export const useHandleClick = () => {
    const [visible, setVisible] = useState(false)
    const handleOnclick = () => {
        setVisible(visible => !visible)
    }
    return {
        visible,
        handleOnclick
    }
};
const navigationItems: Array<string> = ['Home', "Skills", 'Works', 'Testimony', 'Contact']
export const Header = () => {

    const {visible, handleOnclick} = useHandleClick()
    return (
        <>
            <Nav visible={visible} menuItems={navigationItems} onClick={handleOnclick}/>
            <StyledHeader visible={visible}>
                <StyledButton onClick={handleOnclick} tabIndex={1}>
                    <Icon aria-haspopup id={'menuIcon'} width={'36'} height={'20'}
                          viewBox={'0 0 36 20'}/>
                </StyledButton>
            </StyledHeader>
            <MobileHeader visible={visible} onClick={handleOnclick}/>
        </>


    );
};
const StyledButton = styled.button`
    display: flex;
    width: 36px;
    height: 36px;
    align-items: center;
`


const StyledHeader = styled.header<StyledNavProps>`
    background-color: ${theme.colors.primaryBg};
    display: flex;
    padding-left: 20px;
    padding-right: 15px;
    justify-content: flex-end;
    position: sticky;
    display: ${({visible}) => visible && 'none'};
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 10;
    align-items: center;
    overflow: hidden;
    box-shadow: 0px -16px 67px -60px rgba(111, 77, 140, 0.66) inset;

    svg {
        cursor: pointer;
    }

    &:after {
        content: '';
        width: 100%;
        position: absolute;
        height: 2px;
        left: 0;
        bottom: 2px;
        box-shadow: 0px 6px 20px rgba(111, 77, 140, 0.66);

    }

    @media ${theme.media.tablet} {
        display: none;
    }

`
