import React from 'react'

import '../styles/Teams.css'

function Team (props) {
    const { name, division, conference } = props
    return (
        <div>
            <div className="TeamCard">
                <a href="singleTeam">{name}</a>
                
                <p>{conference}</p>
                <p>{division}</p>
                
            </div>
        </div>
    )
}

export default Team