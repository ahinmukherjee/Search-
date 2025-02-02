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





  /* Navbar container */
.navber {
    background-color: #333;
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Menu container */
.menuContainer {
    display: flex;
    gap: 20px;
}

/* Links styling */
.links {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 8px 12px;
    border-radius: 5px;
    transition: background 0.3s ease;
}

/* Hover effect */
.links:hover {
    background-color: #555;
}

/* Active link styling */
.menuActive {
    background-color: #007bff;
    color: white;
    font-weight: bold;
    border-radius: 5px;
}



WITH emp_data AS (  
    SELECT 1, 'John Doe', 60000, '2023-01-15', 1, 1 FROM dual UNION ALL  
    SELECT 2, 'Emma Watson', 75000, '2022-05-10', 2, 2 FROM dual UNION ALL  
    SELECT 3, 'Liam Johnson', 50000, '2021-08-20', 3, 3 FROM dual UNION ALL  
    SELECT 4, 'Sophia Roberts', 80000, '2020-07-12', 4, 4 FROM dual UNION ALL  
    SELECT 5, 'Mason Brown', 55000, '2019-09-25', 5, 5 FROM dual UNION ALL  
    SELECT 6, 'Olivia Wilson', 70000, '2018-11-05', 6, 6 FROM dual UNION ALL  
    SELECT 7, 'Noah Davis', 65000, '2017-04-30', 7, 7 FROM dual UNION ALL  
    SELECT 8, 'Ava Martinez', 72000, '2016-03-18', 8, 8 FROM dual UNION ALL  
    SELECT 9, 'Elijah Taylor', 68000, '2015-12-22', 9, 9 FROM dual UNION ALL  
    SELECT 10, 'Isabella Thomas', 62000, '2014-06-10', 10, 10 FROM dual UNION ALL  
    SELECT 11, 'James Lee', 75000, '2013-09-15', 11, 11 FROM dual UNION ALL  
    SELECT 12, 'Charlotte White', 54000, '2012-02-14', 12, 12 FROM dual UNION ALL  
    SELECT 13, 'Lucas Harris', 73000, '2011-07-19', 13, 13 FROM dual UNION ALL  
    SELECT 14, 'Mia Walker', 60000, '2010-11-03', 14, 14 FROM dual UNION ALL  
    SELECT 15, 'William Hall', 77000, '2009-08-08', 15, 15 FROM dual UNION ALL  
    SELECT 16, 'Evelyn Allen', 58000, '2022-06-21', 1, 2 FROM dual UNION ALL  
    SELECT 17, 'Alexander King', 71000, '2021-04-12', 2, 3 FROM dual UNION ALL  
    SELECT 18, 'Harper Scott', 53000, '2020-10-05', 3, 4 FROM dual UNION ALL  
    SELECT 19, 'Henry Green', 69000, '2019-12-15', 4, 5 FROM dual UNION ALL  
    SELECT 20, 'Amelia Adams', 64000, '2018-07-30', 5, 6 FROM dual  
)  
INSERT INTO employee (EmployeeID, EmployeeName, Salary, JoiningDate, DepartmentID, ManagerID)  
SELECT * FROM emp_data;
