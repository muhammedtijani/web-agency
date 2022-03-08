import styled from "styled-components";

export const Wrapper = styled.section`
  /* display: block; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f2fbfe;
  margin-bottom: 90px;

  .container {
    position: relative;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 25px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  }

  .swiper {
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  /* .swiper-slide {
    background-size: cover;
    background-position: center;
  } */

  .mySwiper2 {
    height: 80%;
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  /* .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  } */

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  /* .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */

  .thumb-column {
    width: 100%;
    height: auto;
  }

  .thumb-img {
    padding-left: 22px;
    padding-right: 22px;
    width: 271.8px;

    img {
      max-width: 100% !important;
    }
  }

  .carousel-image-holder {
    max-width: 100%;
    vertical-align: middle;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 800px) {
    .container {
      width: 1450px;
    }
    .swiper-slide {
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .mySwiper2 {
      height: 90%;
    }

    .mySwiper {
      height: 10%;
    }

    .carousel-image-holder {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;
export const CarouselImage = styled.img`
  border-radius: 10px 10px 0 0;
  object-fit: cover;

  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  border-radius: 10px;
  outline: none;
  margin-bottom: 50px;
  vertical-align: middle;
  padding-left: 30px;
  padding-right: 30px;
  img {
    max-width: 20% !important;
  }
  .title-image {
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.2;
  }
  p {
    line-height: 1.56;
  }

  .btn-container {
    display: flex;
  }

  .btn-carousel {
    position: relative;
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
    margin-top: 35px;
    margin-right: 15px;
    padding: 13px 33px 14px 33px;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 0;
    text-transform: uppercase;
    color: #000;
    --webkit-transform: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    box-shadow: initial;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 0;
      content: " ";
      height: 0;
      background-color: #000;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      color: #fff;

      &:before {
        top: auto;
        bottom: 0;
        height: 100%;
      }
    }

    > span {
      position: relative;
    }
    &.alt {
      background-color: #000;
      color: #fff;
      &:before {
        background-color: #fff;
      }
      &:hover {
        color: #000;
      }
    }
  }
  @media screen and (min-width: 769px) {
    flex: 0 0 50%;
    max-width: 50%;
    h3 {
      margin-bottom: 30px;
      font-size: 30px;
      font-weight: 500;
      line-height: 1.4;
    }
    p {
      margin-bottom: 38px;
    }
    .btn-carousel {
      font-size: 18px;
    }
  }
`;
