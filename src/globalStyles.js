import styled, { createGlobalStyle } from "styled-components";

const GlobalSyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "CircularStd";
}
`;
export const Container = styled.div`
  max-width: 1450px;
  padding-top: 100px;
  padding-bottom: 50px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (min-width: 640px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-top: 35px;
  margin-right: 15px;
  padding: 13px 33px 14px 33px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 0;
  text-transform: uppercase;
  color: #000;
  --webkit-transform: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  box-shadow: initial;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    content: " ";
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    color: #fff;

    &:before {
      top: auto;
      bottom: 0;
      height: 100%;
    }
  }

  > span {
    position: relative;
  }
  &.alt {
    background-color: #000;
    color: #fff;
    &:before {
      background-color: #fff;
    }
    &:hover {
      color: #000;
    }
  }
`;

export default GlobalSyle;
