import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  .container {
    width: 1450px;
    display: flex;
    @media screen and (max-width: 640px) {
      width: 100%;
      flex-wrap: wrap;
    }
  }
  .home-count-item {
    flex: 0 0 25%;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 25%;
    max-width: 25%;
    margin-bottom: 25px;
    padding-right: 25px;
    padding-left: 25px;
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    &:last-child,
    &:only-child {
      border-right: none;
    }
    .holder {
      .number {
        margin-bottom: 3px;
        font-weight: bold;
        font-size: 36px;
        color: #000;
        line-height: 0.9;
        @media screen and (max-width: 650px) {
          font-size: 24px;
        }
      }
    }
    @media screen and (max-width: 650px) {
      flex-basis: 50%;
      max-width: 50%;
      p {
        font-size: 14px;
      }
    }
  }
`;
export default Wrapper;
