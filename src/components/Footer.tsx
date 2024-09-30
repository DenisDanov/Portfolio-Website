import {FaGithub, FaLinkedin, FaDiscord} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="backdrop-blur-[5px] bg-black/30 py-6">
            <div className="container mx-auto text-center text-gray-400">
                {/* Social Media Links */}
                <div className="flex justify-center gap-6 mb-4">
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
                {/* Email */}
                <p className="text-gray-400 mb-2">denisdanov7@gmail.com</p>

                {/* Copyright Info */}
                <p className="text-gray-400">Copyright © Denis Danov 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
