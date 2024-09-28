import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-center p-6 bg-gray-800 text-white">
            {/* Logo Section */}
            <div className={""} data-aos="fade-right" data-aos-once="true">
                <img
                    src="/src/assets/letter-dd-logo-monogram-d-600nw-2481043095.webp"
                    alt="Denis Danov's Website Logo"
                    className="w-24 h-auto" // Adjust size as needed
                />
            </div>

            {/* Navigation Section */}
            <nav className="flex space-x-6">
                {['About', 'Portfolio', 'Experience', 'Recommendations', 'Qualities', 'Skills', 'Get in Touch'].map((item, index) => (
                    <a key={index} href={`#${item.toLowerCase().replace(/\s/g, '-')}`}>
                        <div
                            data-aos="fade-left"
                            data-aos-once="true"
                            role="button"
                            className="hover:text-gray-300 transition"
                        >
                            {item}
                        </div>
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;
