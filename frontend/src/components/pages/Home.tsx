import React from "react";
import Headers from "../outlets/Header";
import Article from "../Article";
import "../styles/index.css";
import NukiComponent from "../NukiComponent";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";

const Home = () => {
  const token = "5IcSU6dV0e7-lhWL9N7LKw";
  return (
    <div className="home-container">
      <Headers />
      <h1 className="home-title">Explorez le monde</h1>
      <div className="first-zone-container">
        <Article
          imagePath={img1}
          title="Chungmulo, Seoul"
          buttonText="Réserver"
        />
        <Article
          imagePath={img2}
          title="Gangnam, Seoul"
          buttonText="Réserver"
        />
        <Article imagePath={img3} title="DDP, Seoul" buttonText="Réserver" />
      </div>
      <NukiComponent />
    </div>
  );
};

export default Home;
