/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import {selectPage, toggleDrawer} from './actions';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <Navigation {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
    return {
        selectPage: (page) => dispatch(selectPage(page)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
