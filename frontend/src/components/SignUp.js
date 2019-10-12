import React, {Component} from 'react'
import {Link, Redirect} from "react-router-dom";
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: ''
        }
    }

    handleChange(id, event){
        if(id === 'username'){
            this.setState({username: event.target.value})
        }else if(id === 'password'){
            this.setState({password: event.target.value})
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:8000/api/auth/register/', {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            console.log(res)
        })
        
    }

    render(){
        return(
            <div className="MainContainer">
                <div className="FormContainer">
                    <Form onSubmit={this.handleSubmit} className="SignInForm">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={(event) => this.handleChange('username',event)}
                                type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(event) => this.handleChange('password', event)}
                                type="password" placeholder="Password" />
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

export default SignUp