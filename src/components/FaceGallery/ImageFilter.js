import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";
import Button from "./Button";
import { filterableData } from "./filterableData";
import { Image } from "./Image";
import "./ImageFilter.css";

const ImageFilter = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const buttonCaptions = useMemo(() => ["all", "HackOverflow 1.0", "HackOverflow 2.0", "winners"], []);

  // Memoize filtered data to prevent unnecessary recalculations
  const filteredData = useMemo(() => 
    filterableData.filter((item) => activeFilter === "all" || activeFilter === item.name),
    [activeFilter]
  );

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setSelectedImageIndex(null);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex !== null ? (prevIndex - 1 + filteredData.length) % filteredData.length : null
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex !== null ? (prevIndex + 1) % filteredData.length : null
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleKeyDown = (event) => {
      switch(event.key) {
        case "ArrowLeft":
          handlePrevImage();
          break;
        case "ArrowRight":
          handleNextImage();
          break;
        case "Escape":
          handleCloseModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="PaddingGallery w-full flex flex-col gap-12 py-10 lg:px-16 md:px-10">
      <div className="GallerySection">
        <div className="flex w-full justify-center pb-4 md:justify-center items-start md:gap-6 gap-3 flex-wrap">
          {buttonCaptions.map((filter) => (
            <Button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              type="button"
              className={`focus:outline-none border-2 border-[#5B8F81] hover:bg-[#5B8F81] font-medium rounded-lg text-sm px-5 text-white py-2.5 mb-2 capitalize ${
                activeFilter === filter ? "bg-[#5B8F81]" : ""
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <main className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-8 md:mt-8">
          {filteredData.map((item, index) => (
            <div
              key={item.src}
              className="ImageGallery w-full cursor-pointer transition-all duration-200 rounded-lg shadow"
              onClick={() => handleImageClick(index)}
            >
              <Image
                className="rounded-t-lg w-full h-[200px] overflow-hidden"
                image={item.src}
                alt={item.name}
                objectCover="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </main>
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              className="absolute top-4 right-4 text-white z-10"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              ✕
            </button>
            <Image
              className="ClickedImage rounded-lg w-full max-h-[80vh] object-contain"
              image={filteredData[selectedImageIndex].src}
              alt={filteredData[selectedImageIndex].name}
              loading="eager"
            />
            <div className="absolute top-1/2 w-full px-4 flex justify-between transform -translate-y-1/2">
              <button
                className="text-white bg-[#5B8F81] rounded-md p-2"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                className="text-white bg-[#5B8F81] rounded-md p-2"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageFilter;
