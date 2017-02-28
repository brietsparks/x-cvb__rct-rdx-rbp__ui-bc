/*
 *
 * PersonsContainer
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import selectPersonsContainer from './selectors';

import {addPerson} from "./actions";
import Person from "../../components/Person";

import TagList from '../../components/TagList';

export class PersonsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <TagList
                    tags={this.props.persons}
                    factory={this.personFactory}
                    add={addPerson}
                    header="People"
                />
            </div>
        );
    }

    personFactory(person) {
        return (
            <Person
                {...person}
                key={person.id}
            />
        );
    }
}

const mapStateToProps = selectPersonsContainer();

function mapDispatchToProps(dispatch) {
    return {
        addPerson: (person) => dispatch(addPerson(person)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonsContainer);
