import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { isMobile } from "react-device-detect";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        (async () => {
            const { initParticlesEngine } = await import("@tsparticles/react"); // Lazy load engine
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            });
            setInit(true);
        })();
    }, []);

    // Callback to handle particles loaded event
    const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
        if (container) {
            console.log("Particles loaded:", container);
        }
    }, []);

    // Define particle options
    const options: ISourceOptions = useMemo(
        () => ({
            autoPlay: true,
            fpsLimit: isMobile ? 45 : 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: !isMobile,
                        mode: "repulse",
                    },
                },
                modes: {
                    repulse: {
                        distance: 150,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                collisions: {
                    enable: false,
                },
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.bounce,
                    },
                    random: false,
                    speed: isMobile ? 1 : 2.5,
                    straight: false,
                },
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800, // Adjust the particle number based on 800px² area
                    },
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1.5, max: 5 },
                },
            },
            detectRetina: true,
            fullScreen: true,
        }),
        []
    );

    // Render particles once initialized
    return init ? (
        <Particles id="tsparticles-services" particlesLoaded={particlesLoaded} options={options} />
    ) : null;
};

export default ParticlesBackground;
