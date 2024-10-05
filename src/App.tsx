import {useState} from "react";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticleBackground";
import ScrollToTopButton from "./components/ScrollToTopButton";
import {Analytics} from "@vercel/analytics/react"

const App = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null); // State for project selection

    return (
        <div className="App z-20 min-h-screen bg-gradient-to-tr from-[#0a1f44] via-[#0b2a5b] to-[#0c366e] relative">
            <ParticlesBackground/>
            <Header hideHeader={!!selectedProject}/>
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='smallGrid' width='8' height='8' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 8 0 L 0 0 0 8' fill='none' stroke='gray' stroke-width='0.5'/%3E%3C/pattern%3E%3Cpattern id='grid' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Crect width='80' height='80' fill='url(%23smallGrid)'/%3E%3Cpath d='M 80 0 L 0 0 0 80' fill='none' stroke='gray' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
                    backgroundSize: '80px 80px',
                    backgroundRepeat: 'repeat',
                    opacity: 0.3,
                }}
            ></div>
            <Hero/>
            <Services/>
            <Portfolio selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
            <Experience/>
            <Strengths/>
            <Contact/>
            <Footer/>
            <ScrollToTopButton hideBtn={!!selectedProject}/>
            <Analytics/>
        </div>
    );
};

export default App;
