import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaCoffee } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-4 bg-white z-50">
            <div className="flex items-center gap-3">
                <img
                    src={logo}
                    alt="Coffee Brady Logo"
                    className="h-10 w-10 object-contain"
                />
                <span className="text-accent hidden md:inline text-sm font-bold flex items-center gap-2">
                    Code Coffee
                </span>
            </div>
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">
                <li>
                    <a
                        href="#community"
                        className="text-text hover:text-accent transition-colors duration-200 font-medium"
                    >
                        <FaPeopleGroup className="inline-block mr-4" />
                        Community
                    </a>
                </li>
                <li>
                    <a
                        href="#coffee"
                        className="bg-accent text-bg px-5 py-2 rounded hover:bg-hover transition-colors duration-200 font-semibold"
                    >
                        <FaCoffee className="inline-block mr-4" />
                        Take Coffee
                    </a>
                </li>
            </ul>
            {/* Mobile Hamburger */}
            <button
                className="md:hidden text-2xl text-accent focus:outline-none"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
            >
                <FaBars />
            </button>
            {/* Mobile Slider Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 md:hidden`}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <span className="text-accent text-2xl font-bold">Code Coffee</span>
                    <button
                        className="text-2xl text-accent focus:outline-none"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>
                </div>
                <ul className="flex flex-col gap-6 mt-8 px-6">
                    <li>
                        <a
                            href="#community"
                            className="text-text hover:text-accent transition-colors duration-200 font-medium flex items-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            <FaPeopleGroup className="inline-block mr-4" />
                            Community
                        </a>
                    </li>
                    <li>
                        <a
                            href="#coffee"
                            className="bg-accent text-bg px-5 py-2 rounded hover:bg-hover transition-colors duration-200 font-semibold flex items-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            <FaCoffee className="inline-block mr-4" />
                            Take Coffee
                        </a>
                    </li>
                </ul>
            </div>
            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </nav>
    );
};

export default Nav;
