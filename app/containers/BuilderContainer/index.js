/*
 *
 * BuilderContainer
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import selectBuilderContainer from './selectors';

import ExpContainer from '../ExpsContainer';
import SkillsContainer from '../SkillsContainer';

import {toggleDrawer} from './actions';

import Drawer from '../../components/Drawer';
import Stage from '../../components/Stage';

export class BuilderContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <h1>Builder</h1>

                <Drawer
                    toggleDrawer={this.props.toggleDrawer}
                    contents={<SkillsContainer/>}
                />

                <Stage
                    contents={<ExpContainer />}
                />

            </div>
        );
    }
}

const mapStateToProps = selectBuilderContainer();

function mapDispatchToProps(dispatch) {
    return {
        toggleDrawer: () => dispatch(toggleDrawer())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuilderContainer);
