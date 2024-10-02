import {useState} from 'react';
import {Link} from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa';

const Header = ({hideHeader}: { hideHeader: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-30 backdrop-blur-[5px] bg-black/30 transition-transform duration-300 ${hideHeader ? 'translate-y-[-100%]' : 'translate-y-0'}`}>
            <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
                <h1 className="text-white text-xl font-bold">Denis Danov</h1>
                <nav>
                    <div className="hidden md:flex gap-6">
                        {["Hero", "Services", "Portfolio", "Experience", "Strengths", "Contact"].map((section) => (
                            <Link
                                key={section}
                                to={section.toLowerCase()}
                                smooth={true}
                                duration={500}
                                className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                            >
                                {section === 'Hero' ? 'Home' : section === 'Services' ? 'My Services' : section === 'Strengths' ? 'Core Strengths' : section}
                            </Link>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white">
                            {isOpen ? <FaTimes size={28}/> : <FaBars size={28}/>}
                        </button>
                    </div>
                </nav>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-black/80 backdrop-blur-[5px]">
                    {["Hero", "Services", "Portfolio", "Experience", "Strengths", "Contact"].map((section) => (
                        <Link
                            key={section}
                            to={section.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                            onClick={toggleMenu}
                        >
                            {section === 'Hero' ? 'Home' : section === 'Services' ? 'My Services' : section === 'Strengths' ? 'Core Strengths' : section}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
