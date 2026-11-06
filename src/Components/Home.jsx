
import React, { useContext } from "react";
import { DarkWhite } from "./Conetxt/context";
import hero from "../assets/hero.png";
import { SiGoogle, SiApple, SiMeta, SiNetflix, SiSpotify } from "react-icons/si";

const Home = () => {
    const { darkMode } = useContext(DarkWhite);

    return (
        <div
            className={`w-full min-h-screen overflow-y-auto overflow-x-hidden rounded-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${darkMode
                ? "bg-gradient-to-br from-[#100B20] via-[#19102B] to-[#25103D]"
                : "bg-gradient-to-br from-white via-[#F8F4FF] to-[#F0E8FF]"
                }`}
        >
            {/* Hero Section */}
            <section className="w-full min-h-[85vh] flex flex-col items-center pt-[3vh] pb-16 px-4">

                {/* Trusted Badge */}
                <div className="mt flex items-center gap-4 w-fit max-w-full px-3 sm:px-5 py-3.5 rounded-full border border-violet-300/50 bg-white shadow-lg">

                    {/* Avatars */}
                    <div className="relative shrink-0 w-[108px] h-9">
                        <img src="https://i.pravatar.cc/150?img=8" alt="" className="absolute top-0 left-0 z-50 w-9 h-9 rounded-full border-2 border-white object-cover" />
                        <img src="https://i.pravatar.cc/150?img=12" alt="" className="absolute top-0 left-[24px] z-40 w-9 h-9 rounded-full border-2 border-white object-cover" />
                        <img src="https://i.pravatar.cc/150?img=33" alt="" className="absolute top-0 left-[48px] z-30 w-9 h-9 rounded-full border-2 border-white object-cover" />
                        <img src="https://i.pravatar.cc/150?img=20" alt="" className="absolute top-0 left-[72px] z-20 w-9 h-9 rounded-full border-2 border-white object-cover" />
                        <img src="https://i.pravatar.cc/150?img=5" alt="" className="absolute top-0 left-[96px] z-10 w-9 h-9 rounded-full border-2 border-white object-cover" />
                    </div>

                    {/* Trusted Text */}
                    <p className="shrink-0 px whitespace-nowrap text-xs sm:text-sm text-slate-500 font-medium">
                        Trusted by{" "}
                        <span className="font-bold text-slate-800">10K+ People</span>
                    </p>

                </div>

                {/* Hero Heading */}
                <h1
                    className={`mt-8 text-center text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight ${darkMode ? "text-white" : "text-slate-900"
                        }`}
                >
                    Turning Imagination Into

                    <span className="block">
                        <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                            Digital
                        </span>{" "}
                        Impact
                    </span>
                </h1>

                {/* Hero Description */}
                <p
                    className={`mt max-w-3xl text-center text-sm sm:text-lg leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                >
                    Creating meaningful connections and turning big ideas
                    <br className="hidden sm:block" />{" "}
                    into interactive digital experiences.
                </p>

                {/* Hero Image */}
                <div className="mt w-[80vw] h-[60vh] overflow-hidden rounded-3xl border border-violet-200/50 shadow-[0_20px_60px_rgba(139,92,246,0.18)]">
                    <img
                        src={hero}
                        alt="Team collaboration"
                        className="w-full h-full object-cover object-center"
                    />
                </div>


                {/* Trusted Companies */}
                <div className='w-full py-14 px-6 m'>

                    <h2 className={`text-xl md:text-4xl font-bold text-center text-slate-900 m ${darkMode ? "text-white" : "text-black"}`}>
                        Trusted By{" "}
                        <span className="text-purple-600">Leading Companies</span>
                    </h2>


                    {/* LOGOS */}
                    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-5 px-5 sm:px-6">

                        {/* Google */}
                        <div className={`flex items-center justify-center gap-3 py-6 px-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${darkMode
                            ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-400/40 hover:shadow-blue-500/10"
                            : "bg-white border-blue-100 hover:bg-blue-50 hover:border-blue-300 hover:shadow-blue-200/50"
                            }`}>
                            <SiGoogle size={36} className="text-[#4285F4] shrink-0" />
                            <span className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>Google</span>
                        </div>

                        {/* Apple */}
                        <div className={`flex items-center justify-center gap-3 py-6 px-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${darkMode
                            ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-slate-400/40 hover:shadow-slate-500/10"
                            : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-400 hover:shadow-slate-200/50"
                            }`}>
                            <SiApple size={36} className={`shrink-0 ${darkMode ? "text-white" : "text-black"}`} />
                            <span className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>Apple</span>
                        </div>

                        {/* Spotify */}
                        <div className={`flex items-center justify-center gap-3 py-6 px-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${darkMode
                            ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-green-400/40 hover:shadow-green-500/10"
                            : "bg-white border-green-100 hover:bg-green-50 hover:border-green-300 hover:shadow-green-200/50"
                            }`}>
                            <SiSpotify size={36} className="text-[#1DB954] shrink-0" />
                            <span className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>Spotify</span>
                        </div>

                        {/* Netflix */}
                        <div className={`flex items-center justify-center gap-3 py-6 px-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${darkMode
                            ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-red-400/40 hover:shadow-red-500/10"
                            : "bg-white border-red-100 hover:bg-red-50 hover:border-red-300 hover:shadow-red-200/50"
                            }`}>
                            <SiNetflix size={36} className="text-[#E50914] shrink-0" />
                            <span className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>Netflix</span>
                        </div>

                        {/* Meta */}
                        <div className={`flex items-center justify-center gap-3 py-6 px-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl col-span-2 md:col-span-1 md:mx-0 mx-auto w-full max-w-[240px] ${darkMode
                            ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-400/40 hover:shadow-blue-500/10"
                            : "bg-white border-blue-100 hover:bg-blue-50 hover:border-blue-300 hover:shadow-blue-200/50"
                            }`}>
                            <SiMeta size={36} className="text-[#0866FF] shrink-0" />
                            <span className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>Meta</span>
                        </div>

                    </div>
                </div>


            </section>
        </div>
    );
};

export default Home;
