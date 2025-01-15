import './../../styles/css/benefitCard.css';
import { useInView } from 'react-intersection-observer';

const BenefitCard = ({ img, title, desc, isLeft }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className={`bf-card ${inView ? 'visible' : ''} ${isLeft ? 'left' : 'right'}`}>
            <div className="bf-card__img">
                <img src={img} alt="benefit" />
            </div>
            <div>
                <div className="card__title">{title}</div>
                <div className="card__desc">
                    <ul>
                        {desc.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BenefitCard;
