import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/userRedux";
import "./NavBar.scss";
import { ordersEmpty } from "../../redux/orderRedux";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countProducts = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const searchProduct = () => {
    navigate(search.trim().length == 0 ? `/product/all` : `/product/${search}`);
  };
  return (
    <nav>
      <div className="nav-left">
        <div className="nav-left__logo">
          <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" alt="" />
          </Link>
        </div>
        <div className="nav-left__location">
        🗺️
          <div className="nav-left__location__country">
            <span>Deliver to</span>
            <span>Argentina</span>
          </div>
        </div>
      </div>
      <div className="nav-middle">
        <div className="nav-middle__select">
          <select name="country" id="country">
            <option value="All">All</option>
          </select>
        </div>
        <div className="nav-middle__search">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search a product"
          />
        </div>
        <button
          type="submit"
          onClick={() => searchProduct()}
          className="nav-middle__btn"
        >
         🔎
        </button>
      </div>
      <div className="nav-rigth">
        <div className="nav-rigth__country">
          <img
            src="https://icon-library.com/images/usa-icon-png/usa-icon-png-18.jpg"
            alt=""
          />
          <span>↓</span>
        </div>
        {user.currentUser ? (
          <button
            onClick={() => {
              dispatch(logOut());
              dispatch(ordersEmpty());
            }}
            className="nav-rigth__sign"
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span>Hello {user.currentUser.user.username}</span>
            <span className="important">LogOut</span>
          </button>
        ) : (
          <Link to="/login" className="nav-rigth__sign">
            <span>Hello, Guest, Sign in</span>
            <span className="important">Account & Lists</span>
          </Link>
        )}

        <Link to="/orders" className="nav-rigth__return">
          <span>Return</span>
          <span className="important">& Orders</span>
        </Link>
        <Link to="/checkout" className="nav-rigth__checkout">
          <div className="nav-rigth__checkout__count">
            🛒
            <span>{countProducts.quantity}</span>
          </div>
          <span>Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
