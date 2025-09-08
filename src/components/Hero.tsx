import {FaGithub, FaLinkedin, FaDiscord} from 'react-icons/fa';
import React, {useRef, useState, useEffect} from 'react';

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLDivElement | null>(null);
    // Array of texts to be typed and deleted
    const texts = ["Software Engineer", "Problem Solver", "Quick Learner"];
    const [currentText, setCurrentText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [blink, setBlink] = useState(false); // Caret blinking state
    const [showCaret, setShowCaret] = useState(true); // Caret visibility state

    // Typewriter effect logic
    useEffect(() => {
        const typingSpeed = 150; // Speed of typing
        const deletingSpeed = 100; // Speed of deleting
        const delayBetweenWords = 2500; // Delay before starting to delete

        const timeout = setTimeout(() => {
            setBlink(false); // Stop caret blinking while typing/deleting
            setShowCaret(true); // Always show caret while typing/deleting

            if (isDeleting) {
                // Deleting characters
                if (charIndex > 0) {
                    setCharIndex((prev) => prev - 1);
                    setCurrentText(texts[textIndex].substring(0, charIndex - 1));
                } else {
                    // Done deleting, switch to next word
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                // Typing characters
                if (charIndex < texts[textIndex].length) {
                    setCharIndex((prev) => prev + 1);
                    setCurrentText(texts[textIndex].substring(0, charIndex + 1));
                } else {
                    // After typing, start blinking the caret
                    setBlink(true); // Start caret blinking after typing
                    setTimeout(() => setIsDeleting(true), delayBetweenWords); // Delay before deleting
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);

    // Caret blinking effect (only after typing is complete)
    useEffect(() => {
        if (!blink) return; // Only start blinking when the word is fully typed

        const blinkInterval = setInterval(() => {
            setShowCaret((prev) => !prev); // Toggle caret visibility
        }, 500); // Blinking interval (500ms)

        return () => clearInterval(blinkInterval); // Cleanup interval on unmount
    }, [blink]);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative pt-5 flex flex-col md:flex-row items-center justify-center text-white p-8"
        >
            {/* Main content on the left */}
            <div className="relative z-10 flex-1 md:pr-8 max-w-md text-center md:text-left">
                <h3 className="text-2xl font-medium text-gray-400 mb-2">Hello! I am</h3>
                <h1 className="text-8xl font-extrabold mt-2 leading-tight text-blue-400 hover:scale-110 transition-transform duration-500">
                    Denis Danov
                </h1>

                {/* Dynamic text with typewriter effect */}
                <h3 className="text-2xl relative z-10 mt-5 font-medium text-gray-400">
                    - {currentText}
                    <span
                        className={`caret transition-opacity duration-500 ${
                            showCaret ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        |
                    </span>
                </h3>

                <div className="flex justify-center md:justify-start gap-6 mt-7">
                    <a
                        href="https://github.com/DenisDanov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
                    >
                        <FaGithub size={32}/>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/denis-danov-510756246"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
                    >
                        <FaLinkedin size={32}/>
                    </a>
                    <a
                        href="https://discord.com/users/301330922354114571"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
                    >
                        <FaDiscord size={32}/>
                    </a>
                </div>
            </div>

            {/* About Me Section */}
            <div
                className="relative z-10 flex-1 mt-8 md:mt-0 flex flex-col justify-center items-center md:justify-start max-w-md">
                <div
                    className="relative p-6 rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden">
                    <div
                        className="absolute inset-0 backdrop-blur-[5px] bg-opacity-60 bg-gray-800 rounded-lg"
                        style={{willChange: 'transform, opacity'}}
                    ></div>

                    {/* Content without Blur */}
                    <div className="relative z-10 text-center md:text-left">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-semibold text-blue-400">About Me</h2>
                            {/* Profile Image */}
                            <div className="w-28 h-auto ml-4">
                                <img
                                    src="/Denis-Pic.png" // Replace with your image URL
                                    alt="Denis Danov"
                                    className="w-full h-full object-cover rounded-full border-4 border-blue-400 shadow-lg"
                                />
                            </div>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300 mt-4">
                            I’m constantly driven by a relentless curiosity about software engineering. Even in my
                            free
                            time, I love working on side projects, whether they're personal, for friends, or just
                            cool
                            ideas that come up, and I enjoy exploring new technologies. Besides coding, I'm
                            passionate
                            about cars, love driving around, and enjoy hanging out with friends.
                        </p>

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
