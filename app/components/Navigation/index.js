/**
 *
 * Navigation
 *
 */

import React from 'react';


import styles from './styles.css';

function Navigation({ pages, selectPage }) {

    const pageNodes = pages.map(page => (
        <li
            key={page.name}
            onClick={() => selectPage(page)}
        >{page.name}</li>
    ));

    return (
        <ul className={styles.navigation}>
            {pageNodes}
        </ul>
    );
}

Navigation.propTypes = {
    pages: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired
        })
    ).isRequired,
    selectPage: React.PropTypes.func.isRequired,
};

export default Navigation;
