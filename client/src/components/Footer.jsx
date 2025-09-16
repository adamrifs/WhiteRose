import React from 'react'
import '../css/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-sections">
                {/* Support Section */}
                <div className="footer-column">
                    <h4>SUPPORT</h4>
                    <ul>
                        <li>About US</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>T & C - Refund Policy</li>
                    </ul>
                </div>

                {/* Occasions Section */}
                <div className="footer-column">
                    <h4>OCCASIONS</h4>
                    <ul>
                        <li>Birthday</li>
                        <li>Anniversary</li>
                        <li>New Baby</li>
                        <li>Love</li>
                    </ul>
                </div>

                {/* Categories Section */}
                <div className="footer-column">
                    <h4>CATEGORIES</h4>
                    <ul>
                        <li>Cakes</li>
                        <li>Chocolates</li>
                        <li>Flowers</li>
                        <li>Combo & Offers</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-column contact">
                    <img
                        src="https://whiteroseflowers.ae/wp-content/uploads/2021/07/white-rose-logo.svg"
                        alt="Logo"
                        className="footer-logo"
                    />
                    <p>White Rose Flowers & Chocolates</p>
                    <p>Address: 31 Al Muthabarah St – RabdanAl Maqta’ – Abu Dhabi</p>
                    <p>
                        Call us: <a href="tel:+971543214150">+971 54 321 4150</a>
                    </p>
                    <p>
                        Email:{" "}
                        <a href="mailto:sales@whiteroseflowers.ae">
                            sales@whiteroseflowers.ae
                        </a>
                    </p>
                    <div className="social-icons">
                        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
                        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></a>
                        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png" alt="Snapchat" /></a>
                        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046122.png" alt="TikTok" /></a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>© Developed by <span>ADAM</span></p>
            </div>
        </footer>

    )
}

export default Footer