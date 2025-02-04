                                    import PhotoAlbum from "react-photo-album";
                                    import React, { useState, useEffect } from "react";
                                    import { NavBar } from "../NavBar";
                                    import Footer from "../Footer";
                                    import MobileNavbar from "../MobileNavbar/MobileNavbar";
                                    // import Button from "../FaceGallery/Button";
                                    // import "../FaceGallery/ImageFilter.css";
                                    import "./gal.css";
                                    // import ImageModal from "./ImageModal";

                                    function importAll(r) {
                                        return r.keys().map(r);
                                    }

                                    const Gal = () => {
                                        const [windowSize, setWindowSize] = useState([
                                            window.innerWidth,
                                            window.innerHeight,
                                        ]);
                                        const [selectedCategory, setSelectedCategory] = useState("all");
                                        const [isModalOpen, setIsModalOpen] = useState(false);
                                        const [selectedImage, setSelectedImage] = useState(null);

                                        useEffect(() => {
                                            const handleWindowResize = () => {
                                                setWindowSize([window.innerWidth, window.innerHeight]);
                                            };
                                            window.addEventListener("resize", handleWindowResize);
                                            return () => {
                                                window.removeEventListener("resize", handleWindowResize);
                                            };
                                        }, []);

                                        const allImages = importAll(
                                            require.context(
                                                "../../assets/img/Events/1.0/",
                                                true,
                                                /\.(webp|jpg|jpeg|png)$/
                                            )
                                        );

                                        const day1Images = importAll(
                                            require.context(
                                                "../../assets/img/Events/1.0/day1/",
                                                false,
                                                /\.(webp|jpg|jpeg|png)$/
                                            )
                                        );

                                        const day2Images = importAll(
                                            require.context(
                                                "../../assets/img/Events/1.0/day2/",
                                                false,
                                                /\.(webp|jpg|jpeg|png)$/
                                            )
                                        );

                                        const day3Images = importAll(
                                            require.context(
                                                "../../assets/img/Events/1.0/day3/",
                                                false,
                                                /\.(webp|jpg|jpeg|png)$/
                                            )
                                        );

                                        const winnerImages = importAll(
                                            require.context(
                                                "../../assets/img/pastwinners/",
                                                false,
                                                /\.(webp|jpg|jpeg|png)$/
                                            )
                                        );

                                        const getFilteredImages = () => {
                                            switch (selectedCategory) {
                                                case "day1":
                                                    return day1Images;
                                                case "day2":
                                                    return day2Images;
                                                case "day3":
                                                    return day3Images;
                                                case "winners":
                                                    return winnerImages;
                                                default:
                                                    return allImages;
                                            }
                                        };

                                        const handleCategoryChange = (category) => {
                                            setSelectedCategory(category);
                                        };

                                        const photos = getFilteredImages().map((src, index) => ({
                                            src,
                                            width: 100,
                                            height: 60,
                                            // You can add more properties if needed
                                        }));

                                        const handleImageClick = ({ index }, event) => {
                                            event.preventDefault();
                                            const selectedImageUrl = getFilteredImages()[index];
                                            console.log("hello");
                                            setSelectedImage(selectedImageUrl);
                                            setIsModalOpen(true);
                                        };
                                        


                                        const handleCloseModal = () => {
                                            setIsModalOpen(false);
                                        };

                                        const modal = isModalOpen && selectedImage && (
                                            <div className="modal-overlay" onClick={handleCloseModal}>
                                                <div className="modal-content">
                                                    <img src={selectedImage} alt="Selected" />
                                                </div>
                                            </div>
                                        );

                                        return (
                                            <>
                                                <NavBar />
                                                {windowSize[0] < 600 && <MobileNavbar />}
                                                <div className="pt-32 w-full min-h-screen" id="gallery">
                                                    <h1
                                                        id="orange-pink"
                                                        className="pt-2 text-[30px] sm:text-[36px] md:text-[35px] lg:text-[45px]"
                                                        style={{
                                                            fontFamily: "Poppins,sans-serif",
                                                            fontWeight: 700,
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        Memories of HackOverflow
                                                    </h1>
                                                    <div className="grid grid-cols-2 md:flex md:flex-row md:justify-center md:gap-4 lg:grid-cols-2 xl:grid-cols-3 mt-4 mx-4">
                                                        <button
                                                            className={`focus:outline-none border-2 border-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 text-white py-2.5 mb-2 capitalize ${selectedCategory === "hackoverflow1" ? "bg-purple-600" : ""}`}
                                                            onClick={() => handleCategoryChange("hackoverflow 1.0")}
                                                        >
                                                            HackOverflow 1.0
                                                        </button>
                                                        <button
                                                            className={`focus:outline-none border-2 border-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 text-white py-2.5 mb-2 capitalize ${selectedCategory === "hackoverflow2" ? "bg-purple-600" : ""}`}
                                                            onClick={() => handleCategoryChange("hackoverflow2")}
                                                        >
                                                            HackOverflow 2.0
                                                        </button>
                                                        <button
                                                            className={`focus:outline-none border-2 border-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 text-white py-2.5 mb-2 capitalize ${selectedCategory === "winners" ? "bg-purple-600" : ""}`}
                                                            onClick={() => handleCategoryChange("winners")}
                                                        >
                                                            Winners
                                                        </button>
                                                    </div>
                                                    <div className="photo-album-container mt-4">
                                                        <PhotoAlbum
                                                            layout="rows"
                                                            photos={photos}
                                                            onClick={(event, { index }) => handleImageClick(index, event)}
                                                        />


                                                    </div>
                                                </div>
                                                {modal}
                                                <Footer />
                                            </>
                                        );
                                    };

                                    export default Gal;

