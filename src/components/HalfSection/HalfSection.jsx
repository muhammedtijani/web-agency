import { Wrapper } from "./HalfSection";
import { Row, Column } from "../../globalStyles";

const HalfSection = (props) => {
  return (
    <Wrapper>
      <Row>
        <Column>
          <div className="half-section-black">
            <h3>{props.name}</h3>
          </div>
        </Column>
        <Column>
          <div className="half-section-white">
            <h3>{props.title}</h3>
          </div>
        </Column>
      </Row>
    </Wrapper>
  );
};

export default HalfSection;
