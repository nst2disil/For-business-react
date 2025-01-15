import profileImg from './../../img/icons/Avatar.svg';
import '../../styles/css/header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div>
                        logo
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <a href="#!">Currencies</a>
                            </li>
                            <li>
                                <a href="#!">Products</a>
                            </li>
                            <li>
                                <a href="#!">For Partners</a>
                            </li>
                            <li>
                                <a href="#!">Support</a>
                            </li>
                            <li>
                                <button className="header__nav-btn btn-hover">Integrate Us</button>
                            </li>
                            <li>
                                <button className="btn--hover-zoom"><img src={profileImg} alt="profile" /></button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;