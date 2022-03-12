import { Wrapper } from "./FooterStyles";
import { SectionTitle } from "../../components";
import { Button } from "../../globalStyles";
import images from "../../utils/images";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-address-right">
        <div className="footer-address-right-items">
          <SectionTitle title="Like what you see?" />
          <SectionTitle title="Lets start a conversation." />
          <Button>Get In Touch</Button>
        </div>
      </div>
      <div className="footer-address-left">
        <div className="footer-image-holder">
          <img src={images.footerBanner} alt="footer banner" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
