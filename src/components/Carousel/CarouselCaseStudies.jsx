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
