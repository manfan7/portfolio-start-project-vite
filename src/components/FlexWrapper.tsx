import styled from "styled-components";

type FlexWrapperTypes ={
    direction?: string,
    justify?: string,
    align?: string,
    wrap?:string
    minHeight?: string
    width?: string
}

export const FlexWrapper = styled.div<FlexWrapperTypes>`
   display: flex;
    width: ${({width})=>width || '1140px'};
    flex-direction: ${({direction})=>direction || 'row'};
    justify-content: ${({justify})=>justify|| 'flex-start'};
    align-items: ${({align})=>align || 'stretch'};
    flex-wrap: ${({wrap})=>wrap || 'nowrap'};;
    min-height: ${({minHeight})=>minHeight || 'auto'};    
`