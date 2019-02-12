import React, {Component, Fragment} from 'react'
import Card from '@material-ui/core/Card'
import {Link, withRouter} from 'react-router-dom'
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
       textAlign: 'center'
    },
    textField: {
        width: 500
    },
    submit: {
      margin: 'auto',
      marginBottom: 20
    },
    heading: {
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

class Signup extends Component{
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
      signupUser = ()=>{
        const {email}= this.state;
        const {password} = this.state;
        const {confirmPassword} = this.state;
        this.props.signup({email, password}, ()=>{
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
                    <Typography className={classes.heading}>
                       create account
                    </Typography>
                    <TextField id="name" label="Name" className={classes.textField}  onChange={(e)=>this.setState({email: e.target.value})} margin="normal"/><br/>
                    <TextField id="email" type="email" label="Email" className={classes.textField}  onChange={(e)=>this.setState({email: e.target.value})} margin="normal"/><br/>
                    <TextField id="contact"  label="Contact No" className={classes.textField}  onChange={(e)=>this.setState({email: e.target.value})} margin="normal"/><br/>
                    <TextField
                     id="standard-select-currency-native"
                     select
                     label="Select Subject"
                     fullWidth
                     className={classes.textField}
                     value={this.state.currency}
                     onChange={this.handleChange('Geography')}
                     SelectProps={{
                       native: true,
                       MenuProps: {
                         className: classes.menu,
                       },
                     }}
                     margin="normal"
                    >
                    {subjects.map(option => (
                     <option key={option.value} value={option.value}>
                       {option.label}
                     </option>
                    ))}
                    </TextField>

                    <TextField
                     id="standard-select-currency-native"
                     select
                     label="Total exp (years)"
                     fullWidth
                     className={classes.textField}
                     value="1-3"
                     onChange={this.handleChange('1-3')}
                     SelectProps={{
                       native: true,
                       MenuProps: {
                         className: classes.menu,
                       },
                     }}
                     margin="normal"
                    >
                    {experience.map(option => (
                     <option key={option.value} value={option.value}>
                       {option.label}
                     </option>
                    ))}
                    </TextField>
                  </CardContent>

                  <Link to="/upload-documents">
                  <CardActions>
                       <Button color="primary" variant="contained" onClick={this.signupUser} className={classes.submit}>next</Button>
                  </CardActions>
                    </Link>
                </Card>
             </Fragment>
          )
      }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
}

function mapStatetoProps({auth}){
   return {auth};
}

//export default withStyles(styles)(Signup);
export default connect(mapStatetoProps, actions)(withStyles(styles)(Signup));
