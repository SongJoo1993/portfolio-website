import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import projectInfo from '@/data/projectinfo';
import Project from '@/components/Project';

export default function Home () {
  return (
    <div className='min-h-screen bg-gray-100'>
      <main className="container mx-auto px-4 py-8 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row">
          {/* Image Section (Mobile First) */}
          <motion.div 
          className="hidden md:block md:w-1/2 md:pr-8 order-2 md:order-1 text-center mb-6 md:mb-0 md:mt-0"
          initial={{opacity:0}}
          animate={{opacity:1}}
          >
            <div className="w-40 h-40 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden">
              <Image
                src="/my-pic.jpg"
                alt="Profile Picture"
                width={600}
                height={600}
              />
            </div>
          </motion.div>
          {/* Text Section */}
          <div 
          className="md:w-1/2 md:pr-8 order-1 md:order-2">
            <motion.div
            initial={{x: 100}}
            animate={{x: 0}}
            transition={{ duration: 0.5, type: 'spring', stiffness:120}}
            >
              <h1 
              className="text-2xl md:text-3xl font-semibold mb-4"
              >
                Hi There!
              </h1>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">I&apos;m Song Joo and your future colleague 😊</h3>
              <p className="text-gray-600 leading-relaxed">
                Fueled by a growth mindset, I thrive on challenges and leverage my proficiency in web development to make impactful contributions!
              </p>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.5 }}
            className="flex mt-4 md:mt-6">
              <motion.a
                whileHover={{ scale: 1.2, originX: 0}}
                href="https://github.com/SongJoo1993"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 mr-4"
              >
                <FaGithub size={30} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, originX: 0}}
                href="https://www.linkedin.com/in/songjoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 mr-4"
              >
                <FaLinkedin size={30} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, originX: 0}}
                href="Song_Joo_Resume.pdf"
                download
                className="text-gray-600 hover:text-gray-800"
                >
                <IoMdDownload size={30} className="inline-block mr-1" />
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
        <br /><br />
        {/* Proejct Section */}
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center md:mt-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Projects</h2>
          <div className="gap-4 mx-auto">
            {projectInfo.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};
