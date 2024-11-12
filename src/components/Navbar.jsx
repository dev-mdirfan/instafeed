import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/* <!--
                                    Icon when menu is closed.
                                    Menu open: "hidden", Menu closed: "block"
                                --> */}
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                                {/* <!--
                                    Icon when menu is open.

                                    Menu open: "block", Menu closed: "hidden"
                                --> */}
                                <svg
                                    className="hidden h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src="/logo.png"
                                    alt="Your Company"
                                />
                                <div className="text-3xl text-white mx-3">
                                    Instafeed
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? ''
                                                : isActive
                                                ? 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
                                                : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/top"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? ''
                                                : isActive
                                                ? 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
                                                : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }
                                    >
                                        Top Headlines
                                    </NavLink>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? ''
                                                : isActive
                                                ? 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
                                                : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }
                                    >
                                        About
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                            <div className="w-full max-w-lg lg:max-w-xs">
                                <label htmlFor="search" className="sr-only">
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <MagnifyingGlassIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <input
                                        id="search"
                                        name="search"
                                        className="block w-full rounded-md border border-transparent bg-gray-700 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                                        placeholder="Search"
                                        type="search"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a
                            href="#"
                            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                            aria-current="page"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Team
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Projects
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Calendar
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
