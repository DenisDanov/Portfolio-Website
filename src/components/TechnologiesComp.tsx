import React, {useEffect, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {techBgColorMap} from "../types/techIconsColors.ts";

interface RenderTechnologiesProps {
    technologies: string[];
}

const RenderTechnologies: React.FC<RenderTechnologiesProps> = ({ technologies }) => {
    const swiperRef = useRef<any>(null); // Create a ref to access the Swiper instance

    // Capture the Swiper instance via onSwiper
    const onSwiper = (swiper: any) => {
        swiperRef.current = swiper; // Assign the Swiper instance to the ref
    };

    // Pause and resume autoplay properly when user tabs out/in
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden && swiperRef.current) {
                swiperRef.current.autoplay.stop();
            } else if (swiperRef.current) {
                setTimeout(() => {
                    swiperRef.current.autoplay.start();
                }, 300); // Delay to avoid speed-up effect
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <Swiper
            onSwiper={onSwiper} // Capture the Swiper instance
            spaceBetween={10}
            loop={true} // Enable loop to avoid reversing direction
            slidesPerView="auto"
            autoplay={{
                delay: 0, // No delay between slides
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            speed={3000} // Adjust speed for smooth transitions
            modules={[Autoplay]} // Include autoplay module
            className="items-center technology-swiper-container overflow-hidden max-w-[56vw]"
        >
            {technologies.map((tech) => (
                <SwiperSlide
                    key={tech}
                    className="w-auto backdrop-blur-[5px] technology-slide flex items-center gap-2 sm:gap-3 p-2 sm:p-3 dark:bg-[#ffffff0a] rounded-md relative"
                >
                    <div
                        className="p-1.5 sm:p-2 flex items-center justify-center rounded-lg"
                        style={{backgroundColor: techBgColorMap[tech] || '#33333326'}}
                    >
                        <img
                            src={`/${tech}.svg`}
                            alt={tech}
                            className="h-5 w-5 sm:h-8 sm:w-8 flex-shrink-0" // Adjust size for small screens
                        />
                    </div>
                    <span className="z-20 text-gray-100 text-base sm:text-lg font-semibold relative inline-block md:text-base">{tech}</span>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default RenderTechnologies;