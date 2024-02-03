import cartimg from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import iconMenu from "../assets/images/icon-menu.svg";

function Header({ cart, handleOpen2, handleSidebar }) {
  return (
    <nav>
      <div className="left-menu">
        <img
          src={iconMenu}
          alt=""
          className="iconmenu"
          onClick={handleSidebar}
        />

        <h1>sneakers</h1>
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="right-menu">
        <div onClick={handleOpen2}>
          <img src={cartimg} alt="cart" className="cart" />
          <p id="quantity">{cart}</p>
        </div>
        <div>
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
