import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion"
import {FaAngleDown} from 'react-icons/fa';
import Link from 'next/link';



export default function Home () {
  const transition = {duration: 0.6, ease: [0.43,0.13,0.23,0.96]};
  return (
    <motion.div
      key="mainDiv"
      transition={transition}
      className='min-h-screen bg-gray-100 flex justify-center content-center flex-wrap'>
              <motion.div
                exit={{opacity: 0}}
                transition={{}}
                className="w-full text-center h-15">
                <h1>Click to Explore!</h1>
                <FaAngleDown className='mt-2 animate-bounce mx-auto' size={40}/>
              </motion.div>
              <motion.div 
                key="mainImg"
                className="w-50vw"
                initial={{opacity:0}}
                animate={{opacity:1}}
                // exit={{x: -150, y: -150, sacle:-0.5}}
                // whileHover={{x: -200, y: -150, scale:0.5}}
                transition={transition}
              >              
              <Link href="/main" className="hover:text-gray-300">
                <motion.img
                  key="imgSrc"
                  exit={{x: -250, y: -140, scale:0.1}}
                  transition={{type: "tween", delay:0.5}}
                  className='rounded-full'
                  src="/my-pic.jpg"
                  alt="Profile Picture"
                  width={500}
                  height={500}
                />
              </Link> 
              </motion.div>
      </motion.div>
  );
};
