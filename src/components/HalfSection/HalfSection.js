import styled from "styled-components";

export const Wrapper = styled.section`
  display: block;
  h3 {
    font-family: "CircularStd";
    font-size: 60px;
    font-weight: bold;
    line-height: 1.31;
    text-align: right;
    margin: 0;
  }

  .half-section-black {
    color: #fff;
    background-color: #000;
    padding: 2% 15px 2% 10px;
  }

  .half-section-white {
    color: #000;
    background-color: #fff;
    padding: 2% 15px 2% 10px;
    h3 {
      text-align: left !important;
    }
  }
`;
