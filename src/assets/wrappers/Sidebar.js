import styled from "styled-components";

const Wrapper = styled.section`
  .sidebar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    visibility: hidden;
    z-index: -1;
    transition: var(--transition);
    transform: scale(0);
    background: rgba(0, 0, 0, 0.5);
  }
  .sidebar-wrapper.show {
    visibility: visible;
    z-index: 5;
    transform: scale(1.03);
  }
  .sidebar {
    width: 95vw;
    height: 95vh;
    max-width: 80%;
    background: var(--white);
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
    position: relative;
    padding: 4rem 2rem;
    z-index: 2;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-grey-5);
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem;
    cursor: pointer;
  }
  .sidebar article {
    margin-bottom: 2rem;
  }
  .sidebar-sublinks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.25rem;
  }
  .sidebar-sublinks a {
    display: block;
    color: var(--clr-grey-1);
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  .sidebar-sublinks svg {
    color: var(--clr-grey-5);
    margin-right: 1rem;
  }

  @media screen and (min-width: 990px) {
    .sidebar-wrapper {
      display: none;
    }
  }
`;

export default Wrapper;
