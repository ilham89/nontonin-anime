import { Logo } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="py-4 px-5 text-white bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="flex">
          <Image
            src={Logo.src}
            className="w-6 md:w-12"
            width={48}
            height={48}
            alt="logo"
          />
        </Link>
        <div className="nav-items ml-5 md:ml-10">
          <input
            type="text"
            className="py-1 md:py-2 px-4 bg-gray-800 focus:bg-gray-900 focus:outline-none border-2 border-transparent focus:border-indigo-500 text-sm rounded-full transition duration-200 md:w-64"
            placeholder="Search anime.."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
