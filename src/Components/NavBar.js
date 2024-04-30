import React from "react";
import "./NavBar.css";
import ShoppingBasketIcon from "../../src/assets/shopping-basket.png";
import Logo from "../../src/assets/Riget zoo adventure.png";

const NavBar = ({ isLoggedIn }) => {
  return (
    <div className="NavigationBar">
      <div className="NavigationBar1"></div>
      <div>
        <a className="Logo" href="/">
          <img src={Logo} className="logo" alt="logo" />
        </a>
        <a href="/Basket">
          <button className="ShoppingBasketIcon">
            <img className="ShoppingBasketIconImg" src={ShoppingBasketIcon} alt="shopping basket" />
          </button>
        </a>
      </div>
      <div className="NavButtons">
        <a href="/AboutPage">
          <button>About us</button>
        </a>
        <a href="/Education">
          <button>Education </button>
        </a>
        <div className="Navbutton-right">
          <a href={isLoggedIn ? "/Profile" : "/Login"}>
            <button>{isLoggedIn ? "Profile" : "Login"}</button>
          </a>
          <a href="/Hotel">
            <button>book a Hotel</button>
          </a>
          <a href="/ZooTickets">
            <button>Zoo tickets</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
