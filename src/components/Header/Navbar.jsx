import Wrapper from "../../assets/wrappers/Navbar";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context/appContext";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <Wrapper onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <div className="links-wrapper">
          <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Services
              </button>
            </li>
            <li>
              <button className="how-we-work-btn">How we work</button>
            </li>

            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Portfolio
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                Company
              </button>
            </li>
          </ul>
        </div>
        <button className="btn-white contact-btn">
          <span>CONTACT US</span>
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
