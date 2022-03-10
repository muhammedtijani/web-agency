import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    max-width: 1450px;
    padding: 90px 20px 85px 20px;
    display: flex;
    flex-direction: column;
  }
  .expertise-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: content;
    margin-right: -17px;
    margin-left: -17px;
  }
  .expertise-content {
    display: flex;
    flex-direction: column;
    padding: 0 17px;
  }
  .expertise-image {
    margin-bottom: 25px;
    max-width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  }
  .expertise-title {
    font-family: "CircularStd";
    margin-top: 0;
    margin-bottom: 22px;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-transform: capitalize;
  }
`;
