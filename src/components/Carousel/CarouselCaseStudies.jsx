import React, { useState } from "react";

import { Wrapper, CarouselImage, TextWrapper } from "./CarouselCaseStyles";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import { data, thumbs } from "../../utils/CarouselData";

export default function CarouselCaseStudies() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Wrapper>
      <div className="container">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={5}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySlide"
        >
          {thumbs.map((el, index) => (
            <SwiperSlide key={index}>
              <div className="thumb-column">
                <img src={el.img} className="thumb-img" alt="thumb" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySlide2"
        >
          {data.map((el, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-image-holder">
                <CarouselImage src={el.image} />
              </div>
              <TextWrapper>
                <img src={el.img} alt={el.title} className="title-image" />
                <h3>{el.title}</h3>
                <p>{el.description}</p>

                <div className="btn-container">
                  <button className="btn-carousel">
                    <span>VIEW PORTFOLIO</span>
                  </button>
                  <button className="btn-carousel alt">
                    <span>CONTACT US</span>
                  </button>
                </div>
              </TextWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
}

// import React, { useState } from "react";

// import { FreeMode, Navigation, Thumbs } from "swiper";

// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";
// import { Button, Column, Row } from "../../globalStyles";
// import { data, sliderSettings } from "../../utils/CarouselData";

// import {
//   TextWrapper,
//   ReviewSlider,
//   CarouselImage,
//   CardButton,
//   ButtonContainer,
//   Wrapper,
// } from "./CarouselCaseStyles";

// export default () => {

//   // const [sliderRef, setSliderRef] = useState(null);
//   return (
//     <Wrapper>

//       {/* <div className="container">
//         <ButtonContainer>
//           <IconContext.Provider value={{ size: "3rem", color: "#000" }}>
//             <FaChevronLeft onClick={sliderRef?.slickPrev} className="prev" />
//             <FaChevronRight onClick={sliderRef?.slickNext} className="next" />
//           </IconContext.Provider>
//         </ButtonContainer>

//         <ReviewSlider {...sliderSettings} ref={setSliderRef}>
//           {data.map((el, index) => (
//             <div className="row" key={index}>
//               <CarouselImage src={el.image} />
//               <TextWrapper>
//                 <img src={el.img} alt={el.title} className="title-image" />
//                 <h3>{el.title}</h3>
//                 <p>{el.description}</p>
//                 <Button>
//                   <span>VIEW PORTFOLIO</span>
//                 </Button>
//                 <Button className="alt">
//                   <span>CONTACT US</span>
//                 </Button>
//               </TextWrapper>
//             </div>
//           ))}
//         </ReviewSlider>
//       </div> */}
//     </Wrapper>
//   );
// };
