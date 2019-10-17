import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { logoutThenGoToLoginPage as logout } from "../actions"
import { getConferences } from '../actions'
import { Navbar, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//import '../styles/Header.css'
import { push } from 'connected-react-router'
import { store } from '../index'
import {headerMainContainer, logoutBtn, birdPic, btnDiv} from '../styles/Header'

class Header extends Component{
    handleLogout = () => {
        this.props.logout()
    }

    routeChange = (location) => {
        store.dispatch(push(location))
    }

    render(){
        return(
            <React.Fragment> 
                <Navbar variant="light" fixed="top" style={headerMainContainer}>
                    <Navbar.Brand href="/">
                            <img style={birdPic} src={process.env.PUBLIC_URL + '/MCUSA-Logo-facebook.png'}/>
                    </Navbar.Brand>
                    <div style={btnDiv}>
                            <Button
                                onClick={() => this.routeChange('/')}
                                variant='outline-light'
                                type='button'
                            >Home</Button>
                        
                            <Button
                                onClick={() => this.routeChange('/report')}
                                variant='outline-light'
                                type='button'
                            >Report</Button>

                            <Button
                                onClick={() => this.routeChange('/myReports')}
                                variant='outline-light'
                                type='button'
                            >My Reports</Button>
                        </div>
                        
                        
                            <Button
                                style={logoutBtn}
                                variant="outline-light"
                                type="button"
                                onClick={this.handleLogout}
                            >
                                Logout
                            </Button>
                    </Navbar>
            </React.Fragment>
        )
    }
}

function mapStateToProps({auth}) {
    return {
        login: auth.login
    }
}

const mapDispatchToProps = {
    logout
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)