/*
 *
 * SkillsContainer
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import selectSkillsContainer from './selectors';

import {addSkill} from './actions';

import TagList from '../../components/TagList';

export class SkillsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <TagList
                    tags={this.props.skills}
                    addTag={addSkill}
                />
            </div>
        );
    }
}

const mapStateToProps = selectSkillsContainer();

function mapDispatchToProps(dispatch) {
    return {
        addSkill: (skill) => dispatch(addSkill(skill))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);
