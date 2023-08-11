import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

export default function Project ({ name, description, imageSrc, frontendStack, backendStack, sourceCodeLink, liveDemoLink, keyFeatures }) {
  console.log(keyFeatures);
  return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex md:flex-row md:w-50rem lg:w-50rem items-center">
        <div className="hidden md:block d:w-1/3 md:pr-6">
          <Image src={imageSrc} alt={name} width={400} height={250} />
        </div>
        <div className="md:w-2/3">
            <h4 className="text-lg font-semibold mb-4">{name}</h4>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="text-sm text-gray-700 mb-4">
                <h5 className="font-semibold">Stacks:</h5>
                <ul className="list-disc pl-6">
                  <li className="mr-2">Front-end: {frontendStack}</li>
                  <li className="mr-2">Back-end : {backendStack}</li>
                </ul>
            </div>
            {/* Feature */} 
            {keyFeatures && (
              <div className="text-sm text-gray-700 mb-4">
              <h5 className="font-semibold">Key Features:</h5>
              <ul className="list-disc pl-6">
                  { keyFeatures.map((elm,index) => (<li key={index}>{elm}</li>))}
              </ul>
            </div>
            )}
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
  