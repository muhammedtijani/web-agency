import styled from "styled-components";

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
  z-index: 2;

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    display: none;
  }
  .contact-btn {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 220px;
  }

  /* nav media query */

  @media screen and (min-width: 990px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .toggle-btn {
      display: none;
    }
    .contact-btn {
      display: inline-block;
    }
    .nav-links {
      display: block;
      justify-self: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      text-align: center;
      height: 100%;
      display: grid;
      align-items: center;
    }
    .nav-links li {
      height: 100%;
    }
    .link-btn {
      height: 100%;
      background: transparent;
      border-color: transparent;
      font-size: 1.1rem;
      color: white;
      text-transform: capitalize;
      letter-spacing: 1px;
      width: 10rem;
    }
    .how-we-work-btn {
      height: 100%;
      background: transparent;
      border-color: transparent;
      font-size: 1.1rem;
      color: white;
      text-transform: capitalize;
      letter-spacing: 1px;
      width: 10rem;
      cursor: pointer;
    }
  }
`;

export default Wrapper;
