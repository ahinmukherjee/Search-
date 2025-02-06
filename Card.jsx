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
