import React, { Component } from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import {connect} from 'react-redux';
import * as Yup from 'yup';
import * as AuthActions from '../store/actions/authActions';

const fields = [
  {
    name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name'
  },
  {
    name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email'
  },
  {
    name: 'password', elementName: 'input', type: 'password', placeholder: 'Your password'
  },
  {
    name: 'password2', elementName: 'input', type: 'password', placeholder: 'Your password again'
  }

]

class Signup extends Component {

  render() { 
    return (
      <div className="login-page">
        <div className="container">
          <div className="login-form">
            <div className="row">
              <h1>Sign Up</h1>
            </div>
            <div className="row">
              <form onSubmit={e => {
                e.preventDefault();
                this.props.register(this.props.values.name, this.props.values.email, this.props.values.password);
              }}>
              {fields.map((field, index) => {
                return (
                  <div className='col-md-6'>
                      <Field
                        key={index}
                        {...field}
                        value={this.props.values[field.name]}
                        name={field.name}
                        onChange= {this.props.handleChange}
                        onBlur= {this.props.handleBlue}
                        touched = {(this.props.touched[field.name])}
                        errors = {this.props.errors[field.name]}
                />
                </div>
                )
              })}
              <div className='col-md-12'>
                <p className='text-danger text-center'>{this.props.auth.error || ''}</p>
                <button className='btn btn-primary'>Sign Up</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: (name, email, pass) => {
      dispatch(AuthActions.register(name, email,pass));
    }
  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    password: '',
    password2: ''
  }),

  validationSchema: Yup.object().shape({
      name: Yup.string().required('We need ur name'),
      email: Yup.string().email('Email is invalid').required('U need to login with email address'),
      password: Yup.string().min(8, 'Password must at least 8 characters').required('You need to enter your password.'),
      password2: Yup.string().required('You need to enter pass again').test('pass-match', 'password did not match', function(value){
        const {password} = this.parent;
        return password === value;
      })
  }),
  handleSubmit: (values, {setSubmitting}, login) => {
    console.log("Register credentials", values);
    // alert('You submitted the form, Thanks!', JSON.stringify(values));
  }
})(Signup));