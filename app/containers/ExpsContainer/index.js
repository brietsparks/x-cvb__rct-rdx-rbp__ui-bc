/*
 *
 * ExpsContainer
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import selectExpsContainer from './selectors';

import ExpTree from '../../components/ExpTree';

import Contribution from '../../components/Contribution';
import Project from '../../components/Project';

export class ExpsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <ExpTree
                    factory={this.expFactory}
                    {...this.props}
                />
            </div>
        );
    }

    expFactory(exp, children) {
        if (exp.is_project) {
            return (
                <Project
                    key={exp.id}
                    data={exp}
                    children={children}
                />
            );
        } else {
            return (
                <Contribution
                    key={exp.id}
                    data={exp}
                />
            );
        }
    }
}

const mapStateToProps = selectExpsContainer();

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpsContainer);
