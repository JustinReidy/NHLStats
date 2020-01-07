import React, { Component } from 'react'
import axios from 'axios'

import '../styles/Teams.css'

class PlayerList extends Component {

    constructor(){
        super()

        this.state ={
            roster: []
        }
    }

    componentDidMount(){
        axios.get("https://statsapi.web.nhl.com/api/v1/teams/21/roster").then(res => {
            this.setState({roster: res.data.roster})
        })
    }

    render() {

        console.log(this.state.roster)

        return (
            <div>
                {this.state.roster ?
                    this.state.roster.map(player => <div className="player">
                                                    <h3 className="playerName">{player.person.fullName}</h3>
                                                    <h3 className="playerPosition">{player.position.name}</h3>
                                                    </div>)
                :
                <p>Loading ... </p>}
            </div>
        )
    }
}

export default PlayerList