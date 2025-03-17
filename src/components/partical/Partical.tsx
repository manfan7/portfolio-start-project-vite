import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import image1 from'../../assets/images/flamingo.jpg'
import image2 from'../../assets/images/Manchester_United_logo.png'
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const Partical = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
console.log(container)
    };

    const options: ISourceOptions = useMemo(
        () => ({
            // background: {
            //     color: {
            //         value: "rgba(3,9,18,0.01)",
            //     },
            // },
            fpsLimit: 30,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 'random',
                    },
                    repulse: {
                        distance: 300,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: ["#9979b8","#d34c62",'#7572D5', "#252527","#d346d8", "#3c6307"],
                },
                links: {
                    color: "#764778",
                    distance: 300,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,

                    enable: true,
                    outModes: {
                        default: OutMode.out,
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                    value: 90,
                },
                opacity: {
                    value: 1,
                },
                shape: {
                    type: ["circle","image"],
                    "image": [
                        {
                            "src":{image1} ,
                            "height": 20,
                            "width": 23
                        },
                        {
                            "src": {image2},
                            "height": 20,
                            "width": 23
                        }

                        ]

                },

                size: {
                    value: { min: 0.2, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};