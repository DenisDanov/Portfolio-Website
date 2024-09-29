import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCheckCircle } from 'react-icons/fa';

interface JobExperience {
    role: string;
    company: string;
    period: string;
    description: string;
    keyAchievements?: string[];
}

const experiences: JobExperience[] = [
    {
        role: 'Java Intern',
        company: 'Duo Soft',
        period: 'April 2024 - July 2024',
        description: `During my Java Internship, I delved deeper into core Java concepts and expanded my expertise into full-stack technologies, including React and TypeScript.`,
        keyAchievements: [
            'Developed a University Application Portal from scratch',
            'Designed the database schema and integrated the backend using Java and Spring',
            'Implemented security measures with Spring Security and Keycloak',
            'Developed the frontend using React, TypeScript, Material-UI and Redux'
        ]
    },
    // Add more experiences here
];

const Experience: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleDescription = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="experience" className="py-12 relative z-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-blue-400 mb-5 text-center">My Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative group rounded-lg p-6 cursor-pointer transition-transform transform hover:scale-105 shadow-lg`}
                            onClick={() => toggleDescription(index)}
                        >
                            {/* Blurred Background */}
                                <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-[5px] rounded-lg pointer-events-none"></div>

                            {/* Content Layer */}
                            <div className="relative z-10 p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                                        <p className="text-lg text-gray-300">{exp.company}</p>
                                        <p className="text-sm text-gray-400">{exp.period}</p>
                                    </div>
                                    <div className="text-white">
                                        {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                </div>

                                {/* Description with Transition */}
                                {activeIndex === index && (
                                    <div className="mt-4 text-gray-200 transition-all duration-500 ease-in-out max-h-[500px] overflow-hidden">
                                        {/* Consistent description text size */}
                                        <p className="text-base md:text-lg">{exp.description}</p>
                                        {exp.keyAchievements && (
                                            <ul className="mt-4 space-y-2">
                                                {exp.keyAchievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        {/* Set consistent icon size */}
                                                        <FaCheckCircle className="text-green-400 flex-shrink-0 w-5 h-5 mt-1 mr-2" />
                                                        {/* Consistent text size for achievements */}
                                                        <span className="text-base md:text-lg text-gray-300">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
