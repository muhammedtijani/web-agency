import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 500px;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
  flex-wrap: wrap;

  @media screen and (max-width: 640px) {
    height: auto;
    min-height: 400px;
  }

  .hero-video {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    @media screen and (max-width: 640px) {
      max-height: 400px;
    }
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
    padding: 0 15px;
    z-index: 3;
    flex: 0 0 75%;
    max-width: 75%;

    @media screen and (max-width: 800px) {
      top: 15%;
      flex: 0 0 95%;
      max-width: 95%;
    }

    @media screen and (max-width: 640px) {
      .hero-button-container {
        display: none;
      }
    }
  }

  .hero-title {
    margin-bottom: 40px;
    font-family: "CircularStd";
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    line-height: 1.25;
    letter-spacing: 2px;
    opacity: 1;

    @media screen and (max-width: 640px) {
      margin-bottom: 25px;
      font-size: 30px;
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

    @media screen and (max-width: 640px) {
      max-height: 400px;
    }
  }
`;
