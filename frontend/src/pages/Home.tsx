import React from 'react';
import Headers from '../components/Header';
import Article from '../components/Article';
import '../styles/index.css';

import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';

const Home = () => {
    return (
        <div className="home-container">
          <Headers />  
          <h1 className="home-title">Explorez le monde</h1>
          <div className="first-zone-container">
            <Article imagePath={img1} title="Chungmulo, Seoul" buttonText="Réserver" />
            <Article imagePath={img2} title="Gangnam, Seoul" buttonText="Réserver" />
            <Article imagePath={img3} title="DDP, Seoul" buttonText="Réserver" />

        </div>
        </div>
    );
};

export default Home;