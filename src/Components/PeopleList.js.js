import React from "react";
import PeopleItem from './PeopleItem';

function PeopleList({ people }) {
    return (
        <div>
            {people.map(person => {
                return <PeopleItem {...person}/>
            })}
        </div>
    )
}
export default PeopleList
