import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;

  .service-container {
    padding-top: 100px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .row-center {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .column-box-item {
    display: flex;
    width: 100%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 15px;
    align-self: stretch;
  }

  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 40px 40px 90px 40px;
    background-color: #fff;
    box-shadow: 0 0 15px rgb(0 0 0 / 2%);
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;

    width: 100%;
    p {
      font-size: 16px;
    }
  }

  .icon {
    position: relative;
    display: inline-block;
    vertical-align: top;
    max-width: 40px;
    height: 40px;
  }
  .title {
    margin-top: 0;
    margin-bottom: 30px;
    font-family: "CircularStd";
    font-weight: 400;
    font-size: 28px;
    line-height: 1.4;
    padding-right: 100px;
  }
  .service-btn {
    position: absolute;
    right: 40px;
    bottom: 40px;
    left: 40px;
  }
  .btn {
    width: 100%;
    max-width: 200px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 780px) {
    .service-container {
      max-width: 1140px;
      padding-bottom: 100px;
    }
    .card {
      padding: 40px 40px 90px 40px;
    }

    .column-box-item {
      padding-right: 25px;
      padding-left: 25px;
      margin-bottom: 50px;
    }
  }
`;
