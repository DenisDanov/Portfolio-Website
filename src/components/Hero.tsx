import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import React, { useRef } from 'react';

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLDivElement | null>(null);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative flex flex-col md:flex-row items-center justify-center text-white p-8"
        >
            {/* Main content on the left */}
            <div
                className="relative z-10 flex-1 md:pr-8 max-w-md text-center md:text-left"
            >
                <h3 className="text-2xl font-medium text-gray-400 mb-2">
                    Hello! I am
                </h3>
                <h1 className="text-8xl font-extrabold mt-2 leading-tight text-blue-400 hover:scale-110 transition-transform duration-500">
                    Denis Danov
                </h1>
                <h3 className="text-2xl mt-5 font-medium text-gray-400">
                    - Web Developer
                </h3>
                <div className="flex justify-center md:justify-start gap-6 mt-7">
                    <a
                        href="https://github.com/DenisDanov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
                    >
                        <FaGithub size={32} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/denis-danov-510756246"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
                    >
                        <FaLinkedin size={32} />
                    </a>
                    <a
                        href="https://discord.com/users/301330922354114571"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
                    >
                        <FaDiscord size={32} />
                    </a>
                </div>
            </div>

            {/* About Me Section */}
            <div
                className="relative z-10 flex-1 mt-8 md:mt-0 flex flex-col justify-center items-center md:justify-start max-w-md"
            >
                {/* Text Section with Image next to "About Me" */}
                <div className="relative p-6 rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
                    {/* Blurred Background */}
                    <div
                        className="absolute inset-0 backdrop-blur-[5px] bg-opacity-60 bg-gray-800 rounded-lg"
                        style={{ willChange: 'transform, opacity' }}
                    ></div>

                    {/* Content without Blur */}
                    <div className="relative z-10 text-center md:text-left">
                        <div className="flex items-center md:justify-between">
                            <h2 className="text-3xl font-semibold mb-4 text-blue-400">
                                About Me
                            </h2>
                            {/* Profile Image next to "About Me" */}
                            <div className="w-28 h-auto ml-4">
                                <img
                                    src="/Denis-Pic.png" // Replace with your image URL
                                    alt="Denis Danov"
                                    className="w-full h-full object-cover rounded-full border-4 border-blue-400 shadow-lg"
                                />
                            </div>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300 mt-4">
                            I’m constantly driven by a relentless curiosity about software engineering. Even in my free
                            time, I love working on side projects, whether they're personal, for friends, or just cool
                            ideas that come up, and I enjoy exploring new technologies. Besides coding, I'm passionate
                            about cars, love driving around, and enjoy hanging out with friends.
                        </p>
                        {/* Thanks & LinkedIn */}
                        <div className="mt-6">
                            <p className="text-lg leading-relaxed text-gray-300 font-semibold">
                                Thanks for stopping by!
                            </p>
                            <a
                                href="https://www.linkedin.com/in/denis-danov-510756246"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 text-white bg-blue-600 px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors"
                            >
                                <FaLinkedin className="inline-block mr-2" size={20}/>
                                Connect with me on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
