import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.tsx";

function LoginButton() {
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const success = login(username, password);
    if (success) {
      setErrorMessage("");
      navigate("/home");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <button
        className="btn login-btn btn-lg"
        type="button"
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        {showForm ? "Close login" : "Login"}
      </button>

      {showForm && (
        <div className="login-form mt-3">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn submit-btn">
              Submit
            </button>
          </form>
          {errorMessage && (
            <div className="text-danger mt-2">{errorMessage}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default LoginButton;
