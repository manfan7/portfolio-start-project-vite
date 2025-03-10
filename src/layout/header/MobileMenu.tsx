import {NavPropsTypes} from "./Header.tsx";
import {style} from "./Header_styles.tsx";
import React from "react";


export const MobileHeader:React.FC<NavPropsTypes> = ({visible, onClick}: NavPropsTypes) => {


    return (
        <style.MobileHeadeWrapperr>
            <style.BurgerButton aria-haspopup visible={visible} onClick={onClick}>
                <div>
                    <span>
                   </span>
                </div>

            </style.BurgerButton>
        </style.MobileHeadeWrapperr>


    );
};
