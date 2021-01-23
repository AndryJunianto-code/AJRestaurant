import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaAlignRight, FaCartPlus } from "react-icons/fa";
import Auth from "../firebase/Auth";
import { projectAuth, projectFirestore } from "../config";
import { useGlobalContext } from "../context";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const { loggedIn, setLoggedIn, setUserInfo } = useGlobalContext();

  useEffect(() => {
    projectAuth.onAuthStateChanged((user) => {
      if (user) {
        projectFirestore.collection("users").onSnapshot(
          (snapshot) => {
            setLoggedIn(true);
            setUserInfo(user.email);
          },
          (err) => console.log(err)
        );
      } else {
        setLoggedIn(false);
        setUserInfo("");
      }
    });
  }, []);

  const handleToggle = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav>
      <div className="nav-header">
        <div className="nav-title">
          <Link className="nav-links" to="/">
            <img src={Logo} alt="AJ Logo" className="nav-img" />
          </Link>
          <h1>AJ</h1>
          <button className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={openNav ? "nav-pages show-nav" : "nav-pages"}>
          {loggedIn && (
            <>
              <li>
                <Link className="nav-links" to="/">
                  <h3>Home</h3>
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/about">
                  <h3>About</h3>
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/about">
                  <h3>About</h3>
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/menu">
                  <h3>Menu</h3>
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/user">
                  <h3>User</h3>
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/cart">
                  <FaCartPlus className="cart-icon" />
                </Link>
              </li>
            </>
          )}
          <li>
            <Auth loggedIn={loggedIn} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
