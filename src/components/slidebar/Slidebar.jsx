// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
// import "./silder.css";

// const properties = {
//   duration: 7000,
//   transitionDuration: 500,
//   infinite: true,
//   //   indicators: true,
//   arrows: true,
//   pauseOnHover: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//   },
// };

// const Slidebar = () => {
//   return (
//     <>
//       <div className="slide-container">
//         <Slide {...properties}>
//           {slideImages.map((e) => (
//             <div className="each-slide">
//               <img src={e} />
//             </div>
//           ))}
//         </Slide>
//       </div>
//     </>
//   );
// };

// export default Slidebar;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Autoplay, Pagination } from "swiper";
import { Box } from "@chakra-ui/react";

export default function Slidebar() {
  const slideImages = [
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/A-131-Banner_0e6d2056-3bd5-4ee0-8bd3-7a2a50e30e30_1600x.jpg?v=1657953240",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/wireless-banner_1_1600x.png?v=1657290971",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/A131-banner-new_1_1600x.png?v=1658248789",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gif--new_1600x.gif?v=1658249062",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PRE-BOOK--banner2_1600x.jpg?v=1658390679",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/deal-of-the-day-new_1600x.png?v=1657957011",
  ];
  return (
    <Box bg={"#212529"}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
         className="mySwiper"
        style={{ height: "480px" }}
      >
        {slideImages.map((e) => (
          <SwiperSlide>
            <img src={e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
