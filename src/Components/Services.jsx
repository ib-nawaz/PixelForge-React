
import React, { useContext } from 'react'
import { ChartNoAxesCombined, ArrowUpRight, GlobeCode, Share2, FileText } from 'lucide-react'

import "./Services.css";
import { DarkWhite } from "./Conetxt/context";

const services = [
  {
    icon: ChartNoAxesCombined,
    title: "Advertising",
    description:
      "Turn bold ideas into powerful campaigns that capture attention and drive meaningful results."
  },
  {
    icon: Share2,
    title: "Content Marketing",
    description:
      "Build trust and attract the right audience with valuable content that inspires action."
  },
  {
    icon: FileText,
    title: "Content Writing",
    description:
      "Words that tell your story, communicate your value, and turn readers into loyal customers."
  },
  {
    icon: GlobeCode,
    title: "Social Media",
    description:
      "Create conversations, grow your community, and keep your brand top of mind."
  }
]

const Services = () => {

  const { darkMode } = useContext(DarkWhite);

  return (
    <section className={`w-full min-h-screen services-section overflow-y-auto overflow-x-hidden rounded-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mt ${darkMode
        ? "bg-gradient-to-br from-[#100B20] via-[#19102B] to-[#25103D]"
        : "bg-gradient-to-br from-white via-[#F8F4FF] to-[#F0E8FF]"
      }`}>

      {/* Heading */}
      <div className="text-center services-heading">

        <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 ${darkMode ? "text-white" : "text-black"
          }`}>
          How Can We <span className="text-purple-600">Help?</span>
        </h1>

        <p className="text-gray-500 text-base md:text-lg mt-4 leading-relaxed">
          From strategy to execution, we craft digital solutions
        </p>

        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
          that move your business forward.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 services-grid justify-items-center">

        {services.map((item, index) => {

          const Icon = item.icon

          return (
            <div
              key={index}
              className={`group services-card w-full border transition-all duration-300 hover:-translate-y-1 ${darkMode
                  ? "border-purple-900 bg-gradient-to-br from-[#1B122B] via-[#211532] to-[#181020] hover:border-purple-500 hover:shadow-xl hover:shadow-purple-900/30"
                  : "border-purple-100 bg-gradient-to-br from-white via-purple-50/40 to-white hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100"
                }`}
            >

              {/* Icon + Arrow */}
              <div className="flex items-center justify-between">

                <div className="services-icon rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">

                  <Icon size={26} strokeWidth={1.8} />

                </div>

                <ArrowUpRight
                  size={20}
                  className={`text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ${darkMode ? "text-white" : ""
                    }`}
                />

              </div>

              {/* Title */}
              <h3 className={`text-xl md:text-2xl font-semibold text-gray-900 services-title ${darkMode ? "text-white" : ""
                }`}>
                {item.title}
              </h3>

              {/* Description */}
              <p className={`text-gray-500 leading-7 services-description ${darkMode ? "text-white" : ""
                }`}>
                {item.description}
              </p>

            </div>
          )
        })}

      </div>

    </section>
  )
}

export default Services
