import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button, Column, Row } from "../../globalStyles";
import { data, sliderSettings } from "../../utils/CarouselData";

import {
  TextWrapper,
  ReviewSlider,
  CarouselImage,
  CardButton,
  ButtonContainer,
  Wrapper,
} from "./CarouselCaseStyles";

const CarouselCaseStudies = () => {
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <Wrapper>
      <div className="container">
        <ButtonContainer>
          <IconContext.Provider value={{ size: "3rem", color: "#000" }}>
            <FaChevronLeft onClick={sliderRef?.slickPrev} className="prev" />
            <FaChevronRight onClick={sliderRef?.slickNext} className="next" />
          </IconContext.Provider>
        </ButtonContainer>

        <ReviewSlider {...sliderSettings} ref={setSliderRef}>
          {data.map((el, index) => (
            <div className="row" key={index}>
              <CarouselImage src={el.image} />
              <TextWrapper>
                <img src={el.img} alt={el.title} className="title-image" />
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <Button>
                  <span>VIEW PORTFOLIO</span>
                </Button>
                <Button className="alt">
                  <span>CONTACT US</span>
                </Button>
              </TextWrapper>
            </div>
          ))}
        </ReviewSlider>
      </div>
    </Wrapper>
  );
};

export default CarouselCaseStudies;
