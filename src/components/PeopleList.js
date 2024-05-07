import React from 'react'

function PeopleList({findPeople, id, name, age, gender, location, interests, preferences}) {
    function handleClick(id){
        findPeople(id)
    }
  return (
    <div>
      
    </div>
  )
}

export default PeopleList
