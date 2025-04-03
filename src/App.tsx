import HeaderBar from "./components/HeaderBar";
import Carousel from "./components/Carousel";
import LoginButton from "./components/LoginButton";
import SignUpButton from "./components/SignUpButton";

function App() {
  return (
    <div>
      <HeaderBar />
      <br></br>
      <br></br>
      <br></br>
      <h1 style={{ textAlign: "center" }}>Welcome to TOTOrious!</h1>
      <h3 style={{ textAlign: "center" }}>
        Don't know what numbers to buy? Fret not!
      </h3>
      <br></br>
      <br></br>
      <br></br>
      <Carousel />
      <br></br>
      <br></br>
      <LoginButton />
      <br></br>
      <SignUpButton />
      <br></br>
    </div>
  );
}

export default App;
