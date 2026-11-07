
import React, { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
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

// Layout Component
function Layout() {
  const { darkMode } = React.useContext(DarkWhite);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
    >
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

// Router
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
        )
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

// App Component
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkWhite.Provider value={{ darkMode, setDarkMode }}>
      <RouterProvider router={router} />
    </DarkWhite.Provider>
  );
}

export default App;
