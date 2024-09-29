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

const Skills: React.FC = () => {
    // List of skills with icons
    const skills = [
        {
            name: "Problem-solving",
            description: "Excels at breaking down complex challenges into manageable tasks.",
            icon: <FaLightbulb size={36} className="text-yellow-400"/>
        },
        {
            name: "Logical & Analytical Thinking",
            description: "Highly skilled in logical reasoning and analyzing data.",
            icon: <FaBrain size={36} className="text-purple-400"/>
        },
        {
            name: "Software Development",
            description: "Proficient in modern web and software technologies.",
            icon: <FaCode size={36} className="text-green-400"/>
        },
        {
            name: "Writing Clean Code",
            description: "Focuses on producing readable, maintainable, and efficient code.",
            icon: <FaProjectDiagram size={36} className="text-blue-400"/>
        },
        {
            name: "Effective Team Collaboration",
            description: "Strong communication skills, thrives in team environments.",
            icon: <FaHandsHelping size={36} className="text-pink-400"/>
        },
        {
            name: "Quick Learner",
            description: "Able to rapidly understand and adapt to new technologies and concepts.",
            icon: <FaRocket size={36} className="text-red-400"/>
        },
        {
            name: "Adaptable to Change",
            description: "Flexibility in handling changing environments and requirements.",
            icon: <FaSyncAlt size={36} className="text-teal-400"/>
        },
        {
            name: "Proactive, Solutions-Oriented Mindset",
            description: "Approaches challenges with a positive, forward-thinking attitude.",
            icon: <FaTools size={36} className="text-yellow-400"/>
        }
    ];

    return (
        <section
            id="skills"
            className="relative z-10 flex flex-col items-center justify-center py-12 bg-opacity-50 rounded-lg shadow-lg p-8"
        >
            <h2 className="text-4xl font-bold text-blue-400 mb-10">My Skills</h2>

            {/* Skills Grid */}
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
                            className={`text-2xl font-semibold mb-2 text-blue-400 transition-transform duration-300 ${
                                'group-hover:translate-y-full group-hover:opacity-0'
                            }`}
                        >
                            {skill.name}
                        </h3>

                        {/* Description (slides up from the bottom on hover) */}
                        <p
                            className={`absolute bottom-0 left-0 right-0 flex items-center justify-center text-white opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 bg-gray-900 bg-opacity-80 p-4 transition-all duration-500`}
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

export default Skills;
