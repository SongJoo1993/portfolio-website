import { motion } from "framer-motion";
import Link from 'next/link';

export default function MainNavigation() {
  return (
  <nav className="bg-black text-white p-4 flex justify-between items-center px-10">
    <Link href="/" className="text-2xl font-bold">SONG JOO</Link>
      <ul className="flex space-x-4">
        <li className="w-12">
            <Link href="/" className="hover:text-gray-300">
              <motion.button
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              >
                Home
              </motion.button>
            </Link>
        </li>
        <li className="w-12">
            <a href="Song_Joo_Resume.pdf" download>
              <motion.button
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              >
                Resume
              </motion.button>
            </a>
        </li>
      </ul>
    </nav>
  );
}

{/* <motion.button
  whileHover={{
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
  }}
>
</motion.button> */}
