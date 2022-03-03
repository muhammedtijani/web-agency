import { Wrapper } from "./HalfSection";
import { Column } from "../../globalStyles";

const HalfSection = ({ name, title }) => {
  return (
    <Wrapper>
      <div className="half-section-row">
        <Column>
          <div className="half-section-black">
            <h3>{name}</h3>
          </div>
        </Column>
        <Column>
          <div className="half-section-white">
            <h3>{title}</h3>
          </div>
        </Column>
      </div>
    </Wrapper>
  );
};

export default HalfSection;
