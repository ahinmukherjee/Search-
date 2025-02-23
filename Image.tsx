import React, { useState } from 'react';
import './App.css';

const App = () => {
    const images = [
        'https://source.unsplash.com/random/1920x1080?nature',
        'https://source.unsplash.com/random/1920x1080?city',
        'https://source.unsplash.com/random/1920x1080?abstract',
        'https://source.unsplash.com/random/1920x1080?technology',
        'https://source.unsplash.com/random/1920x1080?mountains'
    ];

    const [randomImage, setRandomImage] = useState(images[Math.floor(Math.random() * images.length)]);

    const changeBackground = () => {
        setRandomImage(images[Math.floor(Math.random() * images.length)]);
    };

    return (
        <div className="app" style={{ 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundImage: `url(${randomImage})`,
            transition: 'background 0.5s' 
        }}>
            <h1 style={{ color: 'white', textShadow: '2px 2px 5px black' }}>
                Welcome to My Random Background Page
            </h1>
            <button 
                onClick={changeBackground} 
                style={{ 
                    marginTop: '20px', 
                    padding: '10px 20px', 
                    fontSize: '16px', 
                    cursor: 'pointer',
                    background: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px'
                }}
            >
                Change Background
            </button>
        </div>
    );
};

export default App;
