import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import Logout from './Logout';
import { useAuthContext } from '../context/AuthContext';

const Sidebar = () => {
  const {authUser} = useAuthContext();

  return (
    <aside className="flex flex-col items-center w-12 sm:w-16 sticky top-0 left-0 h-screen py-8
      overflow-y-auto border-r bg-glass">
      
      {/* Navigation inside the sidebar */}
      <nav className="h-full flex flex-col gap-4">
        {/* GitHub Button */}
        <Link to="/" className="flex justify-center">
          <img className="h-8" src="/github.svg" alt="Github Logo" />
        </Link>

        {/* Home Button */}
        <Link
          to="/"
          className="p-2 flex justify-center transition-colors duration-200 rounded-lg 
          hover:bg-gray-800"
        >
          <IoHomeSharp size={24} />
        </Link>

        {authUser && (
					<Link
						to='/likes'
						className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<FaHeart size={22} />
					</Link>
				)}

{authUser && (
					<Link
						to='/explore'
						className='p-1.5  flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<MdOutlineExplore size={25} />
					</Link>
				)}

{!authUser && (
					<Link
						to='/login'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<PiSignInBold size={25} />
					</Link>
				)}

{!authUser && (
					<Link
						to='/signup'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<MdEditDocument size={25} />
					</Link>
				)}

        {authUser && (
          <div className='flex flex-col gap-2 mt-auto'>
            <Logout/>
          </div>
        )}

      </nav>

    </aside>
  );
};

export default Sidebar;
