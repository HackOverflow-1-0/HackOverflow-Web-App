import React, { lazy, Suspense, useState, useEffect } from "react";
import { NavBar } from "./NavBar";
import Footer from "./Footer";

// Preload components
const MobileNavbar = lazy(() => import("./MobileNavbar/MobileNavbar"));
const Teampage = lazy(() => import("./Teams/Teams"));

// Loading component with fade effect
const LoadingFallback = () => (
  <div className="loading-fade">
    <div className="loading-spinner"></div>
  </div>
);

const TeamLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Debounced resize handler
    let timeoutId = null;
    const handleResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 600);
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    
    // Simulate minimum loading time for smooth transition
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) clearTimeout(timeoutId);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <div className={`layout-container ${isLoading ? 'loading' : 'loaded'}`}>
      <NavBar />
      <Suspense fallback={<LoadingFallback />}>
        {isMobile && <MobileNavbar />}
        <Teampage />
      </Suspense>
      <Footer />
    </div>
  );
};

export default TeamLayout;
