import React, { Component } from 'react';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';


import FaceIcon from '@mui/icons-material/Face';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Link as RouterLink } from 'react-router-dom';


function ListItemLink(props) {
  return <ListItem button component= {RouterLink} {...props} />;
}

class Sidebar extends Component {
  render() { 
    return (
        <List>              
          <ListItemLink to= "/admin">
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                <ListItemText primary="Dashboard" />
          </ListItemLink>

          <ListItemLink to="/admin/posts">
                  <ListItemIcon>
                  <PostAddIcon />
                  </ListItemIcon>
                <ListItemText primary="Posts" />
          </ListItemLink>

          <ListItemLink to="/admin/users">
                  <ListItemIcon>
                  <FaceIcon />
                  </ListItemIcon>
                <ListItemText primary="Users" />
          </ListItemLink>
        </List>
    );
  }
}
 
export default Sidebar;