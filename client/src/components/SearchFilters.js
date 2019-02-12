import React, {Component, Fragment} from 'react'
import Card from '@material-ui/core/Card'
import {Link} from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Header from './Header';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

import {connect} from 'react-redux'
import * as actions  from '../actions'
import * as auth from '../auth/auth';

const styles = theme => ({
    card:{
       maxWidth: 450,
       margin: 'auto',
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

const currencies = [
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
    value: 'Atr and design',
    label: 'Art and design',
  },
  {
    value: 'B.Tech',
    label: 'B.Tech',
  },
];

class SearchFilters extends Component{
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
      };
      render(){
          const {classes} = this.props
          return(
             <Fragment>
                <Header/>
                <Card className={classes.card}>
                  <CardContent>
                        <Typography variant="h6" gutterBottom>
                          Search Filters
                        </Typography>
                        <Grid container spacing={24}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="firstName"
                              name="firstName"
                              type="date"
                              defaultValue="2018-02-06"
                              label="Work exp from"
                              autoComplete="fname"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              id="lastName"
                              name="lastName"
                              type="date"
                              defaultValue="2020-02-06"
                              label="Work exp to"
                              autoComplete="lname"
                            />
                          </Grid>
                          <Grid item xs={12}>
                          <TextField
                           id="standard-select-currency-native"
                           select
                           label="Select Subject"
                           fullWidth
                           className={classes.textField}
                           value={this.state.currency}
                           onChange={this.handleChange('currency')}
                           SelectProps={{
                             native: true,
                             MenuProps: {
                               className: classes.menu,
                             },
                           }}
                           margin="normal"
                         >
                         {currencies.map(option => (
                           <option key={option.value} value={option.value}>
                             {option.label}
                           </option>
                         ))}
                       </TextField>
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                               id="standard-select-currency-native"
                               select
                               label="Select highest qualification"
                               fullWidth
                               className={classes.textField}
                               value="B.Tech"
                               onChange={this.handleChange('Music')}
                               SelectProps={{
                                 native: true,
                                 MenuProps: {
                                   className: classes.menu,
                                 },
                               }}
                               margin="normal"
                             >
                             {currencies.map(option => (
                               <option key={option.value} value={option.value}>
                                 {option.label}
                               </option>
                             ))}
                           </TextField>
                          </Grid>

                          <Grid item xs={12}>
                              <TextField
                               id="standard-select-currency-native"
                               label="Placeholder 1"
                               fullWidth
                               className={classes.textField}
                               margin="normal"
                             />
                          </Grid>
                          <Grid item xs={12}>
                             <TextField
                              id="standard-select-currency-native"
                              label="Placeholder 2"
                              fullWidth
                              className={classes.textField}
                              margin="normal"
                            />
                          </Grid>
                        </Grid>
                  </CardContent>
                  <CardActions>
                     <Button color="primary" variant="contained" onClick={this.signupUser} className={classes.submit}>Submit</Button>
                  </CardActions>
                </Card>
             </Fragment>
          )
      }
}

SearchFilters.propTypes = {
  classes: PropTypes.object.isRequired
}

function mapStatetoProps({auth}){
   return {auth};
}

//export default withStyles(styles)(SearchFilters);
export default connect(mapStatetoProps, actions)(withStyles(styles)(SearchFilters));
