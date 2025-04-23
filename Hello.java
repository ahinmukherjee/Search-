import React from 'react';
import "../Styles/home.css";
import blackcar from "../images/blackcar.png";
import boat from "../images/boat.png";
import butterfly from "../images/butterfly.png";
import cars from "../images/cars.png";

const Home = () => {
  return (
    <div className="body">

      {/* Image Slider Section */}
      <div className="slider-container">
        <div className="slider">
          <div className="slide">
            <img src={blackcar} alt="Black Car" />
          </div>
          <div className="slide">
            <img src={boat} alt="Boat" />
          </div>
          <div className="slide">
            <img src={butterfly} alt="Butterfly" />
          </div>
          <div className="slide">
            <img src={cars} alt="Cars" />
          </div>
        </div>
      </div>

      {/* Product Boxes Section */}
      <div className="box-body">

        <div className="box">
          <div
            className="box-image"
            style={{ backgroundImage: "url('https://via.placeholder.com/300x200?text=Watch')" }}
          ></div>
          <div className="content">
            <h2>Smart Watch</h2>
            <p className="details">Waterproof, GPS, 48-hour battery life.</p>
            <div className="rating">★ ★ ★ ★ ☆</div>
            <button className="btn-cart">Add to Cart</button>
          </div>
        </div>

        <div className="box">
          <div
            className="box-image"
            style={{ backgroundImage: "url('https://via.placeholder.com/300x200?text=Shoes')" }}
          ></div>
          <div className="content">
            <h2>Running Shoes</h2>
            <p className="details">Breathable fabric, shock absorption.</p>
            <div className="rating">★ ★ ★ ★ ★</div>
            <button className="btn-cart">Add to Cart</button>
          </div>
        </div>

        <div className="box">
          <div
            className="box-image"
            style={{ backgroundImage: "url('https://via.placeholder.com/300x200?text=Headphone')" }}
          ></div>
          <div className="content">
            <h2>Wireless Headphones</h2>
            <p className="details">Noise cancelling, 20hr battery, Bluetooth 5.0</p>
            <div className="rating">★ ★ ★ ★ ☆</div>
            <button className="btn-cart">Add to Cart</button>
          </div>
        </div>

        <div className="box">
          <div
            className="box-image"
            style={{ backgroundImage: "url('https://via.placeholder.com/300x200?text=Headphone')" }}
          ></div>
          <div className="content">
            <h2>Gaming Headset</h2>
            <p className="details">360° sound, mic, RGB lighting.</p>
            <div className="rating">★ ★ ★ ☆ ☆</div>
            <button className="btn-cart">Add to Cart</button>
          </div>
        </div>

        <div className="box">
          <div
            className="box-image"
            style={{ backgroundImage: "url('https://via.placeholder.com/300x200?text=Headphone')" }}
          ></div>
          <div className="content">
            <h2>Studio Headphones</h2>
            <p className="details">High-fidelity audio, over-ear.</p>
            <div className="rating">★ ★ ★ ★ ★</div>
            <button className="btn-cart">Add to Cart</button>
          </div>
        </div>

        <div className="box">
          <div
            className="box-image"
            style={{ backgroundImage: "url('https://via.placeholder.com/300x200?text=Headphone')" }}
          ></div>
          <div className="content">
            <h2>Foldable Headphones</h2>
            <p className="details">Portable, wireless, deep bass.</p>
            <div className="rating">★ ★ ★ ★ ☆</div>
            <button className="btn-cart">Add to Cart</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;



/* Base body styling */
.body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f0f2f5;
  padding: 20px;
}

/* Slider styles */
.slider-container {
  overflow: hidden;
  max-width: 100%;
  margin-bottom: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.slider {
  display: flex;
  transition: transform 0.4s ease-in-out;
}

.slide {
  min-width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

/* Product grid layout */
.box-body {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

/* Individual product box */
.box {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.box:hover {
  transform: translateY(-6px);
}

.box-image {
  width: 100%;
  height: 180px;
  background-size: cover;
  background-position: center;
}

.content {
  padding: 16px;
}

.content h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

.details {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 12px;
}

.rating {
  font-size: 1.1rem;
  color: gold;
  margin-bottom: 14px;
}

/* Add to Cart button */
.btn-cart {
  background-color: #007bff;
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.btn-cart:hover {
  background-color: #0056b3;
                  }
