import './../../styles/css/calculatorInput.css';
import downArrow from './../../img/icons/down-arrow.svg';

const CalculatorInput = ({title, amount, coin, img}) => {
    return (
        <section className="calculator-input">
            <div className="calculator-input__field">
                <div className="calculator-input__field-title">{title}</div>
                <div className="calculator-input__text">{amount}</div>
            </div>
            <div className="calculator-input__picker">
                <img src={img} alt="coin" />
                <div className="calculator-input__text">{coin}</div>
                <button><img src={downArrow} alt="downArrow" /></button>
            </div>
        </section>
    );
}

export default CalculatorInput;