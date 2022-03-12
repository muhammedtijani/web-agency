import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  .footer-address-right {
    background: #000;
    flex: 42%;
    max-width: 42%;
    padding: 5% 5%;
  }
  .footer-address-left {
    flex: 58%;
    max-width: 58%;
  }
  .footer-address-right-items {
    .section-container {
      text-align: left;
      color: white;
      h2 {
        margin: 0;
      }
    }
  }
  .footer-image-holder {
    max-width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: bottom;
    }
  }
`;
