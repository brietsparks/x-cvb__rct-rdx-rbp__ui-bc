/*
 *
 * SkillsContainer
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import selectSkillsContainer from './selectors';

import {addSkill} from './actions';
import Skill from '../../components/Skill';

import TagList from '../../components/TagList';

export class SkillsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <TagList
                    tags={this.props.skills}
                    factory={this.skillFactory}
                    add={addSkill}
                    header="Skills"
                />
            </div>
        );
    }

    skillFactory(skill) {
        return (
            <Skill
                {...skill}
                key={skill.id}
            />
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
