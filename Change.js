<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Background</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-size: cover;
            background-position: center;
            transition: background 0.5s;
        }
        h1 {
            color: white;
            text-shadow: 2px 2px 5px black;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Random Background Page</h1>
    <script>
        const images = [
            'url(https://source.unsplash.com/random/1920x1080?nature)',
            'url(https://source.unsplash.com/random/1920x1080?city)',
            'url(https://source.unsplash.com/random/1920x1080?abstract)',
            'url(https://source.unsplash.com/random/1920x1080?technology)',
            'url(https://source.unsplash.com/random/1920x1080?mountains)'
        ];
        
        document.body.style.backgroundImage = images[Math.floor(Math.random() * images.length)];
    </script>
</body>
</html>


import React from 'react';
import './App.css';

const App = () => {
    const images = [
        'https://source.unsplash.com/random/1920x1080?nature',
        'https://source.unsplash.com/random/1920x1080?city',
        'https://source.unsplash.com/random/1920x1080?abstract',
        'https://source.unsplash.com/random/1920x1080?technology',
        'https://source.unsplash.com/random/1920x1080?mountains'
    ];
    
    const randomImage = images[Math.floor(Math.random() * images.length)];

    return (
        <div className="app" style={{ 
            height: '100vh', 
            display: 'flex', 
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
        </div>
    );
};

export default App;

