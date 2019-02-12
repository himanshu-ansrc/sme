import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import SearchFilters from './SearchFilters'
import ListCandidates from './ListCandidates'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';

import * as auth from '../auth/auth';


const styles = theme => ({
    landingPage:{
       position: 'relative',
       marginTop: '100px'
    },
    coverImage:{
        width:'100%'
    },
    searchFiltes:{
      verticalAlign: 'top',
      display: 'inline-block',
      width: '40%'
    },
    listCandidates: {
      display: 'inline-block',
      width: '60%'
    },
    homeHeading:{
        color:'#fff',
        marginBottom: '20px'
    },
    buildResumeButton:{
      marginRight: '30px'
    },
    colorHeading: {
       color: "#000"
    },
    card:{
       maxWidth: 450,
       margin: 'auto',
       marginTop: '100px',
       textAlign: 'center'
    },
    textField: {
        width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: 20
    }
});


class Home extends Component{
      componentDidMount(){

      }
      buildResumeClick= ()=>{
        this.props.history.push('/create-resume');
      }
      render(){
          const {classes} = this.props;
          return(
            <Fragment>
             <Header/>
             <div className={classes.landingPage}>
                <div className={classes.searchFiltes}>
                     <SearchFilters/>
                </div>
                <div className={classes.listCandidates}>
                     <ListCandidates/>
                </div>
             </div>
           </Fragment>
          )
      }
}

function mapStatetoProps({auth}){
   return {auth};
}
export default connect(mapStatetoProps)(withStyles(styles)(Home));
