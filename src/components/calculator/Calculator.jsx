import CalculatorInput from '../calculatorInput/CalculatorInput';
import './../../styles/css/calculator.css';
import EUR from './../../img/icons/EUR.svg';
import BTC from './../../img/icons/BTC.svg';
import dots from './../../img/dots.svg';

const Calculator = () => {
    return (
        <section className="calculator">
            <div className="calculator__content">
                <div className="calculator__nav">
                    <ul>
                        <li><button>Buy</button></li>
                        <li><button>Sell</button></li>
                        <li><button>Swap</button></li>
                    </ul>
                </div>
                <div className="calculator__body">
                    <div className="calculator__change">
                        <CalculatorInput title="You send" amount="300" coin="EUR" img={EUR} />
                        <div className="calculator__change-settings">
                            <img src={dots} alt="dots" />
                            <div className="calculator__change-settings-text">
                                <div className="calculator__change-settings-text-row">
                                    <span>Estimated rate:</span> 
                                    <div>1 BTC ~ 14.865901 EUR</div>
                                </div>
                                <div className="calculator__change-settings-text-row">
                                    <span>Total to pay:</span> 
                                    <div>300 EUR (2 EUR fees included)</div>
                                </div>
                            </div>
                        </div>
                        <CalculatorInput title="You get" amount="~0.02935551" coin="BTC" img={BTC} />
                    </div>
                    <button className="calculator__btn btn--hover-zoom">Become a partner</button>
                </div>
            </div>
        </section>
    );
}

export default Calculator;