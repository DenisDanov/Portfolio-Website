import React from 'react';
import {
    FaBrain,
    FaCode,
    FaLightbulb,
    FaHandsHelping,
    FaRocket,
    FaSyncAlt,
    FaProjectDiagram,
    FaTools
} from 'react-icons/fa';

const Strengths: React.FC = () => {
    // List of skills with icons
    const skills = [
        {
            name: "Problem-solving",
            description: "I enjoy tackling complex challenges by breaking them down into smaller, manageable tasks and working through them step by step.",
            icon: <FaLightbulb size={36} className="text-yellow-400" />
        },
        {
            name: "Logical & Analytical Thinking",
            description: "I’ve developed a strong foundation in logical reasoning and data analysis, which helps me approach problems systematically and make informed decisions.",
            icon: <FaBrain size={36} className="text-purple-400" />
        },
        {
            name: "Software Development",
            description: "I’m proficient in web and software development, having worked with modern technologies. I’m always learning and applying new tools and frameworks to improve my coding skills.",
            icon: <FaCode size={36} className="text-green-400" />
        },
        {
            name: "Writing Clean Code",
            description: "I focus on writing clean, readable, and maintainable code. I believe there’s always room to improve, and I strive to adopt best practices in every project.",
            icon: <FaProjectDiagram size={36} className="text-blue-400" />
        },
        {
            name: "Effective Team Collaboration",
            description: "I thrive in collaborative environments, communicating well with my team and contributing to a positive and productive workflow. I’m continuously learning how to work more effectively with others.",
            icon: <FaHandsHelping size={36} className="text-pink-400" />
        },
        {
            name: "Quick Learner",
            description: "I adapt quickly to new technologies and concepts, and I’m excited to keep growing by learning from experienced developers and tackling new challenges.",
            icon: <FaRocket size={36} className="text-red-400" />
        },
        {
            name: "Adaptable to Change",
            description: "I stay flexible and open-minded in rapidly changing environments, ready to adjust my approach to meet evolving project requirements.",
            icon: <FaSyncAlt size={36} className="text-teal-400" />
        },
        {
            name: "Proactive, Solutions-Oriented Mindset",
            description: "I approach tasks with a proactive attitude, always looking for ways to improve and create effective solutions. I’m eager to learn from challenges and keep growing.",
            icon: <FaTools size={36} className="text-yellow-400" />
        }
    ];

    return (
        <section
            id="strengths"
            className="relative z-[9] flex flex-col items-center justify-center py-12 bg-opacity-50 rounded-lg p-8"
        >
            <h2 className="text-4xl font-bold text-blue-400 mb-2">Core Strengths</h2>
            <h4 className="text-xl text-center font-medium text-gray-400 mb-10">Strengths That Drive My Performance</h4>

            {/* Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        style={{display: "flex", flexDirection: "column", alignItems: "center"}}
                        className="group relative backdrop-blur-[5px] p-6 bg-gray-900 bg-opacity-60 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden text-center"
                    >
                        {/* Icon */}
                        <div className="mb-4">
                            {skill.icon}
                        </div>

                        {/* Skill Name (hidden on hover) */}
                        <h3
                            className={`text-2xl font-semibold mb-2 text-blue-400 transition-transform duration-300 group-hover:translate-y-full group-hover:opacity-0`}
                        >
                            {skill.name}
                        </h3>

                        {/* Description (slides up from the bottom on hover) */}
                        <p
                            className={`absolute bottom-0 left-0 right-0 flex items-center justify-center text-white opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 bg-gray-900 bg-opacity-80 p-4 transition-all duration-300`}
                        >
                            {skill.description}
                        </p>

                        {/* Floating effect animation */}
                        <div
                            className="absolute -inset-1 from-blue-400 to-teal-400 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Strengths;
