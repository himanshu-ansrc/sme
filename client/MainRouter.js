import React, {Component, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './src/components/Header'
import Login from './src/components/Login'
import Signup from './src/components/Signup'
import Home from './src/components/Home'
import Verify from './src/components/Verify'
import Profile from './src/components/Profile'
import CreateProfile from './src/components/CreateProfile'
import {connect} from 'react-redux'
import * as actions from './src/actions';

class MainRouter extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
      console.log(this.props);
  }
  render(){
     return(
        <Fragment>
          <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/login" component={Login}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/verify" component={Verify}/>
             <Route path="/home" component={Home}/>
             <Route path="/candidate-profile" component={Profile}/>
             <Route path="/create-profile" component={Signup}/>
          </Switch>
        </Fragment>
     )
  }
}

export default connect(null, actions)(MainRouter);
