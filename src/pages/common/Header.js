import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <section className="head-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <span className="header-text">Sapient Demo App</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;