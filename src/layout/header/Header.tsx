
import {Nav} from "../../components/navigation/Nav.tsx";


import {MobileHeader} from "./MobileMenu.tsx";
import {DesctopHeader} from "./DesctopMenu.tsx";
import {useHandleClick} from "./UseHandleClick.tsx";

export type NavPropsTypes = {
    menuItems?: string[] | undefined;
    visible?: boolean
    onClick?: () => void
}

const navigationItems: Array<string> = ['Home', "Skills", 'Works', 'Testimony', 'Contact']
export const Header:React.FC = () => {

    const {visible, handleOnclick,width,breakPoint} = useHandleClick()
    return (
        <>
            <Nav visible={visible} menuItems={navigationItems} onClick={handleOnclick}/>
            {width<breakPoint
                ? <MobileHeader visible={visible} onClick={handleOnclick}/>
                : <DesctopHeader visible={visible} onClick={handleOnclick}/>
            }

        </>


    );
};

