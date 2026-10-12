import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";
export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="4winds"/>
        </Link>
      </div>
    </header>
  )
}