/**
 *
 * Stage
 *
 */

import React from 'react';


import styles from './styles.css';

function Stage({ contents }) {
    return (
        <div className={styles.stage}>
            <h2>Stage</h2>

            { contents }

        </div>
    );
}

export default Stage;
