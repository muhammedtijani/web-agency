import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 108px;
  position: relative;

  &:before {
    background-color: #000;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    content: "";
    width: calc(50% + 340px);
  }
  .container {
    width: 100%;
    padding-top: 50px;
    padding-right: 20px;
    padding-bottom: 0;
    padding-left: 20px;
    margin-right: auto;
    margin-left: auto;
  }
  .tabs-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .bloc-tabs {
    position: relative;

    display: flex;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    margin-bottom: 50px;
    border: none;
  }
  .tabs {
    width: 100%;
    padding: 12px 15px;
    display: block;
    background-color: white;
    border: none;
    border-left: 1px solid #e6e6e6;
    font-size: 14px;
    font-weight: 500;
    line-height: 28px;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .active-tabs {
    position: relative;
    border-bottom: 1px solid transparent;
  }

  .active-tabs::before {
    transform: scaleY(1);
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
    z-index: 0;
    content: " ";
    width: 1px;
    background-color: #222;
  }

  button {
    border: none;
  }
  .content-tabs {
    width: 100%;
  }
  .content-tabs-image {
    width: 100%;
    padding: 0 25px;
    margin-bottom: 50px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .content-tabs-item {
    width: 100%;
    padding: 0 25px;
    margin-bottom: 50px;
  }
  .content {
    display: none;
    color: white;
  }
  .content h2 {
    text-transform: uppercase;
  }

  .active-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 769px) {
    .container {
      max-width: 1220px;
      padding-top: 50px;
      padding-right: 20px;
      padding-bottom: 0;
      padding-left: 20px;
      margin-right: auto;
      margin-left: auto;
    }

    .tabs-wrapper {
      display: flex;
      flex-direction: row;
      margin-left: 0 !important;
      margin-right: 0 !important;
      padding: 0;
      align-items: center;
      justify-content: center;
      max-width: 100%;
    }

    .bloc-tabs {
      position: relative;
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      padding-left: 0;
      padding-right: 0;
      max-width: 25%;
      margin-bottom: 50px;
      border: none;
    }

    .content-tabs {
      flex-grow: 1;
      max-width: 75%;
    }

    .tabs {
      width: 100%;
      padding: 18px 25px 18px 25px;

      background-color: transparent;
    }
    .active-content {
      display: flex;
      flex-direction: row;
    }

    .content-tabs-image {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .content-tabs-item {
      flex: 0 0 50%;
      max-width: 50%;
      padding: 0 25px;
    }
  }
`;
