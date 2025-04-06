import LoginHeaderBar from "../components/LoginHeaderBar";
import Carousel from "../components/Carousel";
import LoginButton from "../components/LoginButton";
import SignUpButton from "../components/SignUpButton";

function LoginPage() {
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
