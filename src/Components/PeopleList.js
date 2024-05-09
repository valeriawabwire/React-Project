import React from "react";
import PeopleItem from './PeopleItem';

function PeopleList({ people,onSelect}) {
    
    return (
        <div>
            {people.map(person => {
                return <PeopleItem {...person}
                onSelect={() => onSelect(person)}/>
            })}
        </div>
    )
}
export default PeopleList
