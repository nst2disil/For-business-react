import '../../styles/css/hero.css';
import sepaImg from '../../img/logos/Group.svg';
import swiftImg from '../../img/logos/swift-logo-new 1.svg';
import fastPayImg from '../../img/logos/image 35.png';
import Calculator from '../calculator/Calculator';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__text">
                        <div className="hero__title">
                            Crypto&#60;&#62;Fiat<br />
                            <span>exchanges</span><br />
                            <span>for your business</span>
                        </div>
                        <div className="hero__desc">
                            Cash out your crypto profits or invest into crypto
                            <br />with the lowest fees on the market.
                        </div>
                        <div className="hero__payment">
                            <ul>
                                <li>
                                    <a href="#!">
                                        <img src={sepaImg} alt="sepa" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <img src={swiftImg} alt="swift" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <img src={fastPayImg} alt="fast-pay" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Calculator />
                </div>
            </div>
        </section>
    );
}

export default Hero;