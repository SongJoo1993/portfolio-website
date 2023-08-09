import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import projectInfo from '@/data/projectinfo';
import Project from '@/components/Project';

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <main className="container mx-auto px-4 py-8 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row">
          {/* Image Section (Mobile First) */}
          <div className="hidden md:block md:w-1/2 md:pr-8 order-2 md:order-1 text-center mb-6 md:mb-0 md:mt-0">
            <div className="w-48 h-48 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden">
              <Image
                src="/my-pic.jpg"
                alt="Profile Picture"
                width={600}
                height={600}
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="md:w-1/2 md:pr-8 order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">Hi There!</h1>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">I&apos;m Song Joo and your future colleague 😊</h3>
            <p className="text-gray-600 leading-relaxed">
              I&apos;m a junior web developer who is passionate about <strong>problem-solving</strong> and views each coding challenge as <strong>an opportunity</strong> to enhance my skills and contribute creative solutions.
            </p>
            <div className="flex mt-4 md:mt-6">
              <a
                href="https://github.com/SongJoo1993"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 mr-4"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/songjoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 mr-4"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="Song_Joo_Resume.pdf"
                download
                className="text-gray-600 hover:text-gray-800"
              >
                <IoMdDownload size={24} className="inline-block mr-1" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <br /><br />
        {/* Proejct Section */}
        <div className="flex flex-col items-center justify-center md:mt-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Projects</h2><br />
          <div className="gap-4 mx-auto">
            {projectInfo.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
