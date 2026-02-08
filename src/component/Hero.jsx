import { developerInfo } from '../data/profile'
import { Link } from 'react-router-dom';

const Hero = () => {
    const scrollToSection = (scrollId) => {
        const element = document.getElementById(scrollId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

    }
    return (
        <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">

            <div className="max-w-4xl mx-auto text-center">
                <div className="mt-6">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                        {developerInfo.availability}
                    </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 cursor-default" title='Bhavesh Suthar| Frontend Web Developer'>
                    Hi, I'm <span className="text-blue-600">{developerInfo.name}</span>
                </h1>

                <p className="text-xl sm:text-2xl text-gray-700 font-medium mb-4">
                    {developerInfo.title}
                </p>

                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    {developerInfo.tagline}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2.5 text-lg group flex items-center rounded-md"
                    >
                        View My Work
                        <span className='ml-2 group-hover:translate-x-1 transition-transform'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        variant="outline"
                        className="border-1 border-gray-300 hover:border-blue-600 rounded-md hover:text-blue-600 px-8 py-2.5 text-lg"
                    >
                        Get In Touch
                    </button>
                </div>

                <div className="flex items-center justify-center gap-6">
                    <Link
                        to={developerInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        title='Github'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </Link>
                    <Link
                        to={developerInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        title='Linkedin'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </Link>
                    <Link
                        to={developerInfo.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        title='Twitter'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:fill-blue-600 " width="20" height="20" viewBox="0 0 448 512"><path d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z" /></svg>
                    </Link>

                    <Link
                        to={developerInfo.social.linktree}
                        target="_blank"
                        title='Linktree'
                    >
                        <svg width="22" height="20" viewBox="0 0 18 20" className='fill-gray-600 hover:fill-blue-600 transition-colors' xmlns="http://www.w3.org/2000/svg"><path d="M9.33238 4.4914L12.4054 1.33238L14.1891 3.15903L10.9656 6.23209H15.5V8.76791H10.9441L14.1891 11.9198L12.4054 13.7106L8 9.28367L3.59456 13.7106L1.81089 11.9269L5.05587 8.77507H0.5V6.23209H5.03438L1.81089 3.15903L3.59456 1.33238L6.66762 4.4914V0H9.33238V4.4914ZM6.66762 12.3997H9.33238V18.4169H6.66762V12.3997Z" fill=""></path></svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
