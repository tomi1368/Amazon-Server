import { Link } from "react-router-dom"
import "./Footer.scss"

const Footer = () => {

    const scrollTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }


    return (
        <>
        <div className="sign-footer">
            <h4>See personalized recommendations</h4>
            <Link to="/login" className="sign-footer__link">Sign In</Link>
            <h6>New customer? <Link to="/register">Start here </Link></h6>
        </div>
        <div className="back-top" onClick={()=> scrollTop() }> {/* Hacer que vaya arriba de todo */}
            <p>Back to top</p>
        </div>
        <div className="footer-info">
            <ul>
                <li className="head-item">Get to know Us</li>
                <li>Carrers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Investor Relations</li>
                <li>Amazon Devices</li>
            </ul>
            <ul>
                <li className="head-item"> Make Money with Us</li>
                <li>Sell products on Amazon</li>
                <li>Sell on Amazon Business</li>
                <li>Sell apps on Amazon</li>
                <li>Become an Affiliate</li>
                <li>Advertise Your Products</li>
                <li>Self-Publish with Us</li>
                <li>Host an Amazon Hub</li>
                <li>→ See More Make Money with Us</li>
            </ul>
            <ul>
                <li className="head-item">Amazon Payment Products</li>
                <li>Amazon Business Card</li>
                <li>Shop with Points</li>
                <li>Reload Your Balance</li>
                <li>Amazon Currency Converter</li>
            </ul>
            <ul>
                <li className="head-item">Let Us Help You</li>
                <li>Amazon and COVID-19</li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Shipping Rates & Policies</li>
                <li>Returns & Replacements </li>
                <li>Manage Your Content and Devices</li>
                <li>Amazon Assistant</li>
                <li>Help</li>
            </ul>
        </div>
        </>
    )
}

export default Footer
