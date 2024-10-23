import React, {useEffect} from 'react';
import {FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub} from 'react-icons/fa';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';  // Autoplay-specific styles if needed
import 'swiper/css/free-mode'; // Free mode-specific styles if needed
import 'swiper/css/zoom';
import {Navigation, Zoom} from "swiper/modules";
import {projects} from "../types/Projects.ts";
import TechnologiesComp from "./TechnologiesComp.tsx";

interface PortfolioProps {
    selectedProject: number | null;
    setSelectedProject: React.Dispatch<React.SetStateAction<number | null>>;
}

const Portfolio: React.FC<PortfolioProps> = ({selectedProject, setSelectedProject}) => {

    useEffect(() => {
        if (selectedProject !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; // Allow scrolling again when modal is closed
        }

        // Clean up to remove overflow restriction if the component is unmounted
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedProject]);

    return (
        <section id="portfolio" className="relative text-white py-8 z-10">
            <div className="container mx-auto px-6 relative z-10"> {/* z-10 ensures content is above particles */}
                <div className="text-center mb-5">
                    <h2 className="text-4xl font-bold text-blue-400 mb-2">Portfolio</h2>
                    <h4 className="text-xl font-medium text-gray-400">Part of my work</h4>
                </div>

                <Swiper
                    spaceBetween={30}
                    navigation={{
                        nextEl: '.review-swiper-button-next',
                        prevEl: '.review-swiper-button-prev',
                    }}
                    modules={[Navigation]}
                    allowTouchMove={false}
                    className="relative"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id} className="h-full flex flex-col items-center justify-between">
                            {/* Swiper Project Info */}
                            <div className="p-4 sm:p-6 rounded-lg flex-grow flex-col flex justify-center items-center">
                                <div className="mb-5 text-center relative backdrop-blur-[5px] p-2 rounded-md">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 text-green-400 relative">
                                        {project.name}
                                    </h3>
                                    <small className="block font-semibold text-sm sm:text-base text-gray-400 relative">
                                        {project.type}
                                    </small>
                                    <p className="text-gray-300 font-semibold mb-1 text-sm sm:text-base relative">
                                        {project.description}
                                    </p>

                                    {/* Button Container */}
                                    <div className="flex justify-center gap-4 mt-3">

                                        {/* Live Project Button */}
                                        {project.isLive ? (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-green-500 text-white py-1 sm:py-2 lg:py-3 px-3 sm:px-4 lg:px-6 rounded-lg flex gap-2 hover:bg-green-600 transition-all duration-300 ease-in-out shadow-lg text-sm sm:text-base lg:text-lg"
                                                style={{
                                                    maxWidth: 'fit-content',
                                                    margin: '0 auto',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <FaExternalLinkAlt className="w-4 sm:w-5 lg:w-6"/>
                                                <span>View Live</span>
                                            </a>
                                        ) : (
                                            <button
                                                disabled
                                                className="bg-red-500 text-white py-1 sm:py-2 lg:py-3 px-3 sm:px-4 lg:px-6 rounded-lg flex gap-2 cursor-not-allowed opacity-50 text-sm sm:text-base lg:text-lg"
                                                style={{
                                                    maxWidth: 'fit-content',
                                                    margin: '0 auto',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <FaExternalLinkAlt className="w-4 sm:w-5 lg:w-6"/>
                                                <span>Live Not Available</span>
                                            </button>
                                        )}

                                        {/* GitHub Button */}
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-500 text-white py-1 sm:py-2 lg:py-3 px-3 sm:px-4 lg:px-6 rounded-lg flex gap-2 hover:bg-blue-600 transition-all duration-300 ease-in-out shadow-lg text-sm sm:text-base lg:text-lg"
                                            style={{maxWidth: 'fit-content', margin: '0 auto', alignItems: 'center'}}
                                        >
                                            <FaGithub className="w-5 sm:w-6 lg:w-7"/>
                                            <span>View on GitHub</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Swiper Image Container */}
                                <div
                                    className="relative max-h-[500px] sm:max-h-[600px] lg:max-h-[745px] w-full overflow-visible"
                                    onMouseEnter={(e) => {
                                        const swiperElement = e.currentTarget.closest('.swiper') as HTMLElement & {
                                            swiper: any
                                        };
                                        if (swiperElement && swiperElement.swiper) {
                                            swiperElement.swiper.allowTouchMove = true;
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        const swiperElement = e.currentTarget.closest('.swiper') as HTMLElement & {
                                            swiper: any
                                        };
                                        if (swiperElement && swiperElement.swiper) {
                                            swiperElement.swiper.allowTouchMove = false;
                                        }
                                    }}
                                    onTouchStart={(e) => {
                                        const swiperElement = e.currentTarget.closest('.swiper') as HTMLElement & {
                                            swiper: any
                                        };
                                        if (swiperElement && swiperElement.swiper) {
                                            swiperElement.swiper.allowTouchMove = true;
                                        }
                                    }}
                                    onTouchEnd={(e) => {
                                        const swiperElement = e.currentTarget.closest('.swiper') as HTMLElement & {
                                            swiper: any
                                        };
                                        if (swiperElement && swiperElement.swiper) {
                                            swiperElement.swiper.allowTouchMove = false;
                                        }
                                    }}
                                >
                                    <img
                                        src={project.mainImage}
                                        alt={project.name}
                                        className="object-contain rounded-lg cursor-pointer"
                                        onClick={() => setSelectedProject(project.id)}
                                    />

                                    {/* Click to see more message */}
                                    <div
                                        className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs sm:text-sm py-1 px-2 rounded-md pointer-events-none">
                                        Click to see more
                                    </div>
                                </div>

                                {/* Swiper Project Technologies */}
                                <div className="mt-5 mb-7 text-center">
                                    <p className="text-gray-100 text-base sm:text-lg font-semibold mb-3 relative inline-block">
                                        <span className="relative z-10">Technologies Used</span>
                                        <span
                                            className="absolute left-0 bottom-0 h-[3px] w-full bg-gradient-to-r from-blue-400 to-green-500 animate-pulse"></span>
                                    </p>
                                    {/* Scrollable Swiper */}
                                    <div className="relative z-10">
                                        <TechnologiesComp technologies={project.technologies}/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Navigation Arrows */}
                    <i className="review-swiper-button-next absolute -right-1 text-lg sm:text-2xl cursor-pointer z-10 text-gray-200">
                        <FaChevronRight/>
                    </i>
                    <i className="review-swiper-button-prev absolute -left-1 text-lg sm:text-2xl cursor-pointer z-10 text-gray-200">
                        <FaChevronLeft/>
                    </i>
                </Swiper>

                {/* Modal for the full-screen carousel */}
                {selectedProject && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center"
                        onClick={() => setSelectedProject(null)}  // Close modal when clicking outside the content
                    >
                        <div
                            className="relative w-full h-full max-h-full max-w-full lg:max-w-[95%]"
                        >
                            <button
                                id={"close"}
                                style={{lineHeight: "0 !important"}}
                                className="absolute top-4 right-0 z-50 bg-gray-800 text-white rounded-full p-2 opacity-80 hover:opacity-100 hover:bg-red-600 transform hover:scale-110 transition-all shadow-lg"
                                onClick={() => setSelectedProject(null)}  // Close modal with X button
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3 sm:h-6 sm:w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>

                            {/* Swiper inside modal */}
                            <Swiper
                                id={"inner-slider-container"}
                                slidesPerView={1}
                                spaceBetween={41}
                                navigation={{
                                    nextEl: ".modal-swiper-button-next",
                                    prevEl: ".modal-swiper-button-prev",
                                }}
                                zoom={true}
                                modules={[Navigation, Zoom]}
                                className="w-full h-full z-20"
                            >
                                {[
                                    {
                                        src: projects.find((p) => p.id === selectedProject)?.mainImage,
                                        text: projects.find((p) => p.id === selectedProject)?.mainImageText,
                                    },
                                    ...(projects.find((p) => p.id === selectedProject)?.additionalImages || []),
                                ].map((imgObj, index) => (
                                    <SwiperSlide key={index} className="flex justify-center items-center w-full h-full"
                                                 style={{width: "auto", maxWidth: "100%"}}>
                                        {/* Image with zoom */}
                                        <div style={{maxHeight: "95vh"}}
                                             className="swiper-zoom-container w-full h-auto flex justify-center items-center"
                                             onClick={(e) => e.stopPropagation()}  // Prevent modal from closing when clicking inside the content
                                        >
                                            <img
                                                style={{maxHeight: "95vh"}}
                                                src={imgObj.src}
                                                className="object-contain w-full h-auto"
                                                alt={"Image number " + (index + 1)}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}

                                {/* See-through arrow buttons */}
                                <i
                                    id={"inner-right"}
                                    onClick={(e) => e.stopPropagation()}
                                    className="modal-swiper-button-next absolute right-1 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 bg-gray-800 text-white rounded-full p-2 opacity-80 hover:opacity-100 transition-opacity shadow-lg"
                                >
                                    <FaChevronRight/>
                                </i>
                                <i
                                    id={"inner-left"}
                                    onClick={(e) => e.stopPropagation()}
                                    className="modal-swiper-button-prev absolute left-1 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 bg-gray-800 text-white rounded-full p-2 opacity-80 hover:opacity-100 transition-opacity shadow-lg"
                                >
                                    <FaChevronLeft/>
                                </i>
                            </Swiper>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;