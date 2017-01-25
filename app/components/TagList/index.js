/**
 *
 * TagList
 *
 */

import React from 'react';


import styles from './styles.css';

function TagList({ tags, addTag }) {

    const tagNodes = tags.map(t => (
        <p
            key={t.id}
        >{t.title}</p>
    ));

    return (
        <div className={styles.tagList}>
            {tagNodes}
        </div>
    );
}

export default TagList;
