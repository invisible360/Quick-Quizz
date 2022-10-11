import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-teal-400 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {/* active navlink */}
                            {/* className={({ isActive }) =>
                                isActive ? 'bg-yellow-400' : undefined
                            } */}


                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/statistics'>Statistics</NavLink></li>
                            <li><NavLink to='/qa'>Q&A</NavLink></li>
                        </ul>

                    </div>
                    <button className='btn btn-ghost'>
                        <div className='flex items-center'>
                            <NavLink><img className='w-14' src="https://cdn3.iconfinder.com/data/icons/quiz/96/quiz_01-512.png" alt="" /></NavLink>

                            <NavLink to='/home' className="ml-2 normal-case text-xl font-bold">Quick Quiz</NavLink>
                        </div>
                    </button>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li className='mx-10'><NavLink to='/statistics'>Statistics</NavLink></li>
                        <li><NavLink to='/qa'>Q&A</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;