import React from 'react';
import sprite from '../../assets/images/icons-sprite.svg'

type iconPropsType = {
    id: string
    width?: string
    height?: string
    viewBox?:string
    onClick?: ()=>void
}
export const Icon = ({id,width,height,viewBox,onClick}:iconPropsType) => {
    return (
        <svg onClick={onClick} width={width || '50'} height={height || '50'} viewBox={viewBox || '0 0 50 50'} fill="none" xmlns="http://www.w3.org/2000/svg">
<use xlinkHref={`${sprite}#${id}`} />
        </svg>
    );
};

