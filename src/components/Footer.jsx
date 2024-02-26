
import './Footer.css'
// import visa from '../images/visa.png'

function Footer(){
    return(
        <>
        <footer>
            <div className="footer-main">
                <div className="footer-div1">
                    <div className="f-links f">
                        <h4>UseFul Links</h4>
                        <p>
                        <a href="#">Contact us</a><br/>
                         <a href="#">Help &amp; About us</a><br/>
                        <a href="#">Shipping &amp; Returns</a>
                        <br/> <a href="#">Refund Policy</a>
                        </p>
                    </div>
                    <div className="f-services f">
                    <h4>Customer service</h4>
                        <p>
                        <a href="#">Orders</a><br/>
                         <a href="#">Downloads</a><br/>
                        <a href="#">Addresses</a>
                        <br/> <a href="#">Account details</a>
                        <br/> <a href="#">Logout</a>
                        <br/> <a href="#">Lost password</a>
                        </p>
                    </div>
                    <div className="f-delivery f">
                    <h4>Delivery</h4>
                        <p>
                        <a href="#">How it Works</a><br/>
                         <a href="#">Free Delivery</a><br/>
                        <a href="#">FAQ</a>
                        <br/> <a href="#">Payment methods</a>
                        <br/> <a href="#">Delivery areas</a>
                        </p>
                    </div>
                    <div className="f-contact f">
                    <h4>Contact Us</h4>
                    <hr />
                    <h3> +61 (0) 383 766 284</h3>
                    <hr />
                    <p>noreply@envato.com</p>
                    <hr />
                    {/* <img src={visa} alt="visa" /> */}
                    </div>
                </div>
                <hr style={{Color: '#65666C'}}/>
                <div className="footer-div2">
                    <div className="f-copy">
                        <p>© 2021 Betheme by Muffin group | All Rights Reserved | Powered by WordPress</p>
                    </div>
                    <div className="f-privacy ">
                        <p>Terms and conditions | Privacy policy | Cookies</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;