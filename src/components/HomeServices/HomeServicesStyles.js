import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;

  .service-container {
    padding-top: 100px;
    padding-bottom: 100px;
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
    padding-right: 40px;
    padding-left: 40px;
    margin-bottom: 50px;
  }

  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 40px 40px 90px 40px;
    background-color: #fff;
    box-shadow: 0 0 15px rgb(0 0 0 / 2%);
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    width: 100%;
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
`;
