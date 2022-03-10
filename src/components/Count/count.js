import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 25px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    .home-count-item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 0;
      flex-shrink: 0;
      margin-bottom: 25px;

      border-right: 1px solid rgba(0, 0, 0, 0.05);
      &:last-child,
      &:only-child {
        border-right: none;
      }

      flex-basis: 50%;
      max-width: 50%;

      .holder {
        padding-right: 25px;
        padding-left: 25px;
        .number {
          margin-bottom: 3px;
          font-weight: bold;
          font-size: 36px;
          color: #000;
          line-height: 0.9;
        }
        p {
          font-size: 18px;
        }
      }
    }

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
`;
export default Wrapper;
