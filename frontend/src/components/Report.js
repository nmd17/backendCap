import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { subContainer, mainContainer } from '../styles/Report'

class Report extends Component{
    
    render(){
        const {body, conference} = this.props
        console.log(conference)
        return(
            <div>
                <Card style={mainContainer}>
                    <Card.Body style={subContainer}>
                        <Card.Title>Report</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        <Card.Text>
                        {body}
                        </Card.Text>
                        <Card.Text>
                        {conference}
                        </Card.Text>
                        <Button variant='outline-dark' type='button'>Send Report</ Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default connect()(Report)