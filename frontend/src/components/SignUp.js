import React, {Component} from 'react'
import {Link, Redirect} from "react-router-dom";
import {Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { registerThenGoToUserProfile as register } from '../actions'

class SignUp extends Component{
    state = {
        username: "",
        password: ""
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.register(this.state)
        
    }

    render(){
        return(
            <div className="MainContainer">
                <div className="FormContainer">
                    <Form onSubmit={this.handleSubmit} className="SignInForm">
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
                <div>Already have an account? <Link to='/login'>Login</Link></div>
                <br></br>
                <img id='birdPic' alt='' src={process.env.PUBLIC_URL + '/mennoniteBird.png'}></img>
            </div>
        )
    }
}

function mapStateToProps({auth}) {
    return {
        registerLoading: auth.registerLoading,
        registerError: auth.registerError
    }
}

const mapDispatchToProps = {
    register
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)
