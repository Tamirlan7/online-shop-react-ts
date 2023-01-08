import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {

    return (
        <nav className="nav">
            <div className="logo">
                <h3><Link to="/" className="menu__link-h3">TAMIRLAN</Link></h3>
            </div>
            <ul className="menu">
                <li className="menu__item">
                    <Link className="menu__link" to="/">Товары</Link>
                </li>
                <li className="menu__item">
                    <Link className="menu__link" to="/basket">Корзина</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
