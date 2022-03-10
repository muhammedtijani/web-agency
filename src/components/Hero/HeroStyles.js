import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  height: auto;
  min-height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .hero-video {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    z-index: -1;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  .hero-content-wrapper {
    position: relative;
    top: 15%;
    padding: 0 25px;
    margin: auto;
    z-index: 3;

    .hero-title {
      margin-bottom: 5px;
      font-family: "CircularStd";
      font-size: 30px;
      font-weight: 700;
      color: #fff;
      line-height: 1.25;
      letter-spacing: 2px;
      opacity: 1;
    }
    .hero-button-container {
      display: none;
    }
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 640px) {
    height: 100vh;
    min-height: 500px;

    .hero-content-wrapper {
      top: 35%;
      padding: 0 15px;
      flex: 0 0 75%;
      max-width: 85%;

      .hero-button-container {
        display: block;
      }
      .hero-title {
        font-size: 48px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .hero-content-wrapper {
      padding: 0 5px;
      .hero-title {
        font-size: 46px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .hero-content-wrapper {
      max-width: 75%;

      .hero-title {
        font-size: 48px;
      }
    }
  }
`;
