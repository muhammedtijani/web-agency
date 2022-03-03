import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  .home-welcome-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 15px;
  }

  .title {
    margin-bottom: 28px;
    color: #000;
    opacity: 1;
    font-family: "CircularStd";
    font-size: 30px;
    font-weight: bold;
    margin: 0 0 10%;
    line-height: 54px;
  }
  .description-one {
    font-size: 22px;
    margin-bottom: 20px;
    line-height: 36px;
  }

  .btn-home-welcome {
    max-width: 300px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 640px) {
    .home-welcome-row {
      flex-wrap: nowrap;
      margin-bottom: 40px;
    }

    .home-welcome-column {
      flex: 0 0 50%;
      max-width: 50%;
      padding-left: 15px;
      padding-right: 15px;
    }
    .pic-wrap {
      flex: 0 0 50%;
      max-width: 50%;
      padding-left: 15px;
      padding-right: 15px;
    }

    .description-one {
      font-size: 22px;
      margin-bottom: 20px;
      line-height: 36px;
    }
  }
`;
