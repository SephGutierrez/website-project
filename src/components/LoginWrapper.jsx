import React, { Component } from 'react';
import './Assets/css/admin.css';


class LoginWrapper extends Component {
  render() { 
    return (
      <div className="admin-page">
        
          {this.props.children}
      </div>
    );
  }
}
 
export default LoginWrapper;