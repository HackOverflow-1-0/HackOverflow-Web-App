import ImageFilter from "./ImageFilter";
const FaceGallery = () => {
  return (
    <div className="pt-24 w-full min-h-screen bg-gray-900" id="gallery">
      <h1
        id="orange-pink"
        className="pt-2 text-[30px] sm:text-[36px] md:text-[35px] lg:text-[45px]"
        style={{
          fontFamily: "Poppins,sans-serif",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Gallery OP
      </h1>
      <ImageFilter />
    </div>
  );
};

export default FaceGallery;
