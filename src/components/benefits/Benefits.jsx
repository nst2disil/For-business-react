import './../../styles/css/benefits.css';
import BenefitCard from '../benefitCard/BenefitCard';
import conditionsImg from './../../img/benefits/bf-best-conditions.svg';
import fastEasyImg from './../../img/benefits/bf-fast-easy.svg';
import trustImg from './../../img/benefits/bf-trust.svg';
import careImg from './../../img/benefits/bf-care.svg';

const conditionsDesc = [
    '30 different cryptocurrencies to exchange',
    'Secure, non-custodial exchanges',
    'Lowest fees on the market'
];

const fastEasyDesc = [
    'Fast & seamless onboarding',
    'Easy-to-use partner’s cabinet',
    'Instant invoices'
];

const trustDesc = [
    '5 years of successful service',
    'Fully licensed, EU-based company',
    'Trusted by over 400 businesses'
];

const careDesc = [
    'Personal account manager',
    'Dedicated support staff',
    'Fully guided onboarding process'
];

const Benefits = () => {
    return (
        <section className="benefits">
            <div className="container">
                <div className="benefits__content">
                    <div className="title-2 benefits__title">
                        Our&nbsp;
                        <span>benefits</span>
                    </div>
                    <div className="benefits__cards">
                        <BenefitCard img={conditionsImg} title="Best conditions you can get" desc={conditionsDesc} isLeft />
                        <BenefitCard img={fastEasyImg} title="Fast & easy onboarding" desc={fastEasyDesc} />
                        <BenefitCard img={trustImg} title="A service you can trust" desc={trustDesc} isLeft />
                        <BenefitCard img={careImg} title="Personal customer care" desc={careDesc} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;