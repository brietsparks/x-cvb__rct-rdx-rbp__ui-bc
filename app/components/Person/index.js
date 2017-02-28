/**
 *
 * Person
 *
 */

import React from 'react';


import styles from './styles.css';

function Person({ id, name }) {
    return (
        <div className={styles.person}>
            <p>{name}</p>
        </div>
    );
}

export default Person;
