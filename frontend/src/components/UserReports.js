import React, { Component } from 'react'
import { connect } from 'react-redux'
import Report from './Report'
import { getReports } from '../actions'
import Header from '../components/Header'
import {mainContainer} from '../styles/UserReports'

class UserReports extends Component{


    render(){
        const { reports, currentUser } = this.props
        console.log(reports)

        const reportList = reports.filter(report => {return (report.user === currentUser.username)}).map(report => {
            return <Report 
                    body = {report.body}
                    conference = {report.conference}
            />
        })

        return(
            <div>
                <Header />
            <div style={mainContainer}>
                {reportList}
            </div>
            </div>
        )
    }
}

function mapStateToProps({reports, users, conferences, currentUser}){
    return {
        reports: reports.reports,
        users: users.users,
        conferences: conferences.conferences,
        currentUser: currentUser
    }
}

const mapDispatchToProps = {
    getReports
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserReports)