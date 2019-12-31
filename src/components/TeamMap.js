import React, { Component } from 'react'
import axios from 'axios'

import Team from './Team'

class TeamMap extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            teams: []
        }
    }
    
    componentDidMount(){
        axios.get("https://statsapi.web.nhl.com/api/v1/teams").then(res => {
            // for(let i = 0; i < res.data.teams.length; i++){
            //     this.state.teams.push(res.data.teams[i])
            //     // console.log(this.state.teams[i].teams.name)
            // }
            this.setState({teams: res.data.teams})
        })
    }

    render(){

        console.log(this.state.teams)
        // console.log(this.state.teams[0].teams.name)
        

        return(
            <div>
                <div>

                    {this.state.teams.length ? 
                    this.state.teams.map( team => <Team name={team.name}
                                                        abbreviation={team.abbreviation}
                                                        active={team.active}
                                                        conference={team.conference.name}
                                                        division={team.division.name}
                                                        shortname={team.shortName}
                                                        teamname={team.teamName} />) 
                    : 
                    <p>Loading...</p>}

                </div>
            </div>
        )
    }
}

export default TeamMap