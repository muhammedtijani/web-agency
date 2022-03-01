import { Wrapper } from "./HomeWelcome.js";
import { Button, Column, Container, Row } from "../../globalStyles";
import homeWelcomePic from "../../assets/images/New-Home-Welcome-Image.jpg";

const HomeWelcome = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Column>
            <div className="desc-wrap">
              <h1 className="title">
                How we stand out - We are proactive Expert
              </h1>
              <p className="description-one">
                We proactively consult, design, develop & scale robust web,
                mobile & custom software solutions, that fuel innovation &
                deliver digital success!
              </p>
              <p className="description-two">
                At Unified we believe that every project is an important
                milestone in our journey. So we position ourselves as a boutique
                digital agency, custom tailoring impactful digital solutions
                with industry best practices across the board, for Fortune
                500's, SMEs, and Start-up’s around the globe.
              </p>
            </div>
            <Button className="btn-home-welcome">
              <span>REQUEST CONSULTATION</span>
            </Button>
          </Column>
          <Column>
            <div className="pic-wrap">
              <img src={homeWelcomePic} alt="homepic" />
            </div>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default HomeWelcome;