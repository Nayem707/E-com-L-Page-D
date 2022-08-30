import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCartPlus, FaUserPlus, FaSearch } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
const activCss = ({ isActive }) => {
  return {
    display: "block",
    color: isActive ? "red" : "",
  };
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#a">
          BD FOOD
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav text-center mb-2 mb-lg-0 m-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" style={activCss} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={activCss} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={activCss} to="/invoices">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                <span className="navbar-text position-relative ">
                  <FaCartPlus
                    style={{ fontSize: "25px", color: "rgb(82, 124, 4)" }}
                  />
                  <span className="position-absolute top-1 translate-middle badge rounded-pill bg-danger">
                    0<span className="visually-hidden">unread messages</span>
                  </span>
                </span>
              </NavLink>
            </li>
          </ul>
          <form className="d-flex m-auto justify-content-center" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success m-auto" type="submit">
              <FaSearch />
            </button>
          </form>

          <ul className="m-lg-auto nav justify-content-end">
            <NavLink className="nav-link" to="/">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FaUserPlus style={{ fontSize: "25px", color: "white" }}>
                    Login
                  </FaUserPlus>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Login</Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink className="nav-link" style={activCss} to="/">
                      Home
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </NavLink>
          </ul>
        </div>
      </div>

      <Outlet />
    </nav>
  );
};

export default Navbar;
