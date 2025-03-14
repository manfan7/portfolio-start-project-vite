import React from 'react';

import imageSrc from '../../../assets/images/main.png'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {style} from "./Main_styles.tsx";

import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import {useHandleClick} from "../../header/UseHandleClick.tsx";

export const Main: React.FC = () => {
    const {width,breakPoint} = useHandleClick()
    return (
        <style.MainStyled id={'Home'}>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
                    <div>
                        <style.StyledWelcome>Hi, everyone</style.StyledWelcome>
                        <style.StyledName>I am <span>Igor Gritsuk</span></style.StyledName>

                        <style.TextStyled>
                            <span>A Web Developer</span>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer', `React`, `Ready to work`, 'Manchester United', 'Glory glory manunited'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></style.TextStyled>
                    </div>
                    <Tilt className="parallax-effect-img background-stripes track-on-window"
                          tiltMaxAngleX={40}
                          tiltMaxAngleY={40}
                          perspective={800}
                          transitionSpeed={1500}
                          scale={width>breakPoint? 1.03 : 1}
                          gyroscope={true}
                         tiltEnable={width>breakPoint}
                          glareEnable={true}
                          glareMaxOpacity={0.75}
                          glarePosition="all"
                          trackOnWindow={true}
                          glareBorderRadius="20px"

                    >
                        <style.PhotoWrapper>
                            <style.ImageContainer src={imageSrc} alt={'Portfolio Photo'}></style.ImageContainer>
                        </style.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>


        </style.MainStyled>
    )
        ;
};
