import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/Checkout.css";

export default function Checkout() {
    const [shipping, setShipping] = useState("express");
    const location = useLocation()
    const product = location.state

    return (
        <div className="checkout-container">
            {/* Left Section - Shipping Form */}
            <div className="checkout-left">
                <h3>Shipping Address</h3>
                <form className="shipping-form">
                    <div className="form-row">
                        <input type="text" placeholder="First Name*" defaultValue="Adam" />
                        <input type="text" placeholder="Last Name*" defaultValue="Rifsal" />
                    </div>

                    <div className="form-row">
                        <input type="email" placeholder="Email*" defaultValue="adamrifsal@gmail.com" />
                        <div className="phone-input">
                            <select>
                                <option>UAE</option>
                            </select>
                            <input type="text" placeholder="Phone number*" defaultValue="+91 6377588843" />
                        </div>
                    </div>

                    <div className="form-row">
                        <input type="text" placeholder="City*" defaultValue="Dubai" />
                        <input type="text" placeholder="State*" defaultValue="Ajman" />
                    </div>

                    <div className="form-row">
                        <input type="text" placeholder="Zip Code*" defaultValue="560021" />
                    </div>

                    <textarea placeholder="Description*"></textarea>

                    <h4>Shipping Method</h4>
                    <div className="shipping-methods">
                        <label className={shipping === "free" ? "active" : ""}>
                            <input
                                type="radio"
                                name="shipping"
                                checked={shipping === "free"}
                                onChange={() => setShipping("free")}
                            />
                            <div>
                                <p>Free Shipping</p>
                                <span>7-20 Days</span>
                            </div>
                            <strong>AED 0</strong>
                        </label>

                        <label className={shipping === "express" ? "active" : ""}>
                            <input
                                type="radio"
                                name="shipping"
                                checked={shipping === "express"}
                                onChange={() => setShipping("express")}
                            />
                            <div>
                                <p>Express Shipping</p>
                                <span>1-3 Days</span>
                            </div>
                            <strong>AED 9</strong>
                        </label>
                    </div>
                </form>
            </div>

            {/* Right Section - Cart Summary */}
            <div className="checkout-right">
                <h3>Your Cart</h3>
                <div className="cart-item">
                    <div>
                        <p><strong>{product.title}</strong></p>
                        <span>Classic</span>
                    </div>
                    <span>{product.price}</span>
                </div>
                {/* <div className="cart-item">
                    <div>
                        <p><strong>Classic White Roses</strong></p>
                        <span>Fragrant</span>
                    </div>
                    <span>AED 330.00</span>
                </div> */}

                <div className="discount">
                    <input type="text" placeholder="Discount code" />
                    <button>Apply</button>
                </div>

                <div className="summary">
                    <p>Subtotal <span>{product.price}</span></p>
                    <p>Shipping <span>{shipping === "express" ? "AED 9" : "AED 0"}</span></p>
                    <p>Estimated Taxes <span>AED 5</span></p>
                    <hr />
                     <h4>Total <span>{shipping === "express" ? "AED 9 + " + product.price : product.price}</span></h4>
                </div>

                <button className="payment-btn">Continue to Payment</button>
            </div>
        </div>
    );
}
