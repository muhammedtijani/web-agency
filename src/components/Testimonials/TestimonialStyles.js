import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .testimonials-left {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: calc(50% + 200px);
    background-color: #f9f9f9;
  }
  .testimonials-right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    background-color: black;
  }
  .testimonials-container {
    max-width: 1450px;
  }
  .testimonials-wrap {
    display: flex;
    align-items: center;
  }
  .testimonials-scroll {
    padding: 60px;
    max-width: 50%;
  }
  .testimonials-contact {
    padding: 60px;
    max-width: 50%;
  }
  .testimonial-contact-item {
    z-index: 1;

    .section-container {
      text-align: left;

      h2 {
        color: white;
      }
    }
  }
  .holder {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 6rem;
  }
  blockquote {
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 28px;
    line-height: 1.4;
  }
  .testimonial-name {
    margin-bottom: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
  }
  .testimonial-rank {
    margin-bottom: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
  }
  .picture {
    margin-bottom: 25px;
    align-items: center;
    img {
      max-width: 125px;
      border-radius: 50%;
    }
  }

  .form-wrapper {
    padding: 2rem 0 0rem;

    .form-group {
      margin-bottom: 35px;
      .name {
        max-width: 100%;
      }

      position: relative;
      margin-top: 0;
      input,
      textarea {
        display: block;
        background: none;
        padding: 0;
        font-size: 16px;
        border-width: 0;
        border-color: transparent;
        line-height: 1.9;
        width: 100%;
        color: white;

        transition: all 0.28s ease;
        box-shadow: none;
      }
      .label {
        color: rgba(255, 255, 255, 0.8);
        position: absolute;
        top: -2px;
        pointer-events: none;
        padding-left: 0;
        z-index: 1;
        opacity: 0.8;
        font-size: 16px;
        font-weight: normal;

        transition: all 0.28s ease;
        font-family: "CircularStd";
        margin: 0;
      }
      .bar {
        position: relative;
        border-bottom: 2px solid rgba(0, 0, 0, 0.2);
        display: block;
        border-bottom-color: rgba(255, 255, 255, 0.2);
      }
    }

    .form-group-wrap {
      width: 100%;
      display: flex;
      flex-direction: row;
    }
    .email {
      flex: 50%;
      max-width: 50%;
      padding-right: 15px;
      textarea {
        transition: inherit;
        opacity: 1;
        font-family: "CircularStd";
        font-weight: normal;
      }
    }
    .phone {
      flex: 50%;
      max-width: 50%;
      padding-left: 15px;
    }
    .textarea-border {
      border: 2px solid rgba(0, 0, 0, 0.2);
      padding: 19px 15px 10px;
      border-color: rgba(255, 255, 255, 0.2);
    }
    .textarea-border textarea {
      height: 80px;
      color: #fff;
      margin-top: 20px;
      transition: inherit;
      opacity: 1;
      font-family: "CircularStd";
      font-weight: normal;
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;

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

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
  }
`;
