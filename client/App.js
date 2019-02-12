import React, {Component, Fragment} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './src/components/Header'
import Login from './src/components/Login'
import Signup from './src/components/Signup'
import Home from './src/components/Home'
import CreateProfile from './src/components/CreateProfile'
import UploadDocuments from './src/components/UploadDocuments'
import Verify from './src/components/Verify'
import Profile from './src/components/Profile'
import axios from 'axios'


class App extends Component{

   constructor(){
      super();
      this.state = {
         loaded : null
      }
   }

   componentDidMount(){

   }

   render(){
      return(
        <Fragment>
         <BrowserRouter>
           <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/verify" component={Verify}/>
              <Route path="/home" component={Home}/>
              <Route path="/candidate-profile" component={Profile}/>
              <Route path="/create-profile" component={CreateProfile}/>
              <Route path="/upload-documents" component={UploadDocuments}/>
           </Switch>
         </BrowserRouter>
        </Fragment>
      )
   }
}

export default App;
