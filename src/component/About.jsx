import { developerInfo } from '../data/profile'
import resumePDF from "../assets/Bhavesh-suthar-resume.pdf"
import { Link } from 'react-router-dom'

const About = () => {

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = resumePDF;
        link.download = "Bhavesh-suthar-resume.pdf";
        link.click();
    }

    return (
        <section id='about' className="px-5 sm:px-10 py-20">
            {/* Component Heading */}
            <div className='w-fit m-auto text-center mb-16 '>
                <h2 className='text-4xl sm:text-5xl font-bold cursor-default' title='Get to know about Bhavesh Suthar'>About Me</h2>
                <span className='w-20 h-1 inline-block bg-blue-600'></span>
            </div>

            {/* About Me */}
            <div className='max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-10 m-auto'>
                <div className='aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex justify-center items-center'>
                    <div className='w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-blue-600 text-6xl text-white font-bold flex justify-center items-center cursor-default'>BS</div>
                </div>

                <div className="flex flex-col justify-center gap-7">
                    <p className='text-md md:text-lg text-[#374151] leading-relaxed'><span className='font-semibold'>Bhavesh Suthar</span>, a passionate <Link className="font-semibold" to={"https://www.w3schools.com/whatis/whatis_frontenddev.asp"}>frontend web developer</Link> dedicated to building intuitive, responsive, and visually engaging user interfaces. Specialized in crafting high-performance web applications using modern JavaScript frameworks like React, along with HTML, CSS, and UI best practices. </p>

                    <div className='text-[#4b5563] '>
                        <div className='flex items-center mb-5'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mr-3 text-blue-600" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </span>
                            <span>{developerInfo.location}</span>
                        </div>
                        <div className='flex items-center'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-3 text-blue-600" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                            </span>
                            <span>{developerInfo.email}</span>
                        </div>
                    </div>

                    <div>
                        <button onClick={downloadResume} className='text-white cursor-pointer bg-[#2563eb] hover:bg-[#1d4ed8] px-4 py-2 rounded-md text-sm font-semibold flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-4" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                            <span>Download Resume</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
