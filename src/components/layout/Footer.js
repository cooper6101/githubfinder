import React from 'react';
import PropTypes from 'prop-types';

export const Footer = ({ title, icon }) => {
    return (
        <div>
            <nav className="navbar bg-primary">
                    <h1>
                        <i className={icon}></i>
                    </h1>
                    <p>&#169; 2020</p>
            </nav>
        </div>
    )
}

Footer.defaultProps = {
    title: "Github Finder",
    icon: 'fa fa-github'
};

Footer.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Footer;
