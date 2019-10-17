import React, {Component} from 'react';
import SignIn from './components/SignIn'
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import ReportForm from './components/ReportForm'
import UserReports from './components/UserReports'
import Header from './components/Header'
import { connect } from 'react-redux'
import { Switch, Route} from 'react-router-dom';

class App extends Component{
  render(){
    const { login } = this.props

    return (
        <Switch>
          <Route exact path='/' render={() => login ? <HomePage/> : <SignIn/>}/>
          <Route path='/register' render={() => <SignUp/>}/>
          <Route path='/report' component={ReportForm}/>
          <Route path='/myReports' component={UserReports}/>
        </Switch>
    )
  }
}



export default connect(
  ({auth}) => ({
    login: auth.login
  }),
  null
)(App)
