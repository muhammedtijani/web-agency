import { Container, Column } from "../../globalStyles";
import OpenReel from "../../assets/images/Clutch-Openreel@3x.png";
import OOTA from "../../assets/images/Clutch-Oota@3x.png";
import Lond from "../../assets/images/Clutch-Londonrag@3x.png";
import Largo from "../../assets/images/Clutch-Largo@3x.png";
import Houselab from "../../assets/images/Clutch-Houselab@3x.png";

const CaseStudiesThumb = () => {
  return (
    <div className="thumb-wrapper">
      <Container className="thumb-container">
        <div className="case-studies-thumb">
          <Column className="thumb-column">
            <div className="pic">
              <img src={OpenReel} alt="OpenReel" />
            </div>
          </Column>
          <Column className="thumb-column">
            <div className="pic">
              <img src={Houselab} alt="Houselab" />
            </div>
          </Column>
          <Column className="thumb-column">
            <div className="pic">
              <img src={Largo} alt="Largo" />
            </div>
          </Column>
          <Column className="thumb-column">
            <div className="pic">
              <img src={OOTA} alt="OOTA " />
            </div>
          </Column>
          <Column className="thumb-column">
            <div className="pic">
              <img src={Lond} alt="Lond" />
            </div>
          </Column>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudiesThumb;
