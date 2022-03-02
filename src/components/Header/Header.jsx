import { Navbar, Sidebar, Submenu } from "../../components";

const Header = () => {
  return (
    <div style={{ display: "block" }}>
      <Navbar />
      <Sidebar />
      <Submenu />
    </div>
  );
};

export default Header;
