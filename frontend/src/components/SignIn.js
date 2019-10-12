import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SignIn.css'
import {Link} from "react-router-dom";
import { loginThenGoToUserProfile as login} from "../actions"
import { connect } from "react-redux"


class SignIn extends Component{
    state = {username: "", password: ""}

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        
    }

    handleLogin = e => {
        e.preventDefault()
        this.props.login(this.state)
    }

    render(){
        const { isLoading, err } = this.props

        return(
            <div className="MainContainer">
                <div className="FormContainer">
                    <Form onSubmit={this.handleLogin} className="SignInForm">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={this.handleChange}
                                type="text" placeholder="Username" name='username' />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={this.handleChange}
                                type="password" placeholder="Password" name='password' />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <br></br>
                <div>Dont have an account? <Link to='/register'>Sign up here!</Link></div>
                <br></br>
                <img id='birdPic' alt='' src={process.env.PUBLIC_URL + '/mennoniteBird.png'}></img>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return {
        isLoading: auth.loginLoading,
        err: auth.loginError
    }
}

const mapDispatchToProps = {
    login
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)