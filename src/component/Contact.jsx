import React from 'react'
import { developerInfo } from '../data/profile'

const Contact = () => {
    return (
        <section id='contact' className="px-5 sm:px-10 py-20 bg-gray-50">
            <div className='w-fit m-auto text-center mb-16 '>
                <h2 className='text-4xl sm:text-5xl font-bold'>Get In Touch</h2>
                <span className='w-20 h-1 inline-block bg-blue-600'></span>
                <p className='text-gray-600 w-fit m-auto mt-2'>Have a project in mind? Let's discuss how I can help bring your ideas to life</p>
            </div>

            <div className='max-w-6xl mx-auto'>
                {/* My Information */}
                <div className='flex flex-col md:flex-row gap-8 mb-12 '>
                    <div className='bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow border border-[#0101011e] w-full text-center'>
                        <div className='p-3 bg-blue-100 rounded-full w-fit m-auto mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-blue-600" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                        </div>
                        <div className='font-semibold mb-2'>Email</div>
                        <div className="text-gray-600">{developerInfo.email}</div>
                    </div>

                    <div className='bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow border border-[#0101011e]  w-full text-center'>
                        <div className='p-3 bg-blue-100 rounded-full w-fit m-auto mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-blue-600" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <div className='font-semibold mb-2'>Location</div>
                        <div className="text-gray-600">{developerInfo.location}</div>
                    </div>

                    <div className='bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow border border-[#0101011e]  w-full text-center'>
                        <div className='p-3 bg-blue-100 rounded-full w-fit m-auto mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>

                        </div>
                        <div className='font-semibold mb-2'>Contact No.</div>
                        <div className="text-gray-600">{developerInfo.phone}</div>
                    </div>
                </div>

                {/* Contact form */}
                <div>
                    <form action="" className='p-6 bg-white shadow hover:shadow-lg transition-shadow border-1 border-[#0101011e] rounded-lg'>
                        <div className='flex gap-4 mb-5'>
                            <div className='w-full'>
                                <label htmlFor="userName" className='text-sm font-semibold text-gray-700'>Your Name</label>
                                <input id='userName' name="name" className='w-full border-1 border-[#0101011e] focus-visible:outline-1 rounded-md px-3 py-1.5 focus:border mt-2 text-sm' type="text" required placeholder='John Doe'/>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="userEmail" className='text-sm font-semibold text-gray-700 focus-visible:border-none focus-visible:outline-none'>Your Email</label>
                                <input id="userEmail" name='email' type="email" required className='w-full border-1 border-[#0101011e] focus-visible:outline-1 rounded-md px-3 py-1.5 focus:border mt-2 text-sm' placeholder='johndoe@email.com'/>
                            </div>
                        </div>
                        <div className='w-full mb-5'>
                            <label htmlFor="subject" className='text-sm font-semibold text-gray-700'>Subject</label>
                            <input id='subject' name="name" className='w-full border-1 border-[#0101011e] focus-visible:outline-1 rounded-md px-3 py-1.5 focus:border mt-2 text-sm' type="text" required placeholder='Project Inquiry' />
                        </div>

                        <div className='w-full mb-5'>
                            <label htmlFor="projectDesc" className='text-sm font-semibold text-gray-700'>Message</label>
                            <textarea rows={6} name="" id="projectDesc" className='w-full border-1 border-[#0101011e] focus-visible:outline-1 rounded-md px-3 py-1.5 focus:border mt-2 text-sm' placeholder='Tell me about your project...'></textarea>
                        </div>

                        <button type='submit' className='bg-blue-600 w-full text-white flex items-center justify-center py-2.5 text-lg rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send mr-2" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                            Send Message</button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact
