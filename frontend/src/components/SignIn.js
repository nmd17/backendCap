import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SignIn.css'
import axios from 'axios'
import {Link} from "react-router-dom";


class SignIn extends Component{
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
        axios.post('http://localhost:8000/api/auth/login/', {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            
        })
        .catch(error => console.log(error.status)) 
        
    }

    render(){
        console.log(this.props.router)
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
                <div>Dont have an account? <Link to='/register'>Sign up here!</Link></div>
                <br></br>
                <img id='birdPic' alt='' src={process.env.PUBLIC_URL + '/mennoniteBird.png'}></img>
            </div>
        )
    }
}

export default SignIn