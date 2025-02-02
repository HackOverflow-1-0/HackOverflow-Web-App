import React, { useState, useEffect } from "react";
import Button from "./Button";
import { filterableData } from "./filterableData";
import { Image } from "./Image";
import { Text } from "./Text";
import "./ImageFilter.css";

const ImageFilter = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  // const buttonCaptions = ["all", "nature", "cars", "people"];
  const buttonCaptions = ["all", "HackOverflow 1.0", "HackOverflow 2.0","winners"];

  const filteredData = filterableData.filter(
    (item) => activeFilter === "all" || activeFilter === item.name
  );

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setSelectedImageIndex(null);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => {
      return prevIndex !== null
        ? (prevIndex - 1 + filteredData.length) % filteredData.length
        : null;
    });
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      return prevIndex !== null ? (prevIndex + 1) % filteredData.length : null;
    });
  };

  // Handle keyboard events
  useEffect(() => {
    // Set scroll position to top when the component mounts
    window.scrollTo(0, 0);

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevImage();
      } else if (event.key === "ArrowRight") {
        handleNextImage();
      } else if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrevImage, handleNextImage, handleCloseModal]);

  return (
    <section className="PaddingGallery w-full flex flex-col gap-12 py-10 lg:px-16 md:px-10">
      <div className="GallerySection">
        <div className="flex w-full justify-center pb-4 md:justify-center items-start md:gap-6 gap-3 flex-wrap">
          {buttonCaptions.map((filter) => (
            <Button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              type="button"
              className={`focus:outline-none border-2 border-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 text-white py-2.5 mb-2 capitalize ${
                activeFilter === filter ? "bg-purple-600" : " "
              }`}
            >
              {filter === "all" ? "Show all" : filter}
            </Button>
          ))}
        </div>
        {/* filtered cards display */}
        <main className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-8 md:mt-8">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className={`ImageGallery w-full cursor-pointer transition-all duration-200 rounded-lg shadow`}
              onClick={() => handleImageClick(index)}
            >
              <Image
                className="rounded-t-lg w-full h-[200px] overflow-hidden"
                image={item.src}
                alt={item.name}
                objectCover="object-cover"
              />
              {/* <div className="p-5">
              <Text
                as="h5"
                className="mb-2 text-2xl font-bold tracking-tight text-white"
              >
                {item.title}
              </Text>
              <Text as="p" className="mb-3 font-normal text-gray-400">
                {item.text}
              </Text>
            </div> */}
            </div>
          ))}
        </main>
      </div>
      {/* Modal for displaying selected image */}
      {selectedImageIndex !== null && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
          onClick={handleOverlayClick} // Added event listener to the overlay
        >
          <div className="relative">
            <Button
              type="button"
              className="absolute top-4 right-4 text-white"
              onClick={handleCloseModal}
            ></Button>
            <Image
              className="ClickedImage rounded-lg w-full h-[400px] object-cover"
              image={filteredData[selectedImageIndex].src}
              alt={filteredData[selectedImageIndex].name}
            />
            <div className="absolute top-1/2 sm:top-[65%] lg:hidden transform -translate-y-1/2 flex justify-between w-full">
              <Button
                type="button"
                className="text-white text-[1rem] bg-[#891A98] rounded-md flex justify-center items-center"
                onClick={handlePrevImage}
              >
                <span className="m-2">&lt;</span>
              </Button>

              <Button
                type="button"
                className="text-white text-[1rem] bg-[#891A98] rounded-md flex justify-center items-center"
                onClick={handleNextImage}
              >
                <span className="m-2">&gt;</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageFilter;
