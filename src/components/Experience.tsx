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
    responsibilities?: string[];
    keyAchievements?: string[];
    achievements?: string[];
    skills?: string[];
}

const experiences: JobExperience[] = [
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
    {
        role: 'Junior Backend Java Engineer',
        company: 'Tide',
        period: 'November 2024 - July 2025',
        description: `Worked on the development and maintenance of a microservice aimed at managing and resolving Authorized Push Payment (APP) fraud cases. The service facilitates the tracing and recovery of funds to victims within the mandated seven-day period.`,
        responsibilities: [
            'Collaborated on the implementation of core functionalities using Java 21 and the Spring framework',
            'Assisted in the design and optimization of secure transaction tracking systems',
            'Participated in code reviews, debugging, and testing to ensure service quality',
            'Engaged with team members to align technical solutions with business requirements',
            'Learned and applied best practices in financial compliance and secure software development'
        ],
        achievements: [
            'Recognized as an Exampler (highest performance rating at Tide)',
            'Promoted to Mid-Level Software Engineer within 8 months'
        ],
        skills: [
            'Java 17/21',
            'Spring Framework',
            'Redis',
            'PostgreSQL',
            'JOOQ',
            'Liquibase',
            'AWS SNS/SQS',
            'Docker',
            'Kubernetes',
            'Angular with TypeScript'
        ]
    },
    {
        role: 'Software Engineer',
        company: 'Tide',
        period: 'August 2025 - Present',
        description: `Promoted to Mid-Level Software Engineer within 8 months after being recognized as an "Exampler" — the highest performance rating and reward at Tide.`,
        responsibilities: [
            'Leading team OKRs and driving delivery of strategic goals',
            'Mentoring junior developers and supporting their technical growth',
            'Conducting detailed code reviews to ensure quality and maintainability',
            'Leading automation projects that improve agent efficiency and reduce manual workloads',
            'Integrating LLMs into internal tools and workflows to enhance productivity and problem-solving',
            'Collaborating cross-functionally to deliver impactful engineering solutions aligned with business needs'
        ],
        skills: [
            'Java 17/21',
            'Spring Framework',
            'Redis',
            'PostgreSQL',
            'JOOQ',
            'Liquibase',
            'AWS SNS/SQS',
            'Docker',
            'Kubernetes',
            'Angular with TypeScript'
        ]
    }

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
                            contentArrowStyle={{borderRight: '7px solid rgba(30, 58, 138, 0.8)'}}
                            date={exp.period}
                            iconStyle={{background: '#1e3a8a', color: '#fff'}}
                            icon={index < 3 ? <MdWork/> : <MdSchool/>}
                        >
                            <h3 className="vertical-timeline-element-title text-white text-2xl">{exp.role}</h3>
                            <h4 className="vertical-timeline-element-subtitle text-gray-300 text-xl">{exp.company}</h4>
                            <p className="text-gray-200 mt-2">{exp.description}</p>

                            {/* Add animation to prevent layout shift */}
                            <div
                                className={`${activeIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                                {activeIndex === index && exp.keyAchievements ? (
                                    <ul className="mt-4 space-y-2">
                                        {exp.keyAchievements.map((achievement, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <FaCheckCircle
                                                    className="text-green-400 flex-shrink-0 w-5 h-5 mt-1 mr-2"/>
                                                <span
                                                    className="text-base md:text-lg text-gray-300">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : activeIndex == index && (<ul className="mt-4 space-y-2">
                                    <h5 className="text-lg font-semibold text-blue-300">Responsibilities</h5>
                                    {exp.responsibilities?.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <FaCheckCircle
                                                className="text-green-400 flex-shrink-0 w-5 h-5 mt-1 mr-2"/>
                                            <span
                                                className="text-base md:text-lg text-gray-300">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>)}
                            </div>
                            {activeIndex === index && exp.skills && (
                                <div className="mt-4">
                                    <h5 className="text-lg font-semibold text-blue-300">Skills</h5>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {exp.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-blue-800 text-gray-200 text-sm px-3 py-1 rounded-full shadow-md"
                                            >
                                         {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {activeIndex === index && exp.achievements && (
                                <div className="mt-4">
                                    <h5 className="text-lg font-semibold text-blue-300">Achievements</h5>
                                    <ul className="mt-2 space-y-2">
                                        {exp.achievements.map((achievement, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <FaCheckCircle
                                                    className="text-yellow-400 flex-shrink-0 w-5 h-5 mt-1 mr-2"/>
                                                <span
                                                    className="text-base md:text-lg text-gray-300">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div
                                className="text-white cursor-pointer mt-4"
                                onClick={() => toggleDescription(index)}
                            >
                                {activeIndex === index ? <FaChevronUp/> : <FaChevronDown/>}
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>

            </div>
        </section>
    );
};

export default Experience;
