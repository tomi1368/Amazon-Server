import React,{useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faSearch , faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector} from "react-redux";
import "./NavBar.scss";
const NavBar = () => {
  const [search,setSearch] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const countProducts = useSelector((state)=>state.cart)
  console.log(countProducts)
  const searchProduct = ()=>{
    navigate(search.trim().length == 0 ? `/product/all` : `/product/${search}` )
  }
  return (
    <nav>
      <div className="nav-left">
        <div className="nav-left__logo">
          <Link to="/">
          <img
            src="/src/public/logo.png"
            alt=""
          />
          </Link>
        </div>
        <div className="nav-left__location">
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            className="nav-left__location__logo"
          />
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
          <input type="search" onChange={(e)=> setSearch(e.target.value)} value={search} placeholder="Search a product" />
        </div>
        <button type="submit" onClick={()=> searchProduct()} className="nav-middle__btn">
          <FontAwesomeIcon
            icon={faSearch}
            className="nav-left__location__logo"
          />
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
        <Link to="/login" className="nav-rigth__sign">
          <span>Hello, Sign in</span>
          <span className="important">Account & Lists</span>
        </Link>
        <Link to="/orders" className="nav-rigth__return">
          <span>Return</span>
          <span className="important">& Orders</span>
        </Link>
        <Link to="/checkout" className="nav-rigth__checkout">
          <div className="nav-rigth__checkout__count">
            <FontAwesomeIcon className="nav-rigth__checkout__count__cart" icon={faShoppingCart}/>
            <span>{countProducts.quantity}</span>
          </div>
          <span>Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
