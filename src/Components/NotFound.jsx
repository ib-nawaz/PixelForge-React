import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-white flex items-center px-[3vw] py-16 ff">

      {/* Soft background glow */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">

        {/* Left: Text */}
        <div className="text-center md:text-left">

          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Error 404
          </p>

          <h1 className="mt-4 text-8xl sm:text-9xl font-extrabold tracking-tight text-slate-900">
            404<span className="text-violet-600">.</span>
          </h1>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Page not found
          </h2>

          <p className="mt-5 max-w-md mx-auto md:mx-0 text-sm leading-7 text-slate-600">
            The page you are looking for might have been moved, deleted or never existed.
          </p>

    <div className="m-10"> </div>
          <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-6">

            <Link
              to="/home"
              className="px-5 py-3.5 rounded-2xl text-sm font-medium bg-violet-600 text-white ring-8 ring-violet-600 transition-all duration-200"
            >
              Go to Home
            </Link>

            <Link
              to="/contact"
              className="group flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
            >
              Contact Us
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRight size={14} />
              </span>
            </Link>

          </div>
        </div>

        {/* Right: Picture */}
        <div className="relative flex items-center justify-center">

          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-violet-400/40 to-fuchsia-400/40 blur-3xl" />

          <div className="relative w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-violet-200/60 rotate-2 transition-transform duration-500 hover:rotate-0">

            <svg viewBox="0 0 400 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
              </defs>

              {/* Browser window */}
              <rect x="20" y="20" width="360" height="260" rx="22" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
              <rect x="20" y="20" width="360" height="46" rx="22" fill="#f1f5f9" />
              <circle cx="52" cy="43" r="6" fill="#f87171" />
              <circle cx="72" cy="43" r="6" fill="#fbbf24" />
              <circle cx="92" cy="43" r="6" fill="#34d399" />
              <rect x="120" y="32" width="230" height="22" rx="11" fill="#e2e8f0" />

              {/* 404 */}
              <text x="200" y="165" textAnchor="middle" fontSize="88" fontWeight="800" fill="url(#g)">
                404
              </text>

              {/* Text lines */}
              <rect x="110" y="190" width="180" height="10" rx="5" fill="#e2e8f0" />
              <rect x="140" y="212" width="120" height="10" rx="5" fill="#e2e8f0" />

              {/* Magnifier */}
              <circle cx="318" cy="228" r="26" fill="white" stroke="url(#g)" strokeWidth="8" />
              <line x1="337" y1="247" x2="362" y2="272" stroke="url(#g)" strokeWidth="9" strokeLinecap="round" />
            </svg>

          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 right-4 rounded-2xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-lg">
            Nothing here!
          </div>

        </div>

      </div>
    </section>
  );
};

export default NotFound;