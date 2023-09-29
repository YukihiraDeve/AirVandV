import logo from "../assets/logo.png";
import Metamask from "./Metamask";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start flex">
        <p className="btn btn-ghost normal-case text-xl">AirVandV</p>
        <img src={logo} width="28" alt="logo" />
      </div>
      <div className="navbar-end">
        <Metamask />
      </div>
    </div>
  );
}

export default Navbar;
