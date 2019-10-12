import React, {Component} from 'react';
import SignIn from './components/SignIn'
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import { Switch, Route, BrowserRouter as Router, withRouter} from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      is_logged_in: false
    }

  }
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' 
                 component={HomePage}/>
          <Route exact path='/login' 
                component={SignIn}/>
          <Route exact path='/register' component={SignUp}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
