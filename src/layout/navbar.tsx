import { useState } from 'react';
import news from '../public/logotype.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 p-4 flex justify-between items-center">
      {/* Logo atau judul */}
      <div className="text-stone-950 text-2xl font-bold">
        <a href="/" className='flex items-center'>
          <img src={news.src} className="h-10 w-10" alt="logo" />
          <h1 className='ml-4 text-xl md:text-2xl font-extrabold italic'>Next News</h1>
        </a>
      </div>

      {/* Button untuk mobile menu */}
      <div className="block md:hidden">
        <button
          className="text-stone-950"
          onClick={() => setIsOpen(!isOpen)} // Toggle state
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigasi untuk desktop */}
      <ul className="hidden md:flex text-stone-950 text-lg md:text-2xl font-bold gap-5">
      <li className="mx-2 md:mx-4">
          <a href="/bitcoin">Bitcoin</a>
        </li>
        <li className="mx-2 md:mx-4">
          <a href="/business">Business</a>
        </li>
        <li className="mx-2 md:mx-4">
          <a href="/techcrunch">TechCrunch</a>
        </li>
        <li className="mx-2 md:mx-4">
          <a href="/wallstreet">WallStreet</a>
        </li>
        <li className="mx-2 md:mx-4">
          <a href="/apple">Apple</a>
        </li>
        <li className="mx-2 md:mx-4">
          <a href="/tesla">Tesla</a>
        </li>
      </ul>

      {/* Menu Dropdown untuk mobile */}
      {isOpen && (
        <ul className="flex flex-col md:hidden absolute top-16 left-0 w-full bg-gray-50 p-4 shadow-lg">
          <li className="my-2">
            <a href="/bitcoin">Bitcoin</a>
          </li>
          <li className="my-2">
            <a href="/business">Business</a>
          </li>
          <li className="my-2">
            <a href="/techcrunch">TechCrunch</a>
          </li>
          <li className="my-2">
            <a href="/wallstreet">WallStreet</a>
          </li>
          <li className="my-2">
            <a href="/apple">Apple</a>
          </li>
          <li className="my-2">
            <a href="/tesla">Tesla</a>
          </li>
        </ul>
      )}
    </div>
  );
}
