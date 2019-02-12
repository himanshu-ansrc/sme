import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link , withRouter} from 'react-router-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';

import {connect} from 'react-redux'
import * as actions  from '../actions'

const styles = theme => ({
  root: {
    width: '90%',
    margin: 'auto',
    textAlign: 'center'
  },
  alignLeft:{
        textAlign: 'left'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  basicInfo:{
      paddingLeft : 15
  },
  avatar:{
     margin: '10px auto',
     width: 65,
     height: 65,
  },
  heading: {
     textTransform: 'uppercase',
     fontSize: 'initial'
  }
});

class ListCandidates extends Component{
  constructor(){
     super();
  }
  getCandidateId = (e)=>{
      this.props.candidateId(e.target.id);
      console.log(this.props);
      window.location.href = "/candidate-profile";
      //this.props.history.push('/candidate-profile')
  }
  rand = ()=>(Math.floor(Math.random() * (10000 - 5)) + 4)
  render(){
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
      <CardContent>
      <Typography variant="h6" gutterBottom>
         Result
      </Typography>
        <ExpansionPanel className={classes.alignLeft}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
             <Link to="/candidate-profile">
               <Typography component={'span'} className={classes.heading}>
                 <Avatar src="https://picsum.photos/200/300?random" className={classes.avatar}/>
               </Typography>
             </Link>
             <Grid container spacing={24} className={classes.basicInfo}>
               <Grid item xs={12} sm={2}>
                   <Typography>Name : </Typography>
               </Grid>
               <Grid item xs={12} sm={3}>
                  <Typography>John Doe </Typography>
               </Grid>
               <Grid item xs={12} sm={7}>
                  <Typography>
                    <i className="material-icons">grade</i>
                    <i className="material-icons">grade</i>
                    <i className="material-icons">grade</i>
                    <i className="material-icons">grade</i>
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={2}>
                   <Typography>Skills : </Typography>
               </Grid>
               <Grid item xs={12} sm={10}>
                  <Typography>Consectetur, Adipiscing, Suspendisse,  Malesuada </Typography>
               </Grid>

             </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                  <Typography className={classes.heading}>
                    Summary -
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel className={classes.alignLeft}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Link to="/candidate-profile">
                <Typography component={'span'} className={classes.heading}>
                  <Avatar src="https://picsum.photos/200/300?random" className={classes.avatar} />
                </Typography>
              </Link>
              <Grid container spacing={24} className={classes.basicInfo}>
                <Grid item xs={12} sm={2}>
                    <Typography>Name : </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                   <Typography>John Doe </Typography>
                </Grid>
                <Grid item xs={12} sm={7}>
                   <Typography>
                     <i className="material-icons">grade</i>
                     <i className="material-icons">grade</i>
                     <i className="material-icons">grade</i>
                   </Typography>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Typography>Skills : </Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                   <Typography>Consectetur, Adipiscing, Suspendisse,  Malesuada </Typography>
                </Grid>

              </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                  <Typography className={classes.heading}>
                    Summary -
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel className={classes.alignLeft}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Link to="/candidate-profile">
                <Typography component={'span'} className={classes.heading}>
                  <Avatar src="https://picsum.photos/200/300?random" className={classes.avatar} />
                </Typography>
              </Link>
              <Grid container spacing={24} className={classes.basicInfo}>
                <Grid item xs={12} sm={2}>
                    <Typography>Name : </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                   <Typography>John Doe </Typography>
                </Grid>
                <Grid item xs={12} sm={7}>
                   <Typography>
                     <i className="material-icons">grade</i>
                     <i className="material-icons">grade</i>
                     <i className="material-icons">grade</i>
                     <i className="material-icons">grade</i>
                   </Typography>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <Typography>Skills : </Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                   <Typography>Consectetur, Adipiscing, Suspendisse,  Malesuada </Typography>
                </Grid>

              </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                  <Typography className={classes.heading}>
                    Summary -
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel className={classes.alignLeft}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Link to="/candidate-profile">
              <Typography component={'span'} className={classes.heading}>
                <Avatar src="https://picsum.photos/200/300?random" className={classes.avatar} />
              </Typography>
            </Link>
            <Grid container spacing={24} className={classes.basicInfo}>
              <Grid item xs={12} sm={2}>
                  <Typography>Name : </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                 <Typography>John Doe </Typography>
              </Grid>
              <Grid item xs={12} sm={7}>
                 <Typography>
                   <i className="material-icons">grade</i>
                 </Typography>
              </Grid>

              <Grid item xs={12} sm={2}>
                  <Typography>Skills : </Typography>
              </Grid>
              <Grid item xs={12} sm={10}>
                 <Typography>Consectetur, Adipiscing, Suspendisse,  Malesuada </Typography>
              </Grid>
            </Grid>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                  <Typography className={classes.heading}>
                    Summary -
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </Grid>
            </Grid>
          </ExpansionPanelDetails>

        </ExpansionPanel>
        </CardContent>
      </Card>
    );
  }
}

ListCandidates.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(state=>state, actions)(withStyles(styles)(ListCandidates));
