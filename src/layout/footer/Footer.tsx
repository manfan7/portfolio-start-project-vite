import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/theme.tsx";
import {Container} from "../../components/Container.tsx";

const footerLinkList = [
    {
        social: 'instagrammSvg',
        link: '#',
        id: '1'
    },
    {
        social: 'telegrammSvg',
        link: '#',
        id: '2'
    },
    {
        social: 'vkSvg',
        link: '#',
        id: '3'
    },
    {
        social: 'linkidnSvg',
        link: '#',
        id: '4'
    },

]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <Name>Igor</Name>
                    <SocialList>
                        {footerLinkList.map(({id, social}) => {
                            return (
                                <SocialLiItem key={id}>
                                    <SocialLink>
                                        <Icon id={social} width={'21'} height={'21'} viewBox={'0 0 21 21'}/>
                                    </SocialLink>
                                </SocialLiItem>
                            )
                        })}
                    </SocialList>
                    <CopyRight>2025 Igor Gritsuk. All rights reserved</CopyRight>
                </FlexWrapper>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0px;

`
const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 22px;
    letter-spacing: 3px;
    font-weight: 700;
    text-transform: uppercase;
`
const SocialList = styled.ul`
    margin: 30px 0;
    display: flex;
    gap: 20px;
`
const SocialLiItem = styled.li`

`
const SocialLink = styled.a`
    background-color: ${theme.colors.secondaryBg};
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    transition: .4s;
    align-items: center;
    color: ${theme.colors.itemsColor};
    &:hover {
        color: ${theme.colors.primaryBg};
        transform:translateY(-4px);
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