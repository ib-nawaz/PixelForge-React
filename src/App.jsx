
import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter, Outlet, } from "react-router-dom";
import { DarkWhite } from "./Components/Conetxt/context";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import OurWork from "./Components/OurWork";
import OurTeam from "./Components/OurTeam";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import ScrollToTop from "./Components/ScrollToTop";
import Privacy from "./Components/Privacy";

import { Toaster } from "react-hot-toast";


function Layout() {
  const { darkMode } = useContext(DarkWhite);



  return (
    <div
      className={`min-h-screen min-w-screen  transition-colors duration-300 ${darkMode
        ? "bg-black text-white"
        : "bg-white text-black"
        }`}>
      <ScrollToTop />

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
            <Services />
            <OurWork />
            <OurTeam />
            <Contact />
          </>
        ),
      },


      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/services",
        element: <Services />,
      },


      {
        path: "/ourwork",
        element: (
          <>
            <OurWork />
            <OurTeam />
          </>
        ),
      },

      {
        path: "/contact",
        element: <Contact />,
      },


      {
        path: "/privacy",
        element: <Privacy />,
      },


      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode, loaded]);
  
  return (
    <DarkWhite.Provider value={{ darkMode, setDarkMode, }}>
      <Toaster
        position="top-left"
        toastOptions={{
          style: {
            background: darkMode ? "white" : "black",
            color: darkMode ? "black" : "white",
            maxWidth: "none",
            width: "max-content",
          },
        }}
      />
      <RouterProvider router={router} />
    </DarkWhite.Provider>
  );
}

export default App;
