import { developerInfo } from "../data/profile"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className='px-10 bg-gray-900'>
            <div className="max-w-6xl mx-auto">
                {/* Footer links section */}
                <div className="py-12">
                    <div>
                        <h3 className="text-white text-2xl font-bold mb-4 cursor-default" title="Bhavesh Suthar | Frontend Web Developer">{developerInfo.name}</h3>
                        <p className="mb-4 text-gray-400">{developerInfo.tagline}</p>
                        <div className="flex items-center gap-4">
                            <Link to={developerInfo.social.github} title="Github" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:bg-blue-600 transition-colors p-2.5 bg-gray-800 rounded-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                            </Link>
                            <Link to={developerInfo.social.linkedin} title="Linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:bg-blue-600 transition-colors p-2.5 bg-gray-800 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </Link>
                            <Link to={developerInfo.social.twitter} title="Twitter" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:bg-blue-600 transition-colors p-2.5 bg-gray-800 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300" width="20" height="20" viewBox="0 0 448 512"><path d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z" /></svg>
                            </Link>
                            <Link to={developerInfo.social.linktree} title="Linktree" target="_blank" className="hover:bg-blue-600 transition-colors p-2.5 bg-gray-800 rounded-full">
                                <svg width="22" height="20" viewBox="0 0 18 20" className='fill-gray-300 ' xmlns="http://www.w3.org/2000/svg"><path d="M9.33238 4.4914L12.4054 1.33238L14.1891 3.15903L10.9656 6.23209H15.5V8.76791H10.9441L14.1891 11.9198L12.4054 13.7106L8 9.28367L3.59456 13.7106L1.81089 11.9269L5.05587 8.77507H0.5V6.23209H5.03438L1.81089 3.15903L3.59456 1.33238L6.66762 4.4914V0H9.33238V4.4914ZM6.66762 12.3997H9.33238V18.4169H6.66762V12.3997Z" fill=""></path></svg>
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Footer copyright section */}
                <div className="pt-6 pb-10 border-t-1 border-gray-800 flex flex-col sm:flex-row items-center sm:justify-between text-sm text-gray-400">
                    <p>Copyright © 2026. All rights reserved.</p>
                    <p>Made by Bhavesh Suthar with ❤️</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
