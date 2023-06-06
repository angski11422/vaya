import React from 'react';


export default function Nav() {
    return (
        <nav className="sidebar">
                    <ul className="side-nav">
                        <li className="side-nav__item">
                            <a className="side-nav__link" href="#">
                                <svg className="side-nav__icon">
                                    <use xlinkHref="src/img/sprite.svg#icon-home"></use>
                                </svg>
                                <span>Hotels</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a className="side-nav__link" href="#">
                                <svg className="side-nav__icon">
                                    <use xlinkHref="src/img/sprite.svg#icon-aircraft-take-off"></use>
                                </svg>
                                <span>Flights</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a className="side-nav__link" href="#">
                                <svg className="side-nav__icon">
                                    <use xlinkHref="src/img/sprite.svg#icon-key"></use>
                                </svg>
                                <span>Car Rental</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a className="side-nav__link" href="#">
                                <svg className="side-nav__icon">
                                    <use xlinkHref="src/img/sprite.svg#icon-map"></use>
                                </svg>
                                <span>Tours</span>
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        &copy; est. 2023 by Sterling Barton and Angela Palaszewski. All rights reserved.
                    </div>
                </nav>
    )
}