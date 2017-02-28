/**
 *
 * Project
 *
 */

import React from 'react';

import 'lodash';
import styles from './styles.css';

function Project({ data, children }) {

    return (
        <div className={styles.project}>
            <h3>Project: {data.title}</h3>

            <div className={styles.children}>
                {filterContributions(children)}
                {filterProjects(children)}
            </div>
        </div>
    );
}

function filterContributions(children) {
    return filterChildren(children, false);
}

function filterProjects(children) {
    return filterChildren(children, true);
}

function filterChildren(children, is_project) {
    return _.filter(children, function (child) {
        return child.props.data.is_project === is_project;
    })
}

export default Project;
