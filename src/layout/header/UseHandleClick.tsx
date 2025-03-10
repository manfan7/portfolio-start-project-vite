import {useEffect, useState} from "react";

export const useHandleClick = () => {
    const [visible, setVisible] = useState(false)
    const [width,setWidth] = useState(window.innerWidth)
    const breakPoint = 768
    const handleOnclick = () => {
        setVisible(visible => !visible)
    }
    useEffect(() => {
        const handleWindowResize= ()=>{setWidth(window.innerWidth)}
        window.addEventListener('resize',handleWindowResize)
        return()=>window.removeEventListener('resize',handleWindowResize)
    }, []);


    return {
        visible,
        handleOnclick,width, breakPoint
    }
};