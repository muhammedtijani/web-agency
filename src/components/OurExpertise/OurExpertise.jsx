import { Swiper, SwiperSlide } from "swiper/react";
import { Wrapper } from "./OurExpertiseStyles";
import { expertiseData } from "../../utils/expertiseData";
import SectionTitle from "../SectionTitle/SectionTitle";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation } from "swiper";

const OurExpertise = () => {
  return (
    <Wrapper>
      <div className="container">
        <SectionTitle title="Our Expertise" />
        <div className="expertise-wrapper">
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            loop={true}
            modules={[FreeMode, Navigation]}
            spaceBetween={2}
            slidesPerView={4}
            navigation={true}
          >
            {expertiseData.map((item, index) => (
              <SwiperSlide>
                <div className="expertise-content" key={index}>
                  <div className="expertise-image">
                    <img src={item.img} alt="commerce" />
                  </div>
                  <h3 className="expertise-title">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default OurExpertise;
