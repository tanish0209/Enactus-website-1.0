// import React from "react";
// import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
// import { assets } from "../assets/assets";
// import "@coreui/coreui/dist/css/coreui.min.css";
// const Slider = () => {
//   return (
//     <div className=" pt-20 pb-20 bg-yellow-200">
//       <div className="flex justify-around mb-3">
//         <div className="text-3xl md:text-5xl font-extrabold text-white custom-outline">
//           #WEALLWIN
//         </div>
//         <div className="text-3xl md:text-5xl font-extrabold text-white custom-outline">
//           #WEALLWIN
//         </div>
//         <div className="text-3xl md:text-5xl font-extrabold text-white custom-outline">
//           #WEALLWIN
//         </div>
//       </div>
//       <div className="flex justify-center items-center w-full">
//         <CCarousel
//           controls
//           indicators
//           dark
//           transition="crossfade"
//           className="w-[90%] max-w-8xl"
//         >
//           <CCarouselItem>
//             <CImage
//               className="d-block w-full object-cover"
//               src={assets.Slider1}
//               alt="Slide 1"
//               style={{ maxHeight: "600px" }}
//             />
//           </CCarouselItem>
//           <CCarouselItem>
//             <CImage
//               className="d-block w-full object-cover"
//               src={assets.Slider2}
//               alt="Slide 2"
//               style={{ maxHeight: "600px" }}
//             />
//           </CCarouselItem>
//           <CCarouselItem>
//             <CImage
//               className="d-block w-full object-cover"
//               src={assets.Slider3}
//               alt="Slide 3"
//               style={{ maxHeight: "600px" }}
//             />
//           </CCarouselItem>
//           <CCarouselItem>
//             <CImage
//               className="d-block w-full object-cover"
//               src={assets.Slider4}
//               alt="Slide 4"
//               style={{ maxHeight: "600px" }}
//             />
//           </CCarouselItem>
//           <CCarouselItem>
//             <CImage
//               className="d-block w-full object-cover"
//               src={assets.Slider5}
//               alt="Slide 5"
//               style={{ maxHeight: "600px" }}
//             />
//           </CCarouselItem>
//           <CCarouselItem>
//             <CImage
//               className="d-block w-full object-cover"
//               src={assets.Slider6}
//               alt="Slide 6"
//               style={{ maxHeight: "600px" }}
//             />
//           </CCarouselItem>
//           <CCarouselItem>
//             <CImage
//               className="d-block w-full object-cover"
//               src={assets.Slider7}
//               alt="Slide 7"
//               style={{ maxHeight: "600px" }}
//             />
//           </CCarouselItem>
//         </CCarousel>
//       </div>
//       <div className="flex justify-around mt-3">
//         <div className="text-3xl md:text-5xl font-extrabold text-white custom-outline">
//           #WEALLWIN
//         </div>
//         <div className="text-3xl md:text-5xl font-extrabold text-white custom-outline">
//           #WEALLWIN
//         </div>
//         <div className="text-3xl md:text-5xl font-extrabold text-white custom-outline">
//           #WEALLWIN
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;
import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { assets } from "../assets/assets";
import "@coreui/coreui/dist/css/coreui.min.css";

const Slider = () => {
  return (
    <div className="pt-10 pb-10 bg-yellow-200">
      {/* Hashtags Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white custom-outline">
          #WEALLWIN
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white custom-outline">
          #WEALLWIN
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white custom-outline">
          #WEALLWIN
        </div>
      </div>
      {/* Carousel Section */}
      <div className="flex justify-center items-center w-full">
        <CCarousel
          controls
          indicators
          dark
          transition="crossfade"
          className="w-[95%] sm:w-[90%] max-w-6xl"
        >
          {[assets.Slider1, assets.Slider2, assets.Slider3, assets.Slider4, assets.Slider5, assets.Slider6, assets.Slider7].map((slide, index) => (
            <CCarouselItem key={index}>
              <CImage
                className="d-block w-full object-cover"
                src={slide}
                alt={`Slide ${index + 1}`}
                style={{ maxHeight: "500px" }}
              />
            </CCarouselItem>
          ))}
        </CCarousel>
      </div>
      {/* Hashtags Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white custom-outline">
          #WEALLWIN
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white custom-outline">
          #WEALLWIN
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white custom-outline">
          #WEALLWIN
        </div>
      </div>
    </div>
  );
};

export default Slider;
