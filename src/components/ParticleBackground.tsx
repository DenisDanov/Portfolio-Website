import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { isMobile } from "react-device-detect";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);
    const [initialCanvasSize, setInitialCanvasSize] = useState<{ width: number, height: number } | null>(null);

    useEffect(() => {
        (async () => {
            const { initParticlesEngine } = await import("@tsparticles/react"); // Lazy load engine
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            });
            setInit(true);
        })();

        // Capture initial window dimensions
        const initialWidth = window.innerWidth;
        const initialHeight = window.innerHeight;
        setInitialCanvasSize({ width: initialWidth, height: initialHeight });
    }, []);

    const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
        if (container) {
            // Once particles are loaded, explicitly set the canvas size to the initial size
            const canvas = document.querySelector('canvas');
            if (canvas && initialCanvasSize) {
                canvas.width = initialCanvasSize.width;  // Set canvas width
                canvas.height = initialCanvasSize.height; // Set canvas height
            }

            if (isMobile) {
                container.canvas.windowResize().then(() => {

                })
                container.canvas.resize = () => {
                    return false;
                };
            }
        }
    }, [initialCanvasSize]);

    // Define particle options
    const options: ISourceOptions = useMemo(() => ({
        autoPlay: true,
        fpsLimit: isMobile ? 45 : 120,
        interactivity: {
            events: {
                resize:{
                    enable: false,
                    delay: -1
                },
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
                speed: isMobile ? 1 : 1.5,
                straight: false,
            },
            number: {
                value: isMobile ? 15 : 80,
                density: {
                    enable: !isMobile,
                    value_area: 800,
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
        fullScreen: false, // Disable automatic full-screen mode
    }), []);

    return init && initialCanvasSize ? (
        <div
            id="tsparticles-services"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: initialCanvasSize.width,
                height: initialCanvasSize.height,
                pointerEvents: 'none',
            }}
        >
            <Particles
                id="tsparticles-canvas"
                style={{
                    width: initialCanvasSize.width,
                    height: initialCanvasSize.height,
                }}
                particlesLoaded={particlesLoaded}
                options={options}
            />
        </div>
    ) : null;
};

export default ParticlesBackground;
