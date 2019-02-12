import React, {Component, Fragment} from 'react'
import Card from '@material-ui/core/Card'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Header from './Header';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

import {connect} from 'react-redux'
import * as actions  from '../actions'
import * as auth from '../auth/auth';

const styles = theme => ({
    card:{
       maxWidth: 600,
       margin: 'auto',
       marginTop: '100px',
    },
    textField: {
        width: 500
    },
    submit: {
      margin: 'auto',
      marginBottom: 20
    },
    heading: {
       textAlign: 'center',
       textTransform: 'uppercase',
       fontSize: 'initial'
    }
});

const subjects = [
  {
    value: 'Science',
    label: 'Science',
  },
  {
    value: 'Design and technology (ICT)',
    label: 'Design and technology (ICT)',
  },
  {
    value: 'History',
    label: 'History',
  },
  {
    value: 'Geography',
    label: 'Geography',
  },
  {
    value: 'B.Tech',
    label: 'B.Tech',
  },
];

const experience = [
  {
    value: '0-1',
    label: '0-1',
  },
  {
    value: '1-3',
    label: '1-3',
  },
  {
    value: '4-5',
    label: '4-5',
  },
  {
    value: '6-10',
    label: '6-10',
  },
  {
    value: '10 +',
    label: '10 +',
  }
];

class UploadDocuments extends Component{
      constructor(){
         super();
         this.state = {
            email : '',
            password: '',
            confirmPassword: ''
         }
      }
      componentDidMount(){
        if(this.props.auth.authenticated.auth){
           this.props.history.push('/home');
        }
      }
      UploadDocumentsUser = ()=>{
        const {email}= this.state;
        const {password} = this.state;
        const {confirmPassword} = this.state;
        this.props.UploadDocuments({email, password}, ()=>{
            this.props.history.push('/verify');
        })
      }
      handleChange = name => event => {
          this.setState({ [name]: event.target.value });
      }
      render(){
          const {classes} = this.props
          return(
             <Fragment>
                <Header/>
                <Card className={classes.card}>
                  <CardContent>
                    <Grid container spacing={24}>
                     <Grid item xs={12} sm={12}>
                     <Typography className={classes.heading}>
                        Upload documents
                     </Typography>
                     </Grid>
                     <Grid item xs={12} sm={9}>
                         <Typography fontWeight="fontWeightMedium">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                         </Typography>
                     </Grid>
                     <Grid item xs={12} sm={3}>
                       <Button color="primary" variant="contained" onClick={this.UploadDocumentsUser} className={classes.submit}>upload</Button>
                     </Grid>
                     <Grid item xs={12} sm={9}>
                         <Typography fontWeight="fontWeightMedium">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                         </Typography>
                     </Grid>
                     <Grid item xs={12} sm={3}>
                       <Button color="primary" variant="contained" onClick={this.UploadDocumentsUser} className={classes.submit}>upload</Button>

                     </Grid>
                     <Grid item xs={12} sm={9}>
                         <Typography fontWeight="fontWeightMedium">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                         </Typography>
                     </Grid>
                     <Grid item xs={12} sm={3}>
                          <Button color="primary" variant="contained" onClick={this.UploadDocumentsUser} className={classes.submit}>upload</Button>

                     </Grid>
                 </Grid>


                  </CardContent>
                   <Link to="/">
                      <CardActions>
                         <Button color="primary" variant="contained" onClick={this.UploadDocumentsUser} className={classes.submit}>Submit</Button>
                      </CardActions>
                  </Link>
                </Card>
             </Fragment>
          )
      }
}

UploadDocuments.propTypes = {
  classes: PropTypes.object.isRequired
}

function mapStatetoProps({auth}){
   return {auth};
}

//export default withStyles(styles)(UploadDocuments);
export default connect(mapStatetoProps, actions)(withStyles(styles)(UploadDocuments));
