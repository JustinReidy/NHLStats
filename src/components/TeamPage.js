import React, { Component } from 'react'
import { withTeams } from '../context/TeamProvider'

import PlayerList from './PlayerList'

class TeamPage extends Component {

    constructor(){
        super()

        this.state = {

        }
    }

    componentDidMount(){
        this.props.getSingleTeam()
    }
    render() {
        return (
            <div>
                <h1>{this.props.singleTeam.name}</h1>
                <div>
                    <h1>Players</h1>
                    <PlayerList />
                </div>
            </div>
        )
    }
}

export default withTeams(TeamPage)