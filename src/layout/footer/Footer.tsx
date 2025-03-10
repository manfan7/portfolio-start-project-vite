import React from 'react';
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {style} from "./Footer_styles.tsx";


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

export const Footer:React.FC = () => {
    return (
        <style.StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <style.Name>Igor</style.Name>
                    <style.SocialList>
                        {footerLinkList.map(({id, social}) => {
                            return (
                                <style.SocialLiItem key={id}>
                                    <style.SocialLink>
                                        <Icon id={social} width={'21'} height={'21'} viewBox={'0 0 21 21'}/>
                                    </style.SocialLink>
                                </style.SocialLiItem>
                            )
                        })}
                    </style.SocialList>
                    <style.CopyRight>2025 Igor Gritsuk. All rights reserved</style.CopyRight>
                </FlexWrapper>
            </Container>

        </style.StyledFooter>
    );
};

