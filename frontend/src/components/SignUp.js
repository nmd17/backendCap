import React, {Component} from 'react'
import {Link, Redirect} from "react-router-dom";
import {Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { registerThenGoToUserProfile as register } from '../actions'

class SignUp extends Component{
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.register(this.state)
        
    }

    render(){
        return(
            <div style={{height: '700px'}}className="MainContainer">
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
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={this.handleChange}
                                type="text" placeholder="Email" name='email' />

                        </Form.Group>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={this.handleChange}
                                type="text" placeholder="First Name" name='first_name' />

                        </Form.Group>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={this.handleChange}
                                type="text" placeholder="Last Name" name='last_name' />

                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <br></br>
                <div>Already have an account? <Link to='/'>Login</Link></div>
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
