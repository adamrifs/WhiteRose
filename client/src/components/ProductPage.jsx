import React from "react";
import "../css/ProductPage.css";
import { FaArrowRight } from "react-icons/fa6";

export default function ProductPage() {
    const products = [
        {
            title: "Pink Delight Hatbox",
            price: "from AED 325.00",
            img: "https://images.pexels.com/photos/29606680/pexels-photo-29606680.jpeg",
        },
        {
            title: "Perfect White Hatbox",
            price: "from AED 325.00",
            img: "https://images.pexels.com/photos/5409768/pexels-photo-5409768.jpeg",
        },
        {
            title: "Lavender Hatbox",
            price: "from AED 325.00",
            img: "https://images.pexels.com/photos/1154557/pexels-photo-1154557.jpeg",
        },
        {
            title: "Vibrant Hatbox",
            price: "from AED 325.00",
            img: "https://images.pexels.com/photos/17084572/pexels-photo-17084572.jpeg",
        },
        {
            title: "Vibrant Hatbox",
            price: "from AED 325.00",
            img: "https://images.pexels.com/photos/17084572/pexels-photo-17084572.jpeg",
        },
        {
            title: "Elegant Rose Bouquet",
            price: "from AED 299.00",
            img: "https://images.pexels.com/photos/10217721/pexels-photo-10217721.jpeg",
        },
        {
            title: "Sunshine Sunflowers",
            price: "from AED 280.00",
            img: "https://images.pexels.com/photos/7431024/pexels-photo-7431024.jpeg",
        },
        {
            title: "Lavender Dreams",
            price: "from AED 250.00",
            img: "https://images.pexels.com/photos/9284995/pexels-photo-9284995.jpeg",
        },
        {
            title: "Orchid Elegance",
            price: "from AED 450.00",
            img: "https://images.pexels.com/photos/5699663/pexels-photo-5699663.jpeg",
        },
        {
            title: "Spring Tulip Basket",
            price: "from AED 310.00",
            img: "https://images.pexels.com/photos/1154557/pexels-photo-1154557.jpeg",
        },
        {
            title: "Romantic Lilies",
            price: "from AED 340.00",
            img: "https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg",
        },
        {
            title: " Seasonal Blooms",
            price: "from AED 295.00",
            img: "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg",
        },
        {
            title: "Pastel Peonies",
            price: "from AED 370.00",
            img: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg",
        },
        {
            title: "Exotic Bird of Paradise",
            price: "from AED 360.00",
            img: "https://images.pexels.com/photos/7545586/pexels-photo-7545586.jpeg",
        },
        {
            title: "Classic White Roses",
            price: "from AED 330.00",
            img: "https://images.pexels.com/photos/29606680/pexels-photo-29606680.jpeg",
        },
        {
            title: "Blush Pink Bouquet",
            price: "from AED 310.00",
            img: "https://images.pexels.com/photos/540522/pexels-photo-540522.jpeg",
        },
        {
            title: "Golden Daffodils",
            price: "from AED 270.00",
            img: "https://images.pexels.com/photos/4466447/pexels-photo-4466447.jpeg",
        },
        {
            title: "Calla Lily Grace",
            price: "from AED 390.00",
            img: "https://images.pexels.com/photos/2879812/pexels-photo-2879812.jpeg",
        },
        {
            title: "Rustic Wildflowers",
            price: "from AED 280.00",
            img: "https://images.pexels.com/photos/931161/pexels-photo-931161.jpeg",
        },
        {
            title: "Festive  Arrangement",
            price: "from AED 420.00",
            img: "https://images.pexels.com/photos/1154557/pexels-photo-1154557.jpeg",
        },
    ];

    return (
        <div className="page-container">
            {/* Sidebar */}
            <div className="sidebar">
                <ul>
                    <li>Special Offers</li>
                    <li>Shop All</li>
                    <li>What's New</li>
                    <li>Shop by Occasion</li>
                    <li>Shop by Flowers</li>
                    <li>Shop by Price</li>
                    <li>VIP Flowers</li>
                    <li>Gift Sets</li>
                    <li>Extras</li>
                    <li>Events</li>
                </ul>
            </div>

            {/* Products */}
            <div className="products">
                <div className="products-heading">
                    <h1>Shop Now</h1>
                </div>
                <div className="grid">
                    {products.map((product, index) => (
                        <div className="card" key={index}>
                            <img src={product.img} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.price}</p>
                            <button>View</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
