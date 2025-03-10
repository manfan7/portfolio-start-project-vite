import React from 'react';
import imageSrc from '../../../assets/images/my.jpg'

import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {style} from "./Main_styles.tsx";

export const Main:React.FC = () => {
    return (
        <style.MainStyled>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
                    <div>
                        <style.StyledWelcome>Hi, everyone</style.StyledWelcome>
                        <style.StyledName>I am <span>Igor Gritsuk</span> </style.StyledName>
                        <style.TextStyled>A Web Developer</style.TextStyled>
                    </div>
                    <style.PhotoWrapper>
                        <style.ImageContainer src={imageSrc} alt={'Portfolio Photo'}></style.ImageContainer>
                    </style.PhotoWrapper>
                </FlexWrapper>
            </Container>


        </style.MainStyled>
    );
};
