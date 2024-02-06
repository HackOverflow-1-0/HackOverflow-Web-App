import PhotoAlbum from "react-photo-album";
import React, { useState, useEffect } from "react";
import { NavBar } from "../NavBar";
import Footer from "../Footer";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Button from "../FaceGallery/Button";

function importAll(r) {
return r.keys().map(r);
}

const Gal = () => {
const [windowSize, setWindowSize] = useState([
window.innerWidth,
window.innerHeight,
]);

const [selectedCategory, setSelectedCategory] = useState("all");

useEffect(() => {
const handleWindowResize = () => {
setWindowSize([window.innerWidth, window.innerHeight]);
};
window.addEventListener("resize", handleWindowResize);
return () => {
window.removeEventListener("resize", handleWindowResize);
};
}, []); // Empty dependency array means this effect runs once, similar to componentDidMount

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
width: 300,
height: 200,
// You can add more properties if needed
}));

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
Memories of HackOverflow 1.0
</h1>
{/* Buttons for category selection */}
<div className="flex justify-center gap-4 mt-4">
<button
className={`filter-button ${
selectedCategory === "all" ? "active" : ""
}`}
onClick={() => handleCategoryChange("all")}
>
All
</button>
<button
className={`filter-button ${
selectedCategory === "day1" ? "active" : ""
}`}
onClick={() => handleCategoryChange("day1")}
>
Day 1
</button>
<button
className={`filter-button ${
selectedCategory === "day2" ? "active" : ""
}`}
onClick={() => handleCategoryChange("day2")}
>
Day 2
</button>
<button
className={`filter-button ${
selectedCategory === "day3" ? "active" : ""
}`}
onClick={() => handleCategoryChange("day3")}
>
Day 3
</button>
<button
className={`filter-button ${
selectedCategory === "winners" ? "active" : ""
}`}
onClick={() => handleCategoryChange("winners")}
>
Winners
</button>
</div>
<PhotoAlbum layout="rows" photos={photos} />
</div>
<Footer />
</>
);
};

export default Gal;

