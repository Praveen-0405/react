import { LOGO } from "../utils/restaurant.constant";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
