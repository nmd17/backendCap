import React, {Component} from 'react'
import {Redirect, withRouter} from 'react-router-dom'

class HomePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.logged_in){
            return(
                <div>
                    This will be the homepage eventually
                </div>
            )
        }else{
            return <Redirect to='/login'/>
        }
        
    }
}

export default HomePage