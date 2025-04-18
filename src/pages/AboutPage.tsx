import React from "react";
import { useAuth } from "../contexts/AuthContext";
import HomeHeaderBar from "../components/HomeHeaderBar";
import LoginHeaderBar from "../components/LoginHeaderBar";

const AboutPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? <HomeHeaderBar /> : <LoginHeaderBar />}
      <br />
      <div className="container custom-width">
        <h1 style={{ textAlign: "center" }}>About Us</h1>
        <p style={{ textAlign: "center" }}>
          The TOTOrious team comprises Javier, Kok Wen, Mindy, Winni, and
          Yongyi, all of whom are students from the National Unviersity of
          Singapore. TOTOrious was created as part of our group project for the
          module CS5224 (Cloud Computing), and was born out of a member's love
          (or addiction?) for betting on Singapore TOTO. <br /> <br />
          We thank our professor, Dr Anandha Gopalan, for his wisdom and
          guidance throughout this project. Here's to hoping that TOTOrious will
          help in getting the TOTO odds to be in our favour!
        </p>
        <br />
        <h2 style={{ textAlign: "center" }}>
          National Council on Problem Gambling
        </h2>
        <p style={{ textAlign: "center" }}>
          Put yourself or someone you know on the road to recovery by calling
          the helpline at 1800-6-668-668, or using the {""}
          <a
            href="https://go.gov.sg/ncpg-webchat"
            target="_blank"
            rel="noopener noreferrer"
          >
            webchat service
          </a>
          {""} now. Visit the National Council on Problem Gambling's website{" "}
          {""}
          <a
            href="https://www.ncpg.org.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          {""} for more information.
        </p>
        <h5 style={{ textAlign: "center" }}>Help is always available.</h5>
      </div>
    </div>
  );
};

export default AboutPage;
