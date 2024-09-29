import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {type Container, type ISourceOptions, MoveDirection, OutMode} from "@tsparticles/engine";
import Portfolio from "./components/Portfolio.tsx";
import WhatIDo from "./components/WhatIDo.tsx";
import Hero from "./components/Hero.tsx";
import Stats from 'stats.js';
import {isMobile} from "react-device-detect";
import {loadSlim} from "@tsparticles/slim";
import Experience from "./components/Experience.tsx";
import Skills from "./components/Skills.tsx";
import throttle from 'lodash.throttle';
import Contact from "./components/Contact.tsx"; // Import lodash throttle

const App = () => {
    const statsRef = useRef<Stats | null>(null);
    const [init, setInit] = useState(false);

    // Initialize and start the FPS counter
    useEffect(() => {
        statsRef.current = new Stats();
        statsRef.current.showPanel(0);
        document.body.appendChild(statsRef.current.dom);

        const animate = () => {
            statsRef.current?.begin();
            statsRef.current?.end();
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);

        return () => {
            if (statsRef.current) {
                document.body.removeChild(statsRef.current.dom);
            }
        };
    }, []);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Smooth scroll handling using lodash throttle
    useEffect(() => {
        const handleScroll = throttle(() => {
            // Smooth scroll handling logic here
            // Example: Log the scroll position or implement other effects
            console.log(window.scrollY);
        }, 200); // Adjust the throttle delay as needed (200ms is reasonable for smooth scroll)

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Use useCallback to prevent unnecessary re-creations of particlesLoaded
    const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
        if (container) {
            console.log("Particles loaded:", container);
        }
    }, []); // Empty dependency array ensures this function remains stable across renders

    // Updated particles options
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
                    value: isMobile ? 15 : 90,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: {min: 1.5, max: 5},
                },
            },
            detectRetina: true,
            fullScreen: false
        }),
        []
    );

    // Render particles after initialization is complete
    if (init) {
        return (
            <div className="App z-20 min-h-screen bg-gradient-to-tr from-[#001f3f] to-[#34363b] relative">
                <Particles
                    id="tsparticles-services"
                    particlesLoaded={particlesLoaded}
                    options={options}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        pointerEvents: 'none',  // Ensure no interactions affect performance
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='smallGrid' width='8' height='8' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 8 0 L 0 0 0 8' fill='none' stroke='gray' stroke-width='0.5'/%3E%3C/pattern%3E%3Cpattern id='grid' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Crect width='80' height='80' fill='url(%23smallGrid)'/%3E%3Cpath d='M 80 0 L 0 0 0 80' fill='none' stroke='gray' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
                        opacity: 0.2,
                    }}
                ></div>
                <Hero/>
                <WhatIDo/>
                <Portfolio/>
                <Experience/>
                <Skills/>
                <Contact/>
            </div>
        );
    }

    return (
        <div
            className="App min-h-screen flex justify-center items-center bg-gradient-to-tr from-[#001f3f] to-[#34363b]"
        >
            <div className="text-white text-xl">Loading...</div>
        </div>
    );
};

export default App;
