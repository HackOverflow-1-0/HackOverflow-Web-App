// import React, { useState, useEffect } from "react";
// import { load, detectAllFaces, TinyFaceDetectorOptions } from "face-api.js";
// import Camera from "react-html5-camera-photo";
// import "react-html5-camera-photo/build/css/index.css";

// const ImageSeparatorGallery = ({ photos }) => {
//   const [userPhotos, setUserPhotos] = useState([]);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);

//   useEffect(() => {
//     loadModels();
//   }, []);

//   const loadModels = async () => {
//     await Promise.all([
//       load("/models"),
//       faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
//       faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
//       faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
//     ]);
//   };

//   const handleTakePhoto = async (dataUri) => {
//     const image = new Image();
//     image.src = dataUri;
//     await image.decode();

//     const faceDetectionOptions = new TinyFaceDetectorOptions();
//     const faceDetectionResults = await detectAllFaces(
//       image,
//       faceDetectionOptions
//     ).withFaceLandmarks();

//     if (faceDetectionResults.length > 0) {
//       // Face detected, filter photos
//       const filteredPhotos = photos.filter((photo) => {
//         // Implement your own logic to check if the face is present in each photo
//         return true; // Replace with your own condition
//       });

//       setUserPhotos(filteredPhotos);
//       setIsCameraOpen(false);
//     } else {
//       alert("No face detected. Please try again.");
//     }
//   };

//   const handleDownloadPhotos = () => {
//     // Implement your logic for downloading photos
//     // For demonstration purposes, alert the download logic
//     alert("Download logic here!");
//   };

//   return (
//     <div>
//       {isCameraOpen ? (
//         <Camera onTakePhoto={(dataUri) => handleTakePhoto(dataUri)} />
//       ) : (
//         <>
//           <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
//           <div>
//             {userPhotos.length > 0 ? (
//               userPhotos.map((photo, index) => (
//                 <img key={index} src={photo} alt={`User ${index}`} />
//               ))
//             ) : (
//               <p>
//                 No photos to display. Take a photo with your face to see
//                 filtered images.
//               </p>
//             )}
//           </div>
//           <button onClick={handleDownloadPhotos}>Download Photos</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default ImageSeparatorGallery;
