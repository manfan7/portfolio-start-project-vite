import  {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "./icon/Icon.tsx";
import { animateScroll as scroll} from 'react-scroll';
export const ScrollUp = () => {
    const [show,setShow] = useState(false)
    useEffect(() => {
        const handleScroll = ()=>{

            window.scrollY + window.innerHeight >= document.documentElement.scrollHeight-700 ?  setShow(true) : setShow(false)

        }
        window.addEventListener('scroll',handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)
    }, []);
    return (
        <>
        {show && <ArrowWrapper onClick={()=>{scroll.scrollToTop()}}>
            <Icon id={'arrowupSvg'} width={'16'} height={'15'} viewBox={'0 0 16 15'}/>
        </ArrowWrapper>}
        </>
    );
};

const ArrowWrapper = styled.button`
    position: fixed;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
`