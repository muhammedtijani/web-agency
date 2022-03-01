import styled from "styled-components";

const Wrapper = styled.section`
  .submenu {
    background: var(--white);
    box-shadow: var(--dark-shadow);
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: none;
    padding: 2rem;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .submenu::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid var(--white);
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .submenu.show {
    display: block;
  }

  .submenu-center {
    display: grid;
    gap: 0.25rem 2rem;
  }
  .col-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  .col-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .col-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  .submenu h4 {
    margin-bottom: 1.5rem;
  }
  .submenu-center a {
    width: 10rem;
    display: block;
    color: var(--clr-grey-1);
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
`;
export default Wrapper;
