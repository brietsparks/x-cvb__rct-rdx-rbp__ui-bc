/**
 *
 * Project
 *
 */

import React from 'react';


import styles from './styles.css';

function Project({ data, children }) {

    return (
        <div className={styles.project}>
            <h3>Project: {data.title}</h3>

            <div className={styles.children}>
                {children}
            </div>
        </div>
    );
}

export default Project;
