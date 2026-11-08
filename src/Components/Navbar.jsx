
import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Sun, Moon, Layers3, ArrowRight, Menu, X } from "lucide-react";
import { DarkWhite } from './Conetxt/context';

const Navbar = () => {

    const { darkMode, setDarkMode } = useContext(DarkWhite)
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return (
        <nav className={`navbar sticky top-0 z-50 flex items-center justify-between pxx h-14 ff bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm ${darkMode ? "bg-white" : ""}`}>

            {/* Logo */}
            <div>
                <NavLink to='/home' onClick={closeMenu} className="flex items-center gap-3 group">

                    <span className="ml-8 text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-violet-600 texts">
                        PixelForge<span className="text-fuchsia-500">.</span>
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white ring-4 ring-violet-100 shadow-lg shadow-violet-500/40 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:ring-violet-200">
                        <Layers3 size={24} className="fill-white" />
                    </span>

                </NavLink>
            </div>

            {/* Middle: Links */}
            <div className={`navbar-links flex items-center gap-5 ${menuOpen ? "navbar-links-open" : ""}`}>

                <NavLink to='/home' onClick={closeMenu} className={({ isActive }) => `px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 ${isActive ? "bg-purple-500 text-white ring-4 ring-purple-200" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>Home</NavLink>

                <NavLink to='/services' onClick={closeMenu} className={({ isActive }) => `px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 ${isActive ? "bg-purple-500 text-white ring-4 ring-purple-200" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>Services</NavLink>

                <NavLink to='/ourwork' onClick={closeMenu} className={({ isActive }) => `px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 ${isActive ? "bg-purple-500 text-white ring-4 ring-purple-200" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>Our Work</NavLink>

                <NavLink to='/contact' onClick={closeMenu} className={({ isActive }) => `px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 ${isActive ? "bg-purple-500 text-white ring-4 ring-purple-200" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>Contact</NavLink>

                {/* Mobile Contact */}
                <NavLink to='/contact' onClick={closeMenu} className="mobile-contact">
                    Contact Us <ArrowRight size={15} />
                </NavLink>

            </div>

            {/* Right: Sun, Moon, Button */}
            <div className="navbar-actions flex items-center gap-3">

                {darkMode ? (
                    <Sun
                        className="h-8 w-8 p-2 rounded-full text-slate-600 cursor-pointer transition duration-200 hover:bg-slate-100 hover:text-purple-500"
                        size={14}
                        onClick={() => setDarkMode(prev => !prev)}
                    />
                ) : (
                    <Moon
                        className="h-8 w-8 p-2 rounded-full text-slate-600 cursor-pointer transition duration-200 hover:bg-slate-100 hover:text-violet-600"
                        size={14}
                        onClick={() => setDarkMode(prev => !prev)}
                    />
                )}

                <NavLink to='/contact' className="navbar-contact group flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-violet-600 hover:shadow-lg cursor-pointer">
                    Contact Us
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                        <ArrowRight size={14} />
                    </span>
                </NavLink>

                {/* Hamburger */}
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={23} /> : <Menu size={23} />}
                </button>

            </div>

        </nav>
    )
}

export default Navbar
