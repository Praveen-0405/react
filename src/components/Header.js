import { useState } from "react";
import { LOGO } from "../utils/restaurant.constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn, setBtn] = useState(false);

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <button onClick={() => setBtn(!btn)}>
              {btn ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
