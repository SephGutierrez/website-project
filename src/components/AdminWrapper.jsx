
import React, { Component } from 'react';
import './Assets/css/admin.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CssBaseline from '@mui/material/CssBaseline';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from './Common/Sidebar';

//DRAWER MATERIAL-UI
import { Drawer } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from "@material-ui/icons";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Divider } from '@material-ui/core';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'row wrap',
    width: '100%'
  },
  toolbar: {
    paddingRight: 24
  },
  appBar: {
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
  appBarShift: {
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
  }),
  },
  appBarSpacer: theme.mixins.toolbar,
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'noWrap',
    width: drawerWidth
  },
  
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
  }
});



class AdminWrapper extends Component {
  constructor(props){
    super(props);

    this.state = {
      open: true
    } 
  }

  handleDrawerOpen = (e) => {
    this.setState({open: true});
  }

  handleDrawerClose = (e) => {
    this.setState({open: false});
  }

  render() { 
    const {classes} = this.props;

    return (
      <div id="admin-page" className={classes.root} >
        <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
        <CssBaseline />
          <Toolbar className={classes.toolbar}>
              <IconButton>
                 <MenuIcon />
              </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              >Admin</Typography>
              
          </Toolbar>
        </AppBar>
        <Drawer
          classes={{
            paper: classes.drawerPaper}}
          variant='permanent'
          open={true}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}> 
                  <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <Sidebar />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
               {this.props.children}
          </main>

          
      </div>
    );
  }
}
 
export default withStyles(styles)(AdminWrapper);
