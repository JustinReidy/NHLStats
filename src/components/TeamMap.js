import React, { Component } from 'react'
import { withTeams } from '../context/TeamProvider'

import Team from './Team'
import '../styles/Teams.css'

class TeamMap extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            teams: []
        }
    }
    
    componentDidMount(){
        this.props.getTeams()
    }

    render(){

        return(
            <div>
                <div className="TeamLayout">

                    {this.props.teams.length ? 
                    this.props.teams.map( team => <Team name={team.name}
                                                        id={team.id}
                                                        conference={team.conference.name}
                                                        division={team.division.name}
                                                        />) 
                    : 
                    <p>Loading...</p>}

                </div>
            </div>
        )
    }
}

export default withTeams(TeamMap)