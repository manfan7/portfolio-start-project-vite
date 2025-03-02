import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Nav} from "../../components/navigation/Nav.tsx";
import {theme} from "../../styles/theme.tsx";
import {Icon} from "../../components/icon/Icon.tsx";

const navigationItems:Array<string> = ['Home', "Skills",'Works', 'Testimony','Contact']
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Nav menuItems={navigationItems}/>
            <Icon id={'menuIcon'} width={'36'} height={'20'} viewBox={'0 0 36 20'}/>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    display: flex;
    padding-left: 20px;
    padding-right: 15px;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    align-items: center;
    box-shadow: 0px -16px 67px -60px rgba(111, 77, 140, 0.66) inset;

    &:after {
        content: '';
        width: 100%;
        position: absolute;
        height: 2px;
        left: 0;
        bottom: 2px;
        box-shadow: 0px 6px 20px rgba(111, 77, 140, 0.66);

    }

`