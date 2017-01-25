/**
 *
 * ExpTree
 *
 */

import React from 'react';


import styles from './styles.css';

function ExpTree({ exps }) {

    const expNodes = exps.map(exp => (
        <p key={exp.id}>{exp.title}</p>
    ));

    return (
        <div className={styles.expTree}>
            <h1>Exp Tree</h1>

            {expNodes}
        </div>
    );
}

export default ExpTree;
