import React from 'react';
import taskLogo from '../../../public/task2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
   return (
    <footer className="mt-auto bg-white flex  shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <article  className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img  src={taskLogo} className="h-8" alt="Task Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Task</span>
            </article>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Duvan Ernesto Castellanos Gonzalez</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">
                        <FontAwesomeIcon className='pr-1' icon={faEnvelope}/>
                        iduvangonzalez.13@gmail.com</a>
                </li>
                <li>
                    <a href="https://github.com/Duvan12C" className="hover:underline me-4 md:me-6">
                    <FontAwesomeIcon className='pr-1' icon={faGithub} />          
                                  GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/duvan-ernesto-castellanos-gonzalez/" className="hover:underline me-4 md:me-6">
                    <FontAwesomeIcon className='pr-1' icon={faLinkedin}/>
                                  Linkedin</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Task</a>. All Rights Reserved.</span>
    </div>
</footer>

   );
}

export default Footer;
