import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.tsx";

import LoginHeaderBar from "../components/LoginHeaderBar";
import Carousel from "../components/Carousel";
import LoginButton from "../components/LoginButton";
import SignUpButton from "../components/SignUpButton";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const success = login(username, password);
    if (success) {
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <LoginHeaderBar />
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Welcome to TOTOrious!</h1>
      <h3 style={{ textAlign: "center" }}>
        Don't know what numbers to buy? Fret not!
      </h3>
      <br />
      <br />
      <Carousel />
      <br />
      <br />
      <br />
      <LoginButton />
      <br />
      <SignUpButton />
      <br />
    </div>
  );
}

export default LoginPage;
