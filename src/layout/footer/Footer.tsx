import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
const footerLinkList = [
    {
        social: 'instagrammSvg',
        link:'#',
id:'1'
    },
    {
        social: 'telegrammSvg',
        link:'#',
        id:'2'
    },
    {
        social: 'vkSvg',
        link:'#',
        id:'3'
    },
    {
        social: 'linkidnSvg',
        link:'#',
        id:'4'
    },

]

export const Footer = () => {
    return (
   <StyledFooter>
       <FlexWrapper direction={'column'} align={'center'}>
           <Name>Igor</Name>
           <SocialList>
               {footerLinkList.map(({id,social})=>{
                   return  (
                       <SocialLiItem>
                         <SocialLink>
                           <Icon id={social} width={'21'} height={'21'} viewBox={'0 0 21 21'}/>
                       </SocialLink>
                       </SocialLiItem>
                   )
               })}


           </SocialList>
           <CopyRight>2025 Igor Gritsuk. All rights reserved</CopyRight>
       </FlexWrapper>

   </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #1f1f20;
    padding: 50px 0px;
    display: flex;
justify-content: center;
`
const Name = styled.span`
color: white;
    font-size: 20px;
    text-transform: uppercase;
`
const SocialList = styled.ul`
padding-left: 0px;
    list-style: none;
    display: flex;
    gap: 10px;
`
const SocialLiItem = styled.li`

`
const SocialLink = styled.a`
  
`
const CopyRight = styled.small`
    color: grey;
&:before{
    content: '\\00A9';
    vertical-align: super;
    margin-right: 3px;
}
`