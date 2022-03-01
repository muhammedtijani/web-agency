import { useGlobalContext } from "../../context/appContext";
import { Button } from "../../globalStyles";
import { HeroSection } from "./HeroStyles";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <HeroSection className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-video">
        <video
          src="./banner-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="https://www.unifiedinfotech.net/assets/images/banner.jpg"
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content-wrapper">
        <div className="hero-title">
          Your technology partner for innovative and impactful digital
          solutions.
        </div>
        <div className="hero-button-container">
          <Button className="alt">
            <span>VIEW CASE STUDIES</span>
          </Button>
          <Button>
            <span>CONTACT US</span>
          </Button>
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;
