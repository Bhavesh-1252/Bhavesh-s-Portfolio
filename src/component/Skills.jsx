import React from 'react'
import { skills } from '../data/profile'

const Skills = () => {
    const categories = [...new Set(skills.map(skill => skill.category))];

    return (
        <section id='skills' className='px-5 sm:px-10 py-20 bg-gray-50'>
            {/* Component Heading */}
            <div className='w-fit m-auto text-center mb-16'>
                <h2 className='text-4xl sm:text-5xl font-bold cursor-default' title='Skills possessed by Bhavesh Suthar'>Skills & Technologies</h2>
                <span className='w-20 h-1 inline-block bg-blue-600'></span>
                <p className='text-gray-600 w-fit m-auto mt-2'>A creative toolkit for building beautiful, responsive web experiences.</p>
            </div>

            {/* Floating Boxes */}
            <div className='max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                {categories.map((category) => {
                    return <div key={category} className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow border border-[#0101011e]'>
                        <h3 className='text-xl font-semibold mb-5'>{category}</h3>
                        <div className='flex gap-2 flex-wrap'>
                            {skills.filter(skill => skill.category === category).map((skill) => {
                                return <span key={skill.name} className='text-blue-700 text-xs font-semibold rounded-sm flex items-center hover:bg-blue-200 bg-blue-100 px-3 py-1'>{skill.name}</span>
                            })}

                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Skills
