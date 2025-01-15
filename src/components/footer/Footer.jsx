import '../../styles/css/footer.css';
import EstonianPolice from './../../img/logos/Estonian_Police_and_Border_Guard_Board_coat_of_arms 1.svg';
import flagEU from './../../img/logos/flag_of_eu 1.svg';
import Facebook from './../../img/icons/Facebook.svg';
import Twitter from './../../img/icons/Twitter.svg';
import Youtube from './../../img/icons/Youtube.svg';
import Telegram from './../../img/icons/Telegram.svg';
import Reddit from './../../img/icons/Reddit.svg';
import Instagram from './../../img/icons/Instagram.svg';
import Visa from './../../img/logos/Visa.svg';
import Mastercard from './../../img/logos/Mastercard.svg';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__logo">
                        logo
                    </div>
                    <nav className="footer__nav">
                        <ul className="footer__nav-ul">
                            <li>
                                <div>
                                    <span className="footer__nav-title">Products</span>
                                </div>
                                <ul className="footer__text">
                                    <li><a href="#!">Buy & Sell Crypto</a></li>
                                    <li><a href="#!">Recurring exchanges</a></li>
                                    <li><a href="#!">On- and Off-ramp</a></li>
                                    <li><a href="#!">Exchanges for Business</a></li>
                                    <li><a href="#!">Crypto card</a></li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <span className="footer__nav-title">For Partners</span>
                                </div>
                                <ul className="footer__text">
                                    <li><a href="#!">Become a partner</a></li>
                                    <li><a href="#!">API Docs</a></li>
                                    <li><a href="#!">Integrate us</a></li>
                                    <li><a href="#!">Subscriptions</a></li>
                                    <li><a href="#!">Partner login</a></li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <span className="footer__nav-title">Currencies</span>
                                </div>
                                <ul className="footer__text">
                                    <li><a href="#!">Bitcoin</a></li>
                                    <li><a href="#!">Etherium</a></li>
                                    <li><a href="#!">Tether</a></li>
                                    <li><a href="#!">Monero</a></li>
                                    <li><a href="#!">Cardano</a></li>
                                    <li><a href="#!">All currencies</a></li>
                                    <li><a href="#!">List your token</a></li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <span className="footer__nav-title">Support</span>
                                </div>
                                <ul className="footer__text">
                                    <li><a href="#!">Submit a ticket</a></li>
                                    <li><a href="#!">FAQ</a></li>
                                    <li><a href="#!">Knowledge base</a></li>
                                    <li><a href="#!">Contact us</a></li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <span className="footer__nav-title">Company</span>
                                </div>
                                <ul className="footer__text">
                                    <li><a href="#!">Blog</a></li>
                                    <li><a href="#!">Press & Media </a></li>
                                    <li><a href="#!">Brand Assets</a></li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <span className="footer__nav-title">Legal</span>
                                </div>
                                <ul className="footer__text">
                                    <li><a href="#!">Pricavy Policy</a></li>
                                    <li><a href="#!">Terms of Service</a></li>
                                    <li><a href="#!">KYC | AML Policy</a></li>
                                    <li><a href="#!">Cookies Policy</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer__img">
                        <div className="footer__flags">
                            <img src={EstonianPolice} alt="logo" />
                            <img src={flagEU} alt="logo" />
                        </div>
                        <div className="footer__icons">
                            <a href="#!"><img src={Facebook} alt="Facebook" /></a>
                            <a href="#!"><img src={Twitter} alt="Twitter" /></a>
                            <a href="#!"><img src={Youtube} alt="Youtube" /></a>
                            <a href="#!"><img src={Telegram} alt="Telegram" /></a>
                            <a href="#!"><img src={Reddit} alt="Reddit" /></a>
                            <a href="#!"><img src={Instagram} alt="Instagram" /></a>
                        </div>
                        <div className="footer__pay">
                            <img src={Visa} alt="logo" />
                            <img src={Mastercard} alt="logo" />
                        </div>
                    </div>
                    <div className="footer__text">
                        <span>© 2024, Company.</span>
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                        <br /><br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. 
                        <br /><br />
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;