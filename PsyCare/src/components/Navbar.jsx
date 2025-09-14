import { NavLink } from "react-router-dom";
import {
  FaBrain,
  FaComments,
  FaCalendarAlt,
  FaBookOpen,
  FaUsers,
  FaUserCheck,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const violet = "#a682e3";
const grey = "#54575bff";

export default function Navbar() {
  // styles for active link
  const activeStyle = {
    color: violet,
    fontWeight: "bold",
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top py-1 px-5"
      style={{
        backgroundColor: "#ffffffff",
        borderBottom: "1px solid #d8d6dfdc",
        zIndex: "1000",
      }}
    >
      <div className="container">
        {/* Logo + Brand */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <div
            style={{
              backgroundColor: violet,
              borderRadius: "10px",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "6px",
            }}
          >
            <FaBrain size={30} color="#fff" />
          </div>
          <div style={{ lineHeight: "1.1" }}>
            <div
              className="fw-bolder"
              style={{ fontSize: "1.85rem", color: "black" }}
            >
              PsyCare
            </div>
            <small
              style={{ color: grey, fontSize: "0.8rem", fontWeight: "bold" }}
            >
              by NeuroNova
            </small>
          </div>
        </NavLink>

        {/* Toggle button for mobile/tablet */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links collapse */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto small gap-3">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link d-flex align-items-center"
                style={({ isActive }) =>
                  isActive
                    ? { ...activeStyle, fontSize: "0.9rem" }
                    : { color: grey, fontSize: "0.9rem", fontWeight: "bold" }
                }
              >
                <FaBrain className="me-1" color={violet} size={14} />
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/streak"
                className="nav-link d-flex align-items-center"
                style={({ isActive }) =>
                  isActive
                    ? { ...activeStyle, fontSize: "0.9rem" }
                    : { color: grey, fontSize: "0.9rem", fontWeight: "bold" }
                }
              >
                <FaBrain className="me-1" color={violet} size={14} />
                Streak Analysis
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/chat"
                className="nav-link d-flex align-items-center"
                style={({ isActive }) =>
                  isActive
                    ? { ...activeStyle, fontSize: "0.9rem" }
                    : { color: grey, fontSize: "0.9rem", fontWeight: "bold" }
                }
              >
                <FaComments className="me-1" color={violet} size={14} />
                AI Chat
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/counselor"
                className="nav-link d-flex align-items-center"
                style={({ isActive }) =>
                  isActive
                    ? { ...activeStyle, fontSize: "0.9rem" }
                    : { color: grey, fontSize: "0.9rem", fontWeight: "bold" }
                }
              >
                <FaCalendarAlt className="me-1" color={violet} size={14} />
                Book Counsellor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resources"
                className="nav-link d-flex align-items-center"
                style={({ isActive }) =>
                  isActive
                    ? { ...activeStyle, fontSize: "0.9rem" }
                    : { color: grey, fontSize: "0.9rem", fontWeight: "bold" }
                }
              >
                <FaBookOpen className="me-1" color={violet} size={14} />
                Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/community"
                className="nav-link d-flex align-items-center"
                style={({ isActive }) =>
                  isActive
                    ? { ...activeStyle, fontSize: "0.9rem" }
                    : { color: grey, fontSize: "0.9rem", fontWeight: "bold" }
                }
              >
                <FaUsers className="me-1" color={violet} size={14} />
                Community
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/appointments"
                className="nav-link d-flex align-items-center"
                style={({ isActive }) =>
                  isActive
                    ? { ...activeStyle, fontSize: "0.9rem" }
                    : { color: grey, fontSize: "0.9rem", fontWeight: "bold" }
                }
              >
                <FaUserCheck className="me-1" color={violet} size={14} />
                Appointments
              </NavLink>
            </li>
          </ul>

          {/* Login & Sign Up */}
          <div className="d-flex align-items-center gap-3">
            <NavLink
              to="/login"
              className="d-flex align-items-center text-decoration-none"
              style={({ isActive }) =>
                isActive
                  ? { ...activeStyle, fontSize: "0.9rem" }
                  : { color: grey, fontSize: "0.9rem", fontWeight: "bold" }
              }
            >
              <FaSignInAlt className="me-1" color={violet} size={14} />
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="btn d-flex align-items-center py-1 px-2"
              style={{
                backgroundColor: violet,
                color: "#fff",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              <FaUserPlus className="me-1" color="#fff" size={14} />
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
