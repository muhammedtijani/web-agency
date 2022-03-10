import { Wrapper } from "./SectionTitleStyles";

const SectionTitle = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-container">
        <h2 className="title">{title}</h2>
      </div>
    </Wrapper>
  );
};

export default SectionTitle;
