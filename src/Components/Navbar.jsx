import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Sun, Moon, Sparkles, ArrowRight } from "lucide-react";
import { DarkWhite } from './Conetxt/context';

const Navbar = () => {

    const { darkMode, setDarkMode } = useContext(DarkWhite)

    return (
        <nav className={`sticky top-0 z-50 flex items-center justify-between px-[3vw] h-14 ff bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm ${darkMode ? "bg-white" : ""}
        `}>

            <div>
                <NavLink to='/home' className="flex items-center gap-3 group">

                    <span className="ml-8 text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-violet-600">
                        Agency<span className="text-fuchsia-500">.</span>
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white ring-4 ring-violet-100 shadow-lg shadow-violet-500/40 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:ring-violet-200">
                        <Sparkles size={18} className="fill-white" />
                    </span>

                </NavLink>
            </div>

            {/* Middle: Links */}
            <div className="flex items-center gap-5">
                <NavLink to='/home' className={(e) => `px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 ${e.isActive ? "bg-purple-500 text-white ring-8 ring-purple-500" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>Home</NavLink>

                <NavLink to='/services' className={(e) => `px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 ${e.isActive ? "bg-purple-500 text-white ring-8 ring-purple-500" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>Services</NavLink>

                <NavLink to='/ourwork' className={(e) => `px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 ${e.isActive ? "bg-purple-500 text-white ring-8 ring-purple-500" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>Our Work</NavLink>

                <NavLink to='/contact' className={(e) => `px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200 ${e.isActive ? "bg-purple-500 text-white ring-8 ring-purple-500" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>Contact</NavLink>
            </div>

            {/* Right: Sun, Moon, Button */}
            <div className="flex items-center gap-3">

                {darkMode ? (
                    < Sun className="h-8 w-8 p-5 rounded-full text-slate-600 cursor-pointer transition duration-200 hover:bg-slate-100 hover:ring-7 hover:ring-slate-100 hover:text-ampurple-500" size={14}
                        onClick={() => setDarkMode(false)}
                    />) : (

                    <Moon className="h-8 w-8 p-2 rounded-full text-slate-600 cursor-pointer transition duration-200 hover:bg-slate-100 hover:ring-7 hover:ring-slate-100 hover:text-violet-600" size={14}
                        onClick={() => setDarkMode(true)} />
                )}

                < NavLink to='/contact' className="group flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white ring-4 ring-slate-900 transition duration-200 hover:bg-violet-600 hover:ring-violet-600 hover:shadow-lg hover:shadow-viopurple-500/30 cursor-pointer">
                    Contact Us
                    <span className="transition-transform duration-200 group-hover:translate-x-1"><ArrowRight size={14} /></span>
                </NavLink>

            </div>

        </nav >
    )
}

export default Navbar