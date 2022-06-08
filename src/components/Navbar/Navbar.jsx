import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const {cart,getData,length}=useContext(CartContext);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    // login screen
    if (isAuth) {
      logout();
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar">
      
      <Link data-cy="navbar-home-link" to="">Home</Link>
     
      <Link to="/login">Login</Link> 

      <Link to ="/product">Product</Link>
      
      <Link to="/products">Products</Link>

    
      <span data-cy="navbar-cart-items-count">
      {length}
      </span>
      <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
        {/* Spacer */}
        {isAuth ? "Logout" : "Login"}
 
        { } </button>
    </div>
  );
};

export default Navbar;
