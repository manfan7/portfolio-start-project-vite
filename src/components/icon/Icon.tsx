import React from 'react';
import sprite from '../../assets/images/icons-sprite.svg'

type iconPropsType = {
    id: 'htmlSvg' | 'cssSvg' | 'figmaSvg' | 'instagrammSvg'
    | 'reactSvg'| 'linkidnSvg'| 'quoteSvg' | 'stylecomponentsSvg' | 'telegrammSvg'
    width?: string
    height?: string
    viewBox?:string
}
export const Icon = ({id,width,height,viewBox}:iconPropsType) => {
    return (
        <svg width={width || '50'} height={height || '50'} viewBox={viewBox || '0 0 50 50'} fill="none" xmlns="http://www.w3.org/2000/svg">
<use xlinkHref={`${sprite}#${id}`} />
        </svg>
    );
};

