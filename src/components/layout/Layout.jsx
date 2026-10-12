import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsExpanded(true);   // Desktop → open
      } else {
        setIsExpanded(false);  // Mobile → closed
      }
    };
    handleResize(); // Run on first load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">

      <Sidebar isExpanded={isExpanded} />

      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out 
    ${isExpanded ? "lg:ml-72" : "lg:ml-20"} ml-0`}
      >
        <Topbar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />

        <main className="p-6">
          <Outlet />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;