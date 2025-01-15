import './../../styles/css/exchangeCard.css';

const ExchangeCard = ({ title, desc, img, imgClass }) => {
    return (
        <div className="ex-card">
            <div className="ex-card__text">
                <div className="card__title ex-card__title">{title}</div>
                <div className="card__desc ex-card__desc">{desc}</div>
            </div>
            <div className="ex-card__picture">
                <img className={`ex-card__img ${imgClass}`} src={img} alt="exchange" />
            </div>
        </div>
    );
}

export default ExchangeCard;