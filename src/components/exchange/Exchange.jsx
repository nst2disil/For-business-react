import ExchangeCard from '../exchangeCard/ExchangeCard';
import './../../styles/css/exchange.css';
import joinUsImg from './../../img/join-us.png';
import exchangeImg from './../../img/exchange.png';
import enjoyImg from './../../img/enjoy.png';
// import Calculator from '../calculator/Calculator';

const Exchange = () => {
    return (
        <section className="exchange">
            <div className="container">
                <div className="exchange__content">
                    <div className="title-2 exchange__title">
                        How to exchange BTC to EUR <span>for business</span>
                    </div>
                    <div className="exchange__cards">
                        <ExchangeCard title="01. Join us" desc="Complete a fast & simple onboarding process." img={joinUsImg} imgClass="join-us-class" />
                        <ExchangeCard title="02. Exchange" desc="Choose what to exchange and make the deposit." img={exchangeImg} imgClass="exchange-class" />
                        {/* <ExchangeCard title="02. Exchange " desc="Choose what to exchange and make the deposit." Component={<Calculator />} /> */}
                        <ExchangeCard title="03. Enjoy" desc="Receive your funds & we hope to see you soon!" img={enjoyImg} imgClass="enjoy-class" />
                    </div>
                    <button className="exchange__btn btn--hover-zoom">Start making exchanges</button>
                </div>
            </div>
        </section>
    );
}

export default Exchange;