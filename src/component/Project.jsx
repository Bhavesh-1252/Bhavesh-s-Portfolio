import { projects } from '../data/profile'
import { Link } from 'react-router-dom'

const Project = () => {
    return (
        <section id='projects' className="px-5 sm:px-10 py-20">
            {/* Component Heading */}
            <div className='w-fit m-auto text-center mb-16 '>
                <h2 className='text-4xl sm:text-5xl font-bold cursor-default' title='Projects built by Bhavesh Suthar'>Featured Projects</h2>
                <span className='w-20 h-1 inline-block bg-blue-600'></span>
                <p className='text-gray-600 w-fit m-auto mt-2'>A collection of projects showcasing my expertise</p>
            </div>

            {/* Project Cards */}
            <div className='max-w-7xl mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        projects.map(project => (
                            <div key={project.id} className="w-full object-center rounded-xl shadow hover:shadow-xl hover:transition-shadow group">
                                <div className="aspect-video overflow-hidden rounded-t-xl">
                                    <img src={`${project.image}`} className='object-cover group-hover:scale-105 transition-transform duration-200' alt={project.imageAlt} />
                                </div>
                                <div className='p-5 flex flex-col gap-4'>
                                    <h3 className='text-xl font-semibold'>{project.title}</h3>
                                    <p className='text-gray-600'>{project.description}</p>
                                    <div className='flex flex-wrap gap-2'>
                                        {project.technologies.map(technology =>
                                            <span key={technology} className=' text-xs font-semibold rounded-sm flex items-center bg-gray-100 text-gray-700 px-3 py-1'>{technology}</span>
                                        )}
                                    </div>
                                    <div className='flex gap-4 bottom-0'>
                                        <Link to={project.liveUrl} reloadDocument className='flex gap-2 items-center w-full text-xs font-semibold border-1 justify-center border-gray-200 rounded-sm py-1.5 group/Link hover:border-blue-600 hover:bg-gray-50'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-1 group-hover/Link:text-blue-600" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                            <span className='group-hover/Link:text-blue-600'>Live Demo</span>
                                        </Link>
                                        <Link to={project.githubUrl} reloadDocument className='flex gap-2 items-center w-full text-xs font-semibold border-1 justify-center border-gray-200 rounded-sm py-1.5 group/Link hover:border-blue-600 hover:bg-gray-50'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-1 group-hover/Link:text-blue-600" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                            <span className='group-hover/Link:text-blue-600'>Github</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default Project
