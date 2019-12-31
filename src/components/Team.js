import React from 'react'

function Team (props) {
    const { name, division, conference, abbreviation, shortname, teamname } = props
    return (
        <div>
            <h1>{name}</h1>
            <p>{abbreviation}</p>
            {/* <p>{active}</p> */}
            <p>{conference}</p>
            <p>{division}</p>
            <p>{shortname}</p>
            <p>{teamname}</p>
        </div>
    )
}

export default Team