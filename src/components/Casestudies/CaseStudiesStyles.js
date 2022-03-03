import styled from "styled-components";

export const Wrapper = styled.section`
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .thumb-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .thumb-container {
    padding-top: 0;
    padding-bottom: 0;
  }
  .case-studies-thumb {
    display: flex;
    flex-direction: row;
  }
  .thumb-column {
    padding-left: 22px;
    padding-right: 22px;
    width: 271.8px;
  }
  img {
    max-width: 100%;
  }
  .pic {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;
export const WrapperCaseStudies = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: -2px;
  background-color: #f2fbfe;

  .case-studies-container {
    max-width: 1450px;
    padding-top: 40px;
    padding-bottom: 25px;
    padding-right: 20px;
    padding-left: 20px;
  }
`;
