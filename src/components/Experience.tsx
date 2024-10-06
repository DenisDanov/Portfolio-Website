import React, {useState} from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaChevronDown, FaChevronUp, FaCheckCircle} from 'react-icons/fa';
import {MdWork, MdSchool} from 'react-icons/md';

interface JobExperience {
    role: string;
    company: string;
    period: string;
    description: string;
    keyAchievements?: string[];
}

const experiences: JobExperience[] = [
    {
        role: 'Full Stack Developer (Personal Project)',
        company: 'Auto Show Website',
        period: 'October 2023 - February 2024',
        description: `Developed a full-stack web application for an auto show website, handling both frontend and backend development.`,
        keyAchievements: [
            'Developed the backend using Java with Spring Boot and MySQL',
            'Built the frontend using HTML, CSS, JavaScript, and jQuery',
            'Integrated Thymeleaf for server-side rendering',
            'Implemented dynamic content loading and database management'
        ]
    },
    {
        role: 'Frontend Developer (Freelance)',
        company: 'Client Project',
        period: 'March 2024 - March 2024',
        description: `Developed a fully responsive frontend website, focusing on clean design and user experience.`,
        keyAchievements: [
            'Designed and developed the website using HTML, CSS, and JavaScript',
            'Ensured responsiveness across different screen sizes and browsers',
            'Implemented interactive design with dynamic content changes based on user input'
        ]
    },
    {
        role: 'Java Intern',
        company: 'Duo Soft',
        period: 'April 2024 - July 2024',
        description: `As a Java Intern, I gained deeper knowledge of core Java concepts and expanded into full-stack technologies, including React TypeScript, Redux, and MUI.`,
        keyAchievements: [
            'Developed a University Application Portal from scratch',
            'Designed the database schema and integrated the backend using Java and Spring',
            'Implemented security measures with Spring Security and Keycloak',
            'Developed the frontend using React, TypeScript, Material-UI, and Redux'
        ]
    },
    {
        role: 'Full Stack Developer (Freelance)',
        company: 'Client Project',
        period: 'July 2024 - September 2024',
        description: `Built a full-stack application using modern technologies, managing both backend and frontend development.`,
        keyAchievements: [
            'Developed the backend with Java, Spring Boot, and MySQL',
            'Built the frontend using React, TypeScript, and Material-UI',
            'Integrated user authentication and form validation',
            'Deployed the application and ensured a smooth handoff for future maintenance'
        ]
    },
];

const Experience: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleDescription = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="experience" className="py-8 relative z-[1]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-blue-400 mb-2 text-center">My Experience</h2>
                <h4 className="text-xl font-medium text-gray-400 mb-10 text-center">A Glimpse Into My Professional
                    Journey</h4>

                <VerticalTimeline
                animate={false}
                >
                    {experiences.slice(0).reverse().map((exp, index) => (
                        <VerticalTimelineElement
                            key={index}
                            contentStyle={{
                                background: 'rgba(30, 58, 138, 0.5)',
                                color: '#fff',
                                backdropFilter: 'blur(5px)',
                                WebkitBackdropFilter: 'blur(5px)',
                                minHeight: activeIndex === index ? 'auto' : '150px',  // Give minimum height to prevent shifts
                                transition: 'all 0.5s ease',
                            }}
                            contentArrowStyle={{ borderRight: '7px solid rgba(30, 58, 138, 0.8)' }}
                            date={exp.period}
                            iconStyle={{ background: '#1e3a8a', color: '#fff' }}
                            icon={index < 2 ? <MdWork /> : <MdSchool />}
                        >
                            <h3 className="vertical-timeline-element-title text-white text-2xl">{exp.role}</h3>
                            <h4 className="vertical-timeline-element-subtitle text-gray-300 text-xl">{exp.company}</h4>
                            <p className="text-gray-200 mt-2">{exp.description}</p>

                            {/* Add animation to prevent layout shift */}
                            <div className={`${activeIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                                {activeIndex === index && exp.keyAchievements && (
                                    <ul className="mt-4 space-y-2">
                                        {exp.keyAchievements.map((achievement, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <FaCheckCircle className="text-green-400 flex-shrink-0 w-5 h-5 mt-1 mr-2" />
                                                <span className="text-base md:text-lg text-gray-300">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div
                                className="text-white cursor-pointer mt-4"
                                onClick={() => toggleDescription(index)}
                            >
                                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>

            </div>
        </section>
    );
};

export default Experience;
