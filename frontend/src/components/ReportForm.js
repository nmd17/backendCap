import React, { Component } from 'react'
import { connect } from "react-redux"
import Header from './Header'
import { withRouter } from 'react'
import { postThenGoHome as post } from '../actions'
import {Form, Button} from 'react-bootstrap'
import '../styles/Post.css'
import { store } from '../index'

class ReportForm extends Component{
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.post(this.state)
    }

    render(){
        const { conferences } = this.props

        const conferenceList = conferences.conferences.map((x, index) => {
            return <option key={index}>{x.name}</option>
        })

        return(
            <React.Fragment>
            <Header />
            <br></br>
            <div style={{height: '800px'}}className="PostMainContainer">
                <div className="PostContainer">
                    <Form onSubmit={this.handleSubmit} className="PostForm">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description of Incident:</Form.Label>
                            <Form.Control onChange={this.handleChange}
                                as="textarea" rows="10" placeholder="Description" name='body' />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Name of individual involved:</Form.Label>
                            <Form.Control onChange={this.handleChange}
                                type="text" placeholder="First Name" name='first_name' />
                            <br></br>
                            <Form.Control onChange={this.handleChange}
                                type="text" placeholder="Last Name" name='last_name' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Conference:</Form.Label>
                            <Form.Control onChange={this.handleChange} as="select" name='conference'>
                            {conferenceList}
                            </Form.Control>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Save
                        </Button>
                    </Form>
                </div>
                <br></br>
                <img id='birdPic' alt='' src={process.env.PUBLIC_URL + '/mennoniteBird.png'}></img>
            </div>
            </React.Fragment>
            
            
        )
    }
}

function MapStateToProps({post, conferences}){
    return {
        postLoading: post.postLoading,
        postError: post.postError,
        conferences: conferences
    }
    
}

const MapDispatchToProps = {
    post
}

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(ReportForm)