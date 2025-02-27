import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Nav} from "../../components/navigation/Nav.tsx";

const navigationItems:Array<string> = ['Home', "Skills",'Works', 'Testimony','Contact']
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Nav menuItems={navigationItems}/>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    background-color: #1f1f20;
    display: flex;
    justify-content: space-between;
`