import React from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()

class TeamProvider extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <Provider value={{...this.state}}>
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