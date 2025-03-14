import {NavPropsTypes} from "./Header.tsx";
import {style} from "./Header_styles.tsx";
import React, {useEffect, useState} from "react";


export const MobileHeader: React.FC<NavPropsTypes> = ({visible, onClick}: NavPropsTypes) => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            let newOpacity = 1 - scrollY / 5000;
            newOpacity = Math.max(0, Math.min(1, newOpacity));
            setOpacity(newOpacity);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <style.MobileHeadeWrapperr>
            <style.BurgerButton opacity={opacity} aria-haspopup visible={visible} onClick={onClick}>
                <div>
                    <span>
                   </span>
                </div>

            </style.BurgerButton>
        </style.MobileHeadeWrapperr>


    );
};
