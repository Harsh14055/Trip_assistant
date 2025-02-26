import { useNavigate } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#45526e",
          scrollBehavior: "smooth",
          zIndex: "20",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="src/images/logo1.jpg"
              alt="logo"
              style={{
                width: "50px",
                height: "50px",
                padding: "0px",
                margin: "0px",
                borderRadius: "50%",
              }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/places">
                  Places
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/find-friends">
                  Find Friends
                </a>
              </li>
            </ul>

            {/* Profile Dropdown */}
            <div className="dropdown">
              <button
                className="btn border rounded-pill d-flex align-items-center p-2 shadow-sm"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaBars className="text-secondary me-2" />
                <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center profile-icon">
                  <FaUser className="text-white" />
                </div>
              </button>

              {/* Dropdown Menu */}
              <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                <li>
                  <button
                    className="dropdown-item fw-bold"
                    onClick={() => navigate("/auth", { state: { isLogin: false } })}
                  >
                    Sign up
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => navigate("/auth", { state: { isLogin: true } })}
                  >
                    Log in
                  </button>
                </li>
                <hr />
                <li>
                  <a className="dropdown-item" href="#">
                    Help Centre
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
