/*
 *
 * ExpsContainer
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import selectExpsContainer from './selectors';

import ExpTree from '../../components/ExpTree';

export class ExpsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <ExpTree  {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = selectExpsContainer();

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpsContainer);
