import "./Topbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Topbar = (props) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="nav">
      <div className="leftside">
        <div className="img-container">
          <img
            className="img"
            src="https://werstupid.netlify.app/images/company_logo.png"
          />
        </div>
        <ul className="links" id={menu ? "hidden" : ""}>
          <li>blog</li>
          <li>about</li>
          <li>online training</li>
          <li>shop</li>
          <li>company</li>
          <li>contact us</li>

          <a className="btn">
            <span>login</span>
          </a>
        </ul>
        <button className="menu-icon" onClick={() => setMenu(!menu)}>
          {menu ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Topbar;
