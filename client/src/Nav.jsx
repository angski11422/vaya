import {NavLink} from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="sidebar">
                    <ul className="side-nav">
                        <li className="side-nav__item">
                            <NavLink to='/' className="side-nav__link" href="#">
                                <svg className="side-nav__icon">
                                    <use xlinkHref="src/img/sprite.svg#icon-key"></use>
                                </svg>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li className="side-nav__item">
                            <NavLink to='/hotels' className="side-nav__link">
                                <svg className="side-nav__icon">
                                    <use xlinkHref="src/img/sprite.svg#icon-home"></use>
                                </svg>
                                <span>Hotels</span>
                            </NavLink>
                        </li>
                        <li className="side-nav__item">
                            <NavLink to='/flights' className="side-nav__link" href="#">
                                <svg className="side-nav__icon">
                                    <use xlinkHref="src/img/sprite.svg#icon-aircraft-take-off"></use>
                                </svg>
                                <span>Flights</span>
                            </NavLink>
                        </li>
                        <li className="side-nav__item">
                            <NavLink to='/trips' className="side-nav__link" href="#">
                                <svg className="side-nav__icon">
                                    <use xlinkHref="src/img/sprite.svg#icon-map"></use>
                                </svg>
                                <span>Your Trips</span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="copyright">
                        &copy; est. 2023 by Sterling Barton and Angela Palaszewski. All rights reserved.
                    </div>
                </nav>
    )
}