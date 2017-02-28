/**
 *
 * ExpTree
 *
 */

import React from 'react';

import 'lodash';
import styles from './styles.css';

function ExpTree({ exps, factory }) {

    const expNodes = makeTrees(exps, factory);

    return (
        <div className={styles.expTree}>
            <h3>Exp Tree</h3>

            {expNodes}
        </div>
    );
}

function makeTrees(flat, factory) {
    let trees = [];

    const roots = _.filter(flat, function (exp) {
        return exp.parent_id === null;
    });

    _.each(roots, function (exp) {
        trees.push(makeNode(exp, flat, factory));
    });

    return trees;
}

function makeNode(exp, flat, factory) {
    let children = _.filter(flat, function (child) {
        return child.parent_id === exp.id;
    });

    if (children.length) {
        children = _.map(children, function (child) {
            return makeNode(child, flat, factory);
        });
    }

    console.log(exp.title);

    return factory(exp, children);
}

export default ExpTree;
