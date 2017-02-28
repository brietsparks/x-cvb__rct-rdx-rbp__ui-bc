/**
 *
 * TagList
 *
 */

import React from 'react';


import styles from './styles.css';

function TagList({
    tags,       // items of data
    factory,    // function that takes data item returns component
    add,        // function for the 'add' action
    header,     // section header
}) {

    const tagNodes = tags.map(t => (factory(t)));

    return (
        <div className={styles.tagList}>
            <h3>{header}</h3>
            {tagNodes}
        </div>
    );
}

export default TagList;
