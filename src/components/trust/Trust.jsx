import './../../styles/css/trust.css';
import partner from './../../img/logos/fish.png';
import leftArrow from './../../img/icons/left-arrow.svg';
import rightArrow from './../../img/icons/right-arrow.svg';

const Trust = () => {
    return (
        <section className="trust">
            <div className="container">
                <div className="trust__content">
                    <div className="trust__text">
                        <div className="title-2 trust__title">
                            Trusted by <span>the best</span>
                        </div>
                        <div className="trust__desc">
                            Company powers the leading projects in Web3 industry.
                        </div>
                    </div>
                    <div className="trust__list">
                        <ul>
                            <li>
                                <button className="btn--hover-zoom"><img src={leftArrow} alt="leftArrow" /></button>
                            </li>
                            <li>
                                <div>
                                    <a href="#!"><img src={partner} alt="partner" /></a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="#!"><img src={partner} alt="partner" /></a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="#!"><img src={partner} alt="partner" /></a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="#!"><img src={partner} alt="partner" /></a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="#!"><img src={partner} alt="partner" /></a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="#!"><img src={partner} alt="partner" /></a>
                                </div>
                            </li>
                            <li>
                                <button className="btn--hover-zoom"><img src={rightArrow} alt="rightArrow" /></button>
                            </li>
                        </ul>
                    </div>
                    <div className="trust__join">
                        <button className="trust__join-btn btn--hover-zoom">Join our partner family</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Trust;