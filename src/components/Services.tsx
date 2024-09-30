import {FaCode, FaServer, FaLightbulb} from 'react-icons/fa';
import React from 'react';
import {isMobile} from 'react-device-detect'; // Import the mobile detection library
import {Swiper, SwiperSlide} from 'swiper/react'; // Import Swiper components
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import {EffectCoverflow, Pagination} from 'swiper/modules'; // Additional Swiper styles

const Services: React.FC = () => {
    const services = [
        {
            id: 'card-1',
            title: 'Web Dev & Design',
            icon: <FaCode size={72} className="text-blue-400 group-hover:animate-pulse"/>,
            description: 'Crafting intuitive user experiences.',
            hoverDescription:
                'I combine creativity and technology to design sleek, modern web interfaces with powerful frontend tools.',
            bgColor: 'bg-blue-400',
        },
        {
            id: 'card-2',
            title: 'Backend Development',
            icon: <FaServer size={72} className="text-green-400 group-hover:animate-pulse"/>,
            description: 'Powering seamless digital experiences.',
            hoverDescription:
                'Specialized in building scalable, secure, and resilient backends using Java and Spring, powering modern web apps.',
            bgColor: 'bg-green-400',
        },
        {
            id: 'card-3',
            title: 'Stay Curious',
            icon: <FaLightbulb size={72} className="text-yellow-400 group-hover:animate-pulse"/>,
            description: 'Lifelong learner, tech enthusiast.',
            hoverDescription:
                'Continuously exploring new trends, tools, and techniques to remain on the cutting edge of technology.',
            bgColor: 'bg-yellow-400',
        },
    ];

    // Card rendering function
    const renderCard = (service: any) => (
        <div
            key={service.id}
            className="relative group flex-1 rounded-lg shadow-lg overflow-hidden h-72 transform transition-transform duration-300 hover:scale-[1.03]"
        >
            {/* Blurred Background Layer */}
            <div
                className="absolute inset-0 backdrop-blur-[5px] bg-opacity-0"
                style={{willChange: "opacity, transform"}}
            ></div>

            {/* Overlay Background Color with Opacity Change on Hover */}
            <div
                className={`absolute inset-0 ${service.bgColor} opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>

            {/* Content without Blur */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="flex items-center justify-center h-32">
                    {service.icon}
                </div>
                <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-lg text-gray-300 opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                        {service.description}
                    </p>

                    {/* Hover Description Text */}
                    <div style={{left: "-1px", right: "-1px"}}
                         className="absolute bottom-0 inset-x-1 p-4 bg-gray-900 bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <p className="text-gray-200">{service.hoverDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="services" className="relative text-white py-12 overflow-visible">
            {/* Content of the What I Do section */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-400 mb-4 transform transition-transform duration-700 ease-out">
                        What I Do
                    </h2>
                    <h4 className="text-xl font-medium text-gray-400">Explore My Key Areas of Expertise</h4>
                </div>

                {/* Conditionally render Swiper on mobile and the original flex layout for larger screens */}
                {isMobile ? (
                    <div className="swiper-container relative backdrop-blur-[5px]">
                        <Swiper
                            effect={"coverflow"} // Set the effect to coverflow
                            coverflowEffect={{
                                rotate: 50, // Slide rotation in degrees
                                stretch: 0, // Stretch space between slides
                                depth: 100, // Depth offset in px
                                modifier: 1, // Effect multiplier
                                slideShadows: true, // Enables slide shadows
                            }}
                            spaceBetween={20} // Space between slides
                            slidesPerView={1} // Show one slide at a time
                            pagination={{clickable: true, el: '.swiper-pagination'}} // Enable pagination with dots
                            modules={[EffectCoverflow, Pagination]} // Register the Coverflow and Pagination modules
                            className="swiper-container max-w-[370px]"
                        >
                            {services.map((service) => (
                                <SwiperSlide
                                    className="relative max-w-[370px] backdrop-blur-[5px]" // Add backdrop blur to each slide
                                    key={service.id}
                                >
                                    {renderCard(service)}
                                </SwiperSlide>
                            ))}
                            <div className="swiper-pagination"/>
                            {/* Custom pagination element */}
                        </Swiper>
                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        {services.map((service) => renderCard(service))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services;
