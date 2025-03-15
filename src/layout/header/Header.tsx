
import {Nav} from "../../components/navigation/Nav.tsx";


import {MobileHeader} from "./MobileMenu.tsx";
import {DesctopHeader} from "./DesctopMenu.tsx";
import {useHandleClick} from "./UseHandleClick.tsx";
import {useEffect, useState} from "react";

export type NavPropsTypes = {
    menuItems?: Array<string>;
    visible?: boolean
    onClick?: () => void
    active?:boolean
    scrollHeight?: boolean
}

const navigationItems: Array<string> = ['Home', "Skills", 'Works', 'Testimony', 'Contact']
export const Header:React.FC = () => {

    const {visible, handleOnclick,width,breakPoint} = useHandleClick()
    const [scrollHeight,setScrollHeight] =  useState(0)
    useEffect(() => {
        const scrollingFunc = ()=>{
            const scrollY = window.scrollY || window.pageYOffset;
            setScrollHeight(scrollY)
        }


        window.addEventListener('scroll',scrollingFunc)
        return()=>window.removeEventListener('scroll',scrollingFunc)
    }, [scrollHeight]);

    return (
        <>
            <Nav visible={visible} menuItems={navigationItems} scrollHeight={scrollHeight} onClick={handleOnclick}/>
            {width<breakPoint
                ? <MobileHeader visible={visible} onClick={handleOnclick}/>
                : <DesctopHeader visible={visible} onClick={handleOnclick}/>
            }

        </>


    );
};

