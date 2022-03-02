import logo from "../../assets/images/logo-white.png";
import { Wrapper } from "../../assets/wrappers/Logo";

const Logo = () => {
  return (
    <Wrapper href="/">
      <img src={logo} alt="colabo" className="logo" />
    </Wrapper>
  );
};

export default Logo;
