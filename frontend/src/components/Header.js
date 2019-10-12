import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutThenGoToLoginPage as logout } from "../actions"
import { Navbar, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Header.css'

class Header extends Component{
    handleLogout = () => {
        this.props.logout()
    }

    render(){
        const { login } = this.props

        return(
            <div>
                <Navbar.Brand href="/">
                        <img className='birdPic' src={process.env.PUBLIC_URL + '/MCUSA-Logo-facebook.png'}/>
                </Navbar.Brand>
            
            
            <React.Fragment>
                <Navbar variant="light" fixed="top" className='mainContainer'>
                    <React.Fragment>
                        <Button
                            variant="outline-dark"
                            type="button"
                            onClick={this.handleLogout}
                        >
                            Logout
                        </Button>
                    </React.Fragment>
                </Navbar>
            </React.Fragment>
            </div>
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