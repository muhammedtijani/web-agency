import styled from "styled-components";

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  padding: 0;
  transition: all ease-in-out 200ms;
  z-index: 99;

  .nav-center {
    position: relative;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .toggle-btn {
    z-index: 1;
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
      position: relative;
      padding-left: 5%;
      padding-right: 5%;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .toggle-btn {
      display: none;
    }
    .contact-btn {
      display: inline-block;
    }

    .links-wrapper {
      margin-left: auto;
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
      position: relative;
      margin-right: 25px;
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
