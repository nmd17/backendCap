import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getConferences} from '../actions'

class Conferences extends Component{

    componentDidMount(){
        this.props.getConferences()
    }

    render(){
        return(
            <div>
                Shit will go here eventually
            </div>
        )
    }
}

function mapStateToProps({conferences}){
    return {
        conferences: conferences
    }
}

const mapDispatchToProps = {
    getConferences
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Conferences)