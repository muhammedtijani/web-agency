import { Wrapper } from "./HomeServicesStyles";
import { Container, Row, Column, Button } from "../../globalStyles";
import { servicesData } from "../../utils/servicesData";

const HomeService = () => {
  return (
    <Wrapper>
      <Container className="service-container">
        <Row className="row-center">
          {servicesData.map((item, index) => {
            const { icon, title, desc, link } = item;
            return (
              <Column className="column-box-item" key={index}>
                <div className="card">
                  <div className="icon">{icon}</div>
                  <h4 className="title">{title}</h4>
                  <div className="flexible">
                    <p>{desc}</p>
                  </div>
                  <div className="service-btn">
                    <a href="https://www.unifiedinfotech.net/services/web-development-company/">
                      {link}
                    </a>
                  </div>
                </div>
              </Column>
            );
          })}
        </Row>
        <Button className="btn">
          <span>CONTACT US</span>
        </Button>
      </Container>
    </Wrapper>
  );
};

export default HomeService;
