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
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import ViewDocuments from './ViewDocuments';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import * as auth from '../auth/auth';


const styles = theme => ({
    landingPage:{
       position: 'relative',
       marginTop: '90px'
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
    },
    profilePic:{
       textAlign : 'center',
       margin:'auto'
    },
    card: {
      maxWidth: 700,
      margin: 'auto'
    },
    avatar:{
       margin: '5px auto',
       width: 80,
       height: 80,
    },
    divider:{
       marginBottom: 20,
       marginTop: 10
    },
    heading: {
       textTransform: 'uppercase',
       fontSize: 'initial'
    },
    projectHeading:{
        fontWeight:800,
        paddingBottom: 10
    }
});


class Profile extends Component{
      constructor(){
          super();
          this.state = {
              project_details : false
          }
      }
      componentDidMount(){
        this.setState({
             project_details: false
        })
      }
      projectDetails = ()=>{
          this.setState({
               project_details: true
          })
      }
      render(){
          const {classes} = this.props;
          return(
            <Fragment>
             <Header/>
             <div className={classes.landingPage}>
                  <Card className={classes.card}>
                    <CardContent>
                        <div className={classes.profilePic}>
                            <Avatar src="https://picsum.photos/200/300?random" className={classes.avatar}>
                             <ImageIcon />
                            </Avatar>
                            <Typography>
                                Himanhu Savita
                            </Typography>
                        </div>
                        <Divider className={classes.divider}/>
                        {!this.state.project_details &&
<Fragment>
  <Grid container spacing={24}>
     <Grid item xs={12} sm={12}>
       <Typography fontWeight="fontWeightMedium">
           Basic Information -
       </Typography>
     </Grid>
     <Grid item xs={12} sm={4}>
         <Typography fontWeight="fontWeightMedium">
             Skills  :
         </Typography>
     </Grid>
     <Grid item xs={12} sm={5}>
          <Typography fontWeight="fontWeightMedium">
             Web development
          </Typography>
     </Grid>
     <Grid item xs={12} sm={4}>
         <Typography fontWeight="fontWeightMedium">
             Rating  :
         </Typography>
     </Grid>
     <Grid item xs={12} sm={2}>
       <div>
           <i className="material-icons">grade</i>
           <i className="material-icons">grade</i>
           <i className="material-icons">grade</i>
        </div>
     </Grid>
     <Grid item xs={12} sm={4}>
         <div>
           <Button color="primary" variant="contained" onClick={this.projectDetails}>project details</Button>
         </div>
     </Grid>

     <Grid item xs={12} sm={4}>
         <Typography fontWeight="fontWeightMedium">
             Work Experience  :
         </Typography>
     </Grid>
     <Grid item xs={12} sm={5}>
          <Typography fontWeight="fontWeightMedium">
             0-3 Years
          </Typography>
     </Grid>
   </Grid>
   <Divider className={classes.divider}/>
   <Grid container spacing={24}>
    <Grid item xs={12} sm={12}>
      <Typography className={classes.heading}>
          Documents Uploaded -
      </Typography>
    </Grid>
    <Grid item xs={12} sm={9}>
        <Typography fontWeight="fontWeightMedium">
           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
      <ViewDocuments/>
    </Grid>
    <Grid item xs={12} sm={9}>
        <Typography fontWeight="fontWeightMedium">
           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
      <ViewDocuments/>
    </Grid>
    <Grid item xs={12} sm={9}>
        <Typography fontWeight="fontWeightMedium">
           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </Typography>
    </Grid>
    <Grid item xs={12} sm={3}>
         <ViewDocuments/>
    </Grid>
</Grid>
</Fragment>
        }
        {this.state.project_details &&
                        <Grid container spacing={24}>
                            <Grid item xs={12} sm={12}>
                              <Button color="primary" variant="contained" onClick={  ()=>{this.setState({project_details: false})}   }>back</Button>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                              <Typography className={classes.heading}>
                                  Previous Projects -
                              </Typography>
                            </Grid>

                          <ExpansionPanel className={classes.alignLeft}>
                              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                 <Grid container spacing={24} className={classes.basicInfo}>
                                       <Grid item xs={12} sm={9}>
                                           <Typography className={classes.projectHeading}>
                                               Business as Unusual
                                           </Typography>
                                           <Typography fontWeight="fontWeightMedium">
                                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                           </Typography>
                                       </Grid>
                                       <Grid item xs={12} sm={3}>
                                         <div>
                                             <i className="material-icons">grade</i>
                                             <i className="material-icons">grade</i>
                                             <i className="material-icons">grade</i>
                                             <i className="material-icons">grade</i>
                                          </div>
                                       </Grid>
                                 </Grid>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} sm={12}>
                                      <Typography className={classes.heading}>
                                        Description -
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
                                 <Grid container spacing={24} className={classes.basicInfo}>
                                       <Grid item xs={12} sm={9}>
                                           <Typography className={classes.projectHeading}>
                                              Gray Panthers
                                           </Typography>
                                           <Typography fontWeight="fontWeightMedium">
                                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                           </Typography>
                                       </Grid>
                                       <Grid item xs={12} sm={3}>
                                         <div>
                                             <i className="material-icons">grade</i>
                                             <i className="material-icons">grade</i>
                                          </div>
                                       </Grid>
                                 </Grid>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} sm={12}>
                                      <Typography className={classes.heading}>
                                        Description -
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
                                 <Grid container spacing={24} className={classes.basicInfo}>

                                       <Grid item xs={12} sm={9}>
                                           <Typography className={classes.projectHeading}>
                                              Liquid Sky
                                           </Typography>
                                           <Typography fontWeight="fontWeightMedium">
                                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                           </Typography>
                                       </Grid>
                                       <Grid item xs={12} sm={3}>
                                         <div>
                                             <i className="material-icons">grade</i>
                                             <i className="material-icons">grade</i>
                                          </div>
                                       </Grid>
                                 </Grid>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} sm={12}>
                                      <Typography className={classes.heading}>
                                        Description -
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

                        </Grid>
                      }

                    </CardContent>
                  </Card>
             </div>
           </Fragment>
          )
      }
}

function mapStatetoProps({auth}){
   return {auth};
}
export default connect(mapStatetoProps)(withStyles(styles)(Profile));
