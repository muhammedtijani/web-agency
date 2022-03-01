import styled from "styled-components";

export const Wrapper = styled.section`
  .wrapper {
    width: 90vw;
    margin: 5rem auto;
    max-width: var(--max-width);

    /* &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      content: "";
      width: calc(50% + 340px);
    } */

    .container {
      width: 80vw;
      margin: 0 auto;
      max-width: var(--max-width);

      img {
        max-width: 40%;
      }
    }
  }
  .black-background {
    width: 100%;
  }
`;
