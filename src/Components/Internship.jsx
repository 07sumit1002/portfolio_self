import React from 'react'
import infit from '../assets/infits.png';
import drdo from '../assets/drdo.png'

const Internship = () => {
    const projects=[
        {
          id:1,
          src:drdo,
          href:'https://drdo.gov.in/drdo/cemilac',
          org:'RCMA-DRDO, MINISTRY OF DEFENCE, GOVT.OF INDIA',
          title: 'Student Trainee',
          des:'Redesigned the organization’s website for improved user experience and functionality. Observed manufacturing processes and quality control during on-site visits. Implemented a personal SMTP server to streamline internal email communication, enhancing operational efficiency and collaboration.'
        },
        {
          id:2,
          src:infit,
          href:'https://www.infits.in/dashboard.php',
          org:'ANALYZED.IN',
          title: 'Web-Dev Intern and Team Leader',
          des: "Resolved bugs to ensure a smooth and seamless user experience, enhancing overall website performance. Led and mentored a team of 20 interns, fostering collaboration and effective teamwork. Successfully integrated Firebase to enable real-time website notifications, improving user engagement."
        }
    ];

    return (
        <div name='Internship' className=' bg-gradient-to-b from-black to-cyan-900 w-full  text-white md:h-screen'>
          <div className=' max-w-screen-lg pt-20 px-8 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Internship</p>
              <p className='py-6'>Check out my recent Internships:</p>
            </div>
    
            <div className=' grid sm:grid-cols-2 md:grid-cols-2 gap-10 px-12 sm:px-0'> 
            {
              projects.map(({id,src, href, org, title, des})=>(
                <div key={id} className="max-w-sm  shadow-teal-300 rounded-lg shadow-md">
                        <img class="p-4 rounded-3xl" src={src} alt="internship" />
                        <div class="p-5">
                            <h2 class="mb-2 text-2xl font-bold tracking-tight text-white">{org}</h2>
                            <h6 class="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h6>
                            <p class="mb-3 font-normal text-white text-justify">{des}</p>
                            <a href={href} target='_blank' rel="noreferrer" className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-cyan-500 rounded-lg group bg-gradient-to-br from-cyan-300 to-green-400 group-hover:from-cyan-300 group-hover:to-green-300 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Read More
                                </span>
                            </a>
                    </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>
      )
    }

export default Internship


