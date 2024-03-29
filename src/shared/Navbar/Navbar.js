import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaChevronRight, FaBars, FaChevronLeft } from "react-icons/fa";
import '../Navbar/Navbar.css'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isdrawer, setIsdrawer] = useState(false)
    const { user, logOut } = useContext(AuthContext)


   

    const menuItems = <>
        <li><NavLink
            to="/"
            className={`${({isActive}) => isActive ? "bg-red-300" : undefined} inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`}
            aria-label="Home"
            title="Home"
        >
            Home
        </NavLink>
        </li>
        <li><NavLink
            to="/blog"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="Blog"
            title="Blog"
        >
            Blog
        </NavLink>
        </li>
        <li><NavLink
            to="/dashboard"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="dashboard"
            title="Dashboard"
        >
            Dashboard
        </NavLink>
        </li>
        {
            user ?

                <>
                    <li onClick={logOut}>
                        <NavLink
                            className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                        >Log Out</NavLink>
                    </li>
                    <li>
                        <div className="avatar online placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                <img src={user?.photoURL} alt="user" />
                            </div>
                        </div>
                    </li>
                </>
                :
                <li>
                    <NavLink
                        to="/login"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Login"
                    >
                        Log In
                    </NavLink>
                </li>
        }
                
    </>



    return (
        <div className='bg-[#023430] fixed top-0 left-0 z-10 w-full'>
            <div className="py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    {/* */}
                    <label onClick={()=>setIsdrawer(!isdrawer)} htmlFor="dashboard-drawer" className=" drawer-button cursor-pointer lg:hidden">{isdrawer ? <span className='text-white font-medium flex items-center'>Drawer <FaChevronRight/></span> : <span className='text-white font-medium flex items-center'><FaChevronLeft/>Drawer</span>} </label>
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        {/* <img className='h-16' src={logo} alt='logo'/> */}

                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            Bikroy Bazar
                        </span>
                    </a>
                    <ul className="flex items-center hidden space-x-8 lg:flex manuBar">
                        {menuItems}
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <FaBars className='w-8 h-8 text-white font-semibold'/>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute z-10 top-0 left-0 w-full">
                                <div className="p-5 bg-[#6308f5c2] border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                                                    Bikroy Bazar
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4 bg-[#6308f5c2npm]">
                                            {menuItems}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;