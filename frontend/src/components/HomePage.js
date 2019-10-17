import React, {Component} from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { getConferences, getReports, getUsers, setCurrentUser} from '../actions'
import '../styles/HomePage.css'


class HomePage extends Component{

    componentDidMount(){
        this.props.getConferences()
        this.props.getReports()
        this.props.getUsers()
        this.props.setCurrentUser()
    }

    render(){
        return(
            <React.Fragment>
                <Header />
            </React.Fragment>
        )
        
        
    }
}

const mapDispatchToProps = {
    getConferences,
    getReports,
    getUsers,
    setCurrentUser
}

export default connect(null, mapDispatchToProps)(HomePage)