import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import TemporaryDrawer from "./drawer";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1 className="logo" onClick={()=> navigate("/")}>
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <NavLink to="/">
          <p className="link">Home</p>
        </NavLink>
        <NavLink to="/compare">
          <p className="link">Compare</p>
        </NavLink>
        <NavLink to="/watchlist">
          <p className="link">Watchlist</p>
        </NavLink>
        <NavLink to="/dashboard">
          <Button text={"Dashboard"} onClick={()=>{}}/>
        </NavLink>
      </div>
      <div className="mobile-drawer">
          <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
