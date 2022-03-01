import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f2fbfe;

  .container {
    position: relative;
    width: 1450px;
    padding-top: 40px;
    padding-bottom: 25px;
    padding-left: 20px;
    padding-right: 20px;
    img {
      width: 100%;
    }

    .prev,
    .next {
      position: absolute;
      top: 50%;
      font-size: 60px;
      color: #000;
      line-height: 1;
      transform: translateY(-50%);
      display: grid;
      place-items: center;
      transition: all 0.3s ease-in-out;
      z-index: 5;
    }
    .prev {
      left: 0;
    }
    .next {
      right: -80px;
    }
  }
  .row {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 40px;
  }
`;
export const CarouselImage = styled.img`
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  vertical-align: middle;
  padding-left: 30px;
  padding-right: 30px;
`;

export const TextWrapper = styled.div`
  border-radius: 10px;
  outline: none;
  margin-bottom: 50px;
  img {
    max-width: 20%;
  }
  .title-image {
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.4;
  }
  p {
    margin-bottom: 38px;
    line-height: 1.56;
  }
`;
export const ButtonContainer = styled.div`
  & svg {
    margin: 0 1rem;
    cursor: pointer;
  }
  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }
  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const ReviewSlider = styled(Slider)`
  .slick-track {
    display: flex;
    padding: 30px;
    gap: 3rem;
  }
  .slick-slide {
    display: flex;
    margin-bottom: 1;
    outline: none;
  }
  .slick-list {
    overflow: hidden;
  }
`;

export const CardButton = styled.button`
  background-color: #1d609c;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  margin: auto 0 0 0;
  border: none;
  border-radius: 0 0 10px 10px;
  &:hover {
    background-color: #112f4a;
    transition: background-color 0.2s ease-in;
  }
`;
