import {useState, useEffect} from "react";
import {animateScroll as scroll} from "react-scroll"; // Import react-scroll for smooth scrolling

const ScrollToTopButton = ({hideBtn}: { hideBtn: boolean }) => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false); // State for scroll button visibility

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) { // Show button after scrolling 200px
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Clean up
    }, []);

    // Function to scroll back to the "hero" section
    const scrollToHero = () => {
        scroll.scrollToTop({
            duration: 100, // Adjust speed if needed
            smooth: true,
            offset: -70,  // Optional offset if you have a sticky header
        });
    };

    return (
        <>
            {showScrollTopButton && (
                <button
                    id={"scrollToTopButton"}
                    onClick={scrollToHero}
                    className={`fixed bottom-4 flex right-4 bg-opacity-50 z-[9999] p-3 bg-blue-600 text-white rounded-full border-4 border-white shadow-lg hover:bg-blue-800 transition-transform transform hover:scale-110
               xs:p-2 xs:bottom-3 xs:right-3 xs:w-10 xs:h-10
               sm:p-3 sm:bottom-4 sm:right-4 sm:w-12 sm:h-12
               md:p-3 md:bottom-4 md:right-4 md:w-12 md:h-12
               lg:p-3 lg:bottom-4 lg:right-4 lg:w-12 lg:h-12
               xl:p-3 xl:bottom-4 xl:right-4 xl:w-12 xl:h-12 
               ${hideBtn ? 'hidden' : 'block'}`}
                    aria-label="Scroll to top"
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                         id={"scrollToTopButtonSvg"}
                         className="h-6 w-6 xs:h-4 xs:w-4 sm:h-6 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-5 xl:w-5 m-auto"
                         fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
                    </svg>
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
