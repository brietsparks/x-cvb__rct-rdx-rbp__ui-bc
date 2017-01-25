/**
 *
 * Drawer
 *
 */

import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.css';

function Drawer({ toggleDrawer, contents }) {
    return (
        <div className={styles.drawer}>
            <h2>Drawer</h2>

            <div
                className={styles.iconButton}
                onClick={toggleDrawer}
            >
                <FontAwesome className={styles.icon} name="bars"/>

                { contents }
            </div>


        </div>
    );
}

Drawer.propTypes = {
    toggleDrawer: React.PropTypes.func.isRequired
};

export default Drawer;
