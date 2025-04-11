import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function HomeHeaderBar() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#DCDEE6" }}
    >
      <div className="container-fluid">
        <span className="navbar-brand">TOTOrious</span>
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
          <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="btn nav-link"
            onClick={handleLogout}
            style={{ color: "#B22222" }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default HomeHeaderBar;
