import React from 'react'

function Team (props) {
    // const { abbreviation, active, conference, division, name, shortname, teamname } = props
    const { name } = props
    console.log(name)
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Team