document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === "admin" && password === "password") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to another page (optional)
    } else {
        document.getElementById("message").textContent = "Invalid username or password!";
    }
});


document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === "admin" && password === "password") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to another page (optional)
    } else {
        document.getElementById("message").textContent = "Invalid username or password!";
    }
});



import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            let { data } = await axios.get('https://dummyjson.com/products')
            setProducts(data.products)
        } catch (error) {
            console.log(error);

        }
    }
    console.log(products);

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <br />

            {
                products.map((p) => {
                    return <div key={p.id}>
                        <p>Title : {p.title}</p>
                        <p>Description : {p.description}</p>
                        <p>Price : ${p.price}</p>
                        <img src={p.thumbnail} alt="" />

                        {/* {
                            p.images.map((url)=>{
                                return <img src={url} alt="" />
                            })
                        } */}

                        <br />
                    </div>
                }
                )}
        </div>
    )
}

export default Home


document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === "admin" && password === "password") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to another page (optional)
    } else {
        document.getElementById("message").textContent = "Invalid username or password!";
    }
});


document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === "admin" && password === "password") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to another page (optional)
    } else {
        document.getElementById("message").textContent = "Invalid username or password!";
    }
});



import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            let { data } = await axios.get('https://dummyjson.com/products')
            setProducts(data.products)
        } catch (error) {
            console.log(error);

        }
    }
    console.log(products);

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <br />

            {
                products.map((p) => {
                    return <div key={p.id}>
                        <p>Title : {p.title}</p>
                        <p>Description : {p.description}</p>
                        <p>Price : ${p.price}</p>
                        <img src={p.thumbnail} alt="" />

                        {/* {
                            p.images.map((url)=>{
                                return <img src={url} alt="" />
                            })
                        } */}

                        <br />
                    </div>
                }
                )}
        </div>
    )
}

export default Home
