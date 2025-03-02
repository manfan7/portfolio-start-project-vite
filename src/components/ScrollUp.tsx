import React from 'react';
import styled from "styled-components";
import {Icon} from "./icon/Icon.tsx";

export const ScrollUp = () => {
    return (
       <ArrowWrapper>
           <Icon id={'arrowupSvg'} width={'20'} height={'20'} viewBox={'0 0 20 20'}/>
       </ArrowWrapper>
    );
};

const ArrowWrapper = styled.div`
position: fixed;
    display: flex;
justify-content: center;
    align-items: center;
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.3);
    
`