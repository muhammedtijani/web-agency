import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
  .title {
    margin-bottom: 28px;
    color: #000;
    opacity: 1;
    font-family: "CircularStd";
    font-size: 42px;
    font-weight: bold;
    margin: 0 0 10%;
    line-height: 54px;
  }
  .description-one {
    font-size: 22px;
    margin-bottom: 20px;
    line-height: 36px;
  }
  .description-two {
  }
  .btn-home-welcome {
    max-width: 300px;
    margin-bottom: 40px;
  }
  .pic-wrap {
    margin-bottom: 40px;
  }
`;
