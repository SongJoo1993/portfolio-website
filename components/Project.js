import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

export default function Project ({ name, description, imageSrc, frontendStack, backendStack, sourceCodeLink, liveDemoLink }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex md:flex-row md:w-50rem lg:w-50rem">
        <div className="md:w-1/3 md:pr-6">
          <Image src={imageSrc} alt={name} width={400} height={250} />
        </div>
        <div className="md:w-2/3">
          <h4 className="text-lg font-semibold mb-2">{name}</h4>
          <p className="text-gray-600 mb-2">{description}</p>
          <div className="text-sm text-gray-400 mb-2">
            <h5>Stacks:</h5>
            <span className="mr-2">Frontend: {frontendStack}</span>
            <br />
            <span>Backend: {backendStack}</span>
          </div>
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <FaGithub className="mr-1" size={18} /> View Source Code
          </a>
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <FiExternalLink className="mr-1" size={18} /> View Live Demo
          </a>
        </div>
      </div>
    );
  };
  