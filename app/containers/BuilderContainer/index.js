/*
 *
 * BuilderContainer
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import selectBuilderContainer from './selectors';

export class BuilderContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <h1>Builder</h1>
            </div>
        );
    }
}

const mapStateToProps = selectBuilderContainer();

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuilderContainer);
