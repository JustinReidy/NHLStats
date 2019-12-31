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
            this.state.teams.push(...res.data.teams)
        })
    }

    render(){

        console.log(this.state.teams, this.state.teams.length)
        // console.log(this.state.teams[0].teams.name)
        

        return(
            <div>
                <div>

                    {this.state.teams.length ? 
                    this.state.teams.map( team => <Team name={team.name} />) 
                    : 
                    <p>Loading...</p>}

                </div>
            </div>
        )
    }
}

export default TeamMap