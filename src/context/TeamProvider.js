import React from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()

class TeamProvider extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            teams: [],
            singleTeam: [],
            id: 0
        }
    }

    getTeams = () => {
        axios.get("https://statsapi.web.nhl.com/api/v1/teams").then(res => {
            this.setState({teams: res.data.teams})
        })
    }

    getSingleTeam = () => {
        axios.get("https://statsapi.web.nhl.com/api/v1/teams/21").then(res => {
            this.setState({singleTeam: res.data.teams[0]})
        })
    }

    render() {
        return(
            <Provider value={{...this.state,
                              getTeams: this.getTeams,
                              getSingleTeam: this.getSingleTeam,
                              teams: this.state.teams}}>
                {this.props.children}
            </Provider>
        )
    }

}

export default TeamProvider

export function withTeams(Comp){
    return props =>
    <Consumer>
        {value => <Comp {...value} {...props} />}
    </Consumer>
}