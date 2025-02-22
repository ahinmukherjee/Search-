import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../style/cards.css";

const Cards = () => {
    const { id } = useParams(); // Get product ID from URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="product-details">
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating} ⭐⭐⭐</p>
            <p>Category: {product.category}</p>
            <p>Discount Offer: {product.discountPercentage}%</p>
        </div>
    );
};

export default Cards;











.product-details {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
    font-family: Arial, sans-serif;
}

h2 {
    color: #333;
    margin-bottom: 15px;
}

.product_image {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    border-radius: 10px;
    margin-bottom: 15px;
}

p {
    font-size: 16px;
    color: #555;
    margin: 5px 0;
}

p strong {
    color: #222;
}

.reviews_box {
    margin-top: 20px;
    padding: 15px;
    background-color: #f8f8f8;
    border-radius: 8px;
    text-align: left;
}

.reviews_box h3 {
    margin-bottom: 10px;
    color: #444;
}

.reviews_box ol {
    padding-left: 20px;
}

.reviews_box li {
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
}

.reviews_box li strong {
    color: #000;
}

@media (max-width: 768px) {
    .product-details {
        width: 90%;
        padding: 15px;
    }
    
    .product_image {
        max-height: 250px;
    }

    p {
        font-size: 14px;
    }
}



import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../style/cards.css";

const Cards = () => {
    const { id } = useParams(); // Get product ID from URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="product-details">
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating} ⭐⭐⭐</p>
            <p>Category: {product.category}</p>
            <p>Discount Offer: {product.discountPercentage}%</p>
        </div>
    );
};

export default Cards;











.product-details {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
    font-family: Arial, sans-serif;
}

h2 {
    color: #333;
    margin-bottom: 15px;
}

.product_image {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    border-radius: 10px;
    margin-bottom: 15px;
}

p {
    font-size: 16px;
    color: #555;
    margin: 5px 0;
}

p strong {
    color: #222;
}

.reviews_box {
    margin-top: 20px;
    padding: 15px;
    background-color: #f8f8f8;
    border-radius: 8px;
    text-align: left;
}

.reviews_box h3 {
    margin-bottom: 10px;
    color: #444;
}

.reviews_box ol {
    padding-left: 20px;
}

.reviews_box li {
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
}

.reviews_box li strong {
    color: #000;
}

@media (max-width: 768px) {
    .product-details {
        width: 90%;
        padding: 15px;
    }
    
    .product_image {
        max-height: 250px;
    }

    p {
        font-size: 14px;
    }
}


import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../style/cards.css";

const Cards = () => {
    const { id } = useParams(); // Get product ID from URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="product-details">
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating} ⭐⭐⭐</p>
            <p>Category: {product.category}</p>
            <p>Discount Offer: {product.discountPercentage}%</p>
        </div>
    );
};

export default Cards;











.product-details {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
    font-family: Arial, sans-serif;
}

h2 {
    color: #333;
    margin-bottom: 15px;
}

.product_image {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    border-radius: 10px;
    margin-bottom: 15px;
}

p {
    font-size: 16px;
    color: #555;
    margin: 5px 0;
}

p strong {
    color: #222;
}

.reviews_box {
    margin-top: 20px;
    padding: 15px;
    background-color: #f8f8f8;
    border-radius: 8px;
    text-align: left;
}

.reviews_box h3 {
    margin-bottom: 10px;
    color: #444;
}

.reviews_box ol {
    padding-left: 20px;
}

.reviews_box li {
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
}

.reviews_box li strong {
    color: #000;
}

@media (max-width: 768px) {
    .product-details {
        width: 90%;
        padding: 15px;
    }
    
    .product_image {
        max-height: 250px;
    }

    p {
        font-size: 14px;
    }
}




