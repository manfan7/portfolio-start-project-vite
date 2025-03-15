import {useEffect, useState} from "react";

export const useHandleClick = () => {
    const [visible, setVisible] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    const breakPoint = 768

    const handleOnclick = () => {
        setVisible(visible => !visible)


    }
    useEffect(() => {

        const handleWindowResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)

    }, []);
    useEffect(() => {
        if (visible && width <=768) {

            document.body.style.overflow = 'hidden';
                    } else {

            document.body.style.overflow = 'visible';
        }


        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [visible,width]);
    return {
        visible,
        handleOnclick, width, breakPoint
    }
};