import Link from 'next/link';

export default function MainNavigation() {
  return (
  <nav className="bg-black text-white p-4 flex justify-between items-center">
    <Link href="/" className="text-2xl font-bold">SONG JOO</Link>
      <ul className="flex space-x-4">
        <li>
            <Link href="/" className="hover:text-gray-300">
            Home
            </Link>
        </li>
        <li>
            <Link href="/contact" className="hover:text-gray-300">
            Contact
            </Link>
        </li>
        <li>
            <a href="Song_Joo_Resume.pdf" download>
                Resume
            </a>
        </li>
      </ul>
    </nav>
  );
}

