import './header.css';
import { NavLink } from 'react-router-dom';

function Header({ searchTerm, onSearchChange }) {
    return (
        <header className="header">
            <div className="header__nav">
                <div className="header__nav-logo">
                    <img src="logos/logo1.png" alt="logo" width="108" height="81" />
                </div>
                <div className="header__nav-pages">
                    <NavLink exact to="/">
                        <button type="button" className="header__page">
                            Home
                        </button>
                    </NavLink>
                    <NavLink to="/catalog">
                        <button type="button" className="header__page">
                            Catalog
                        </button>
                    </NavLink>
                    <NavLink to="/cart">
                        <button type="button" className="header__page">
                            Cart
                        </button>
                    </NavLink>
                </div>
                <input type="search" className="header__search" placeholder="Search" value={searchTerm} onChange={onSearchChange}/></div>
        </header>
    );
}

export default Header;
