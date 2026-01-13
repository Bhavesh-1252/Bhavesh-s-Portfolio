import { developerInfo } from '../data/profile'
import { useState, useEffect, useContext } from 'react';
// import { mobileContext } from '../context/context';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // const { isMobile, setIsMobile } = useContext(mobileContext)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
    const [isHamburger, setIsHamburger] = useState(true);

    // Use Effect for navbar color change when scroll
    useEffect(() => {
        const handleScroll = (e) => {
            setIsScrolled(window.scrollY > 20);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const scrollToSection = (scrollId) => {
        const element = document.getElementById(scrollId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Media query for hamburger
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 639px)');

        const handleChange = (e) => {
            setIsMobile(e.matches)
        }

        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [])

    const handleHamburger = () => {
        setIsHamburger(!isHamburger);
    }

    return (
        <>
            <header className={`fixed z-50 top-0 left-0 right-0 backdrop-blur-md ${isScrolled ? 'bg-white/90 shadow-sm' : 'bg-transparent'}`}>
                <nav className='max-w-7xl mx-auto h-16 relative'>
                    <div className='flex justify-between items-center h-full px-4 sm:px-6 lg-px-8'>
                        <h3 className='text-xl font-semibold hover:text-[#2563eb] cursor-pointer' >{developerInfo.name}</h3>
                        <div>

                            {
                                isMobile ?
                                    (<button onClick={handleHamburger}>
                                        {isHamburger ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu" aria-hidden="true"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg> :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>}
                                    </button>) :
                                    (<div className='flex gap-9 items-center'>
                                        <button onClick={() => scrollToSection("about")} className="text-[#374151] hover:text-[#2563eb] cursor-pointer">About</button>
                                        <button onClick={() => scrollToSection("skills")} className="text-[#374151] hover:text-[#2563eb] cursor-pointer">Skills</button>
                                        <button onClick={() => scrollToSection("projects")} className="text-[#374151] hover:text-[#2563eb] cursor-pointer">Project</button>
                                        <button onClick={() => scrollToSection("contact")} className="text-white cursor-pointer bg-[#2563eb] hover:bg-[#1d4ed8] px-4 py-2 rounded-md text-sm font-semibold">Contact</button>
                                    </div>
                                    )}
                        </div>
                    </div>

                    {/* Navigation bar for mobile users after click on hamburger */}
                    <div className={` bg-white overflow-hidden w-full absolute backdrop-blur-2xl transition-all duration-200 shadow-sm px-3 ${isHamburger ? "max-h-0 " : "py-3 max-h-44"}`}>
                        <div className="gap-2">
                            <button onClick={() => scrollToSection("about")} className="text-[#374151] hover:text-[#2563eb] cursor-pointer block p-2">About</button>
                            <button onClick={() => scrollToSection("skills")} className="text-[#374151] hover:text-[#2563eb] cursor-pointer block p-2">Skills</button>
                            <button onClick={() => scrollToSection("projects")} className="text-[#374151] hover:text-[#2563eb] cursor-pointer block p-2">Project</button>
                            <button onClick={() => scrollToSection("contact")} className="text-[#374151] hover:text-[#2563eb] cursor-pointer block p-2">Contact</button>
                        </div>
                    </div>
                </nav >


            </header >

            {/* <section>

            </section> */}
        </>


    )
}

export default Navbar
