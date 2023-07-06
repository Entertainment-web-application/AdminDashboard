import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

import { AuthContext } from "../../context/auth-context";
import { useAuth } from "../../hooks/auth-hook";

export default function Sidebar({ isSubscribed }) {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { user } = useAuth();

  const logout = () => {
    auth.logout();
    navigate("/");
  };

  const toggleSidebar = () => {
    const body = document?.querySelector("body");
    let sidebar = body?.querySelector(".sidebar");

    sidebar.classList.toggle("close");
  };

  return (
    <nav className="sidebar close">
      <header>
        <div className="image-text">
          <span className="image">
            {user?.role === "admin" && (
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_a91d7Z.json"
                background="transparent"
                speed="1"
                style={{ width: "100px", height: "100px" }}
                autoplay
              ></lottie-player>
            )}
            {user?.role !== "admin" && (
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_myor1trh.json"
                background="transparent"
                speed="1"
<<<<<<< HEAD
                style={{ width: "50px", height: "50px" }}
=======
                style={{ width: "100px", height: "100px" }}
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
                autoplay
              ></lottie-player>
            )}
          </span>

          <div className="text logo-text">
<<<<<<< HEAD
            <span className="name">ArtRealm</span>
            {/* <span className="profession">Arts Galley</span> */}
=======
            <span className="name">Good Food</span>
            <span className="profession">Saving food App</span>
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
          </div>
        </div>

        <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
      </header>

<<<<<<< HEAD
      <div className="menu-bar mt-4">
        <ul className="menu-links">
          <li className="nav-link">
            <Link to="/admin/dashboard">
=======
      <div className="menu-bar">
        <ul className="menu-links">
          <li className="nav-link">
            <Link to="/admin/dashboard/home">
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
              <i className="bx bx-home-alt icon"></i>
              <span className="text nav-text">Dashboard</span>
            </Link>
          </li>

          <li className="nav-link">
<<<<<<< HEAD
=======
            <Link to="/admin/dashboard/add-new-user">
              <i className="bx bx-plus-circle icon"></i>
              <span className="text nav-text">Add User</span>
            </Link>
          </li>

          <li className="nav-link">
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
            <Link to="/admin/dashboard/add-new-admin">
              <i className="bx bx-user-plus icon"></i>
              <span className="text nav-text">Add New Admin</span>
            </Link>
          </li>

          <li className="nav-link">
<<<<<<< HEAD
=======
            <Link to="/admin/dashboard/deleted-accounts">
              <i className="bx bx-list-ul icon"></i>
              <span className="text nav-text">Deleted Accounts</span>
            </Link>
          </li>

          <li className="nav-link">
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
            <Link to="/admin/dashboard/edit-content">
              <i className="bx bx-edit icon"></i>
              <span className="text nav-text">Edit Content</span>
            </Link>
          </li>

          <li className="nav-link">
<<<<<<< HEAD
            <Link to="/admin/dashboard/posts">
              <i className="bx bx-edit icon"></i>
              <span className="text nav-text">All Posts</span>
=======
            <Link to="/admin/dashboard/all-services">
              <i className="bx bx-shopping-bag icon"></i>
              <span className="text nav-text">All Services</span>
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
            </Link>
          </li>

          <li className="nav-link">
            <Link to="/admin/dashboard/users-messages">
              <i className="bx bx-chat icon"></i>
              <span className="text nav-text">Users Messages</span>
            </Link>
          </li>
        </ul>

        <div className="bottom-content">
          <li className="" onClick={logout}>
            <i className="bx bx-log-out icon"></i>
            <span className="text nav-text">Logout</span>
          </li>
<<<<<<< HEAD
          <li></li>
          {/* <li className="mode">
=======

          <li className="mode">
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
            <div className="sun-moon">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">Dark mode</span>

            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
<<<<<<< HEAD
          </li> */}
=======
          </li>
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
        </div>
      </div>
    </nav>
  );
}
