import React from "react";
import { Link } from "react-router-dom";
import "./SidePanel.css";

const sidePanel = (props) => {
  let panelClass = "side-panel";
  if (props.show) {
    panelClass = "side-panel open";
  }
  return (
    <nav className={panelClass}>
      <ul className="side-list">
        <li className="side-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="side-item">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li className="side-item">
          <Link to="/return" className="nav-link">
            Returns
          </Link>
        </li>
        <li className="cart-item">
          <Link to="/ShoppingCart" className="nav-link">
            My Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sidePanel;

