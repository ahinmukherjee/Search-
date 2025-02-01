import React from "react";
import "./ProductList.css"; // Import CSS file

const ProductList = ({ products }) => {
  return (
    <div className="product-container">
      {products.map((p) => (
        <div className="product-card" key={p.id}>
          <h2>{p.title}</h2>
          <img src={p.thumbnail} alt={p.title} className="product-image" />
          <p><strong>Description:</strong> {p.description}</p>
          <p><strong>Price:</strong> ${p.price}</p>
          <p><strong>Rating:</strong> {p.rating} ⭐</p>
          <p><strong>Category:</strong> {p.category}</p>
          <p><strong>Discount Offer:</strong> {p.discountPercentage}%</p>

          <div className="reviews">
            <h3>Reviews:</h3>
            {p.reviews && p.reviews.length > 0 ? (
              <ol>
                {p.reviews.map((review, index) => (
                  <li key={index}>
                    <strong>{review.reviwerName}:</strong> {review.comment}
                  </li>
                ))}
              </ol>
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;


.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background-color: #f8f9fa;
}

.product-card {
  width: 300px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.reviews {
  margin-top: 10px;
  text-align: left;
}

.reviews ol {
  padding-left: 20px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

p {
  font-size: 1rem;
  color: #555;
}

strong {
  color: #222;
        }



const ProductList = ({ products }) => {
  return (
    <div className="product-container">
      {products.map((p) => (
        <div className="product-card" key={p.id}>
          <div className="box">
            <p className="title">Title: {p.title}</p>
            <img className="image" src={p.thumbnail} alt={p.title} />
            <p className="desc product">Description: {p.description}</p>
            <p className="price product">Price: ${p.price}</p>
            <p className="category product">Category: {p.category}</p>

            <Link to={`/products/${p.id}`} className="link">
              View more...
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};




.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
}

.product-card {
  width: 280px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.product-card:hover {
  transform: scale(1.05);
}

.image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.product {
  font-size: 1rem;
  color: #555;
}

.link {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  font-weight: bold;
  color: #007bff;
}

.link:hover {
  color: #0056b3;
}


