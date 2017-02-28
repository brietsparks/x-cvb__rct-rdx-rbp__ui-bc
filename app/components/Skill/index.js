/**
 *
 * Skill
 *
 */

import React from 'react';


import styles from './styles.css';

function Skill({ id, title }) {
    return (
        <div className={styles.skill}>
            <p>{title}</p>
        </div>
    );
}

export default Skill;
