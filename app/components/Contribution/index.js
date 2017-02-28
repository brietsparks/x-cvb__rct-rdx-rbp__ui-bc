/**
 *
 * Contribution
 *
 */

import React from 'react';


import styles from './styles.css';

function Contribution({data}) {

    return (
        <div className={styles.contribution}>
            <h3>Contribution: {data.title}</h3>

        </div>
    );
}

export default Contribution;
