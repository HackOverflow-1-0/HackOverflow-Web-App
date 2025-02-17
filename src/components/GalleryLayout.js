import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import FaceGallery from "./FaceGallery/FaceGallery";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const GalleryLayout = () => {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Function to navigate back to home
  const goToHome = () => {
    navigate("/#home");
  };

  return (
    <>
      {/* Back to Home Button Fixed at Top-Right */}
      <div
        style={{
          position: "fixed",
          top: "10px",
          right: "20px",
          zIndex: "1000", // Ensures it's above other elements
        }}
      >
        <button
          onClick={goToHome}
          className="bg-[#5B8F81] hover:bg-[#4A776D] text-white font-bold py-2 px-4 rounded shadow-lg"
        >
          Back to Home
        </button>
      </div>

      {windowSize[0] < 600 && <MobileNavbar />}
      <FaceGallery />
      <Footer />
    </>
  );
};

export default GalleryLayout;