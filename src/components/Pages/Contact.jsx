import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email' },
            { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number' }
        ],
        [
            {   name: 'message',
                elementName: 'textarea',
                type: 'text',
                placeholder: 'Compose your message'
            }
        ]
    ]

}

class Contact extends Component {
    
    render() { 
        return (
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text -center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                
                <form onSubmit={this.props.handleSubmit} data-sb-form-api-token="API_TOKEN" >
                    <div className="row align-items-stretch mb-5">
                       {fields.sections.map((section, sectionIndex) => {
                           console.log("Rendering section: ", sectionIndex, 'with', section);
                           return (
                               <div className='col-md-6' key={sectionIndex}>
                                {section.map((field, i) => {
                                        return <Field {...field} key={i} 
                                        value = {this.props.values[field.name]}
                                        name = {field.name}
                                        onChange = {this.props.handleChange} 
                                        onBlur = {this.props.handleBlur}
                                        touched = {(this.props.touched[field.name])}
                                        errors = {this.props.errors[field.name]}
                                        />
                                })}
                               </div>
                           )
                       })}
                          
                          
                    </div>
              
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                   
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase enabled" 
                     type="submit" 
                    
                     >Send Message</button></div>
                </form>
            </div>
        </section> 
        );
    }
}


 
export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),

    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Minimum or 3 characters').required('Please input name.'),
        email: Yup.string().email('Valid email is needed').required('Please input email.'),
        phone: Yup.string()
        .min(11, 'Please provide 11 digit phone number')
        .required('Please input phone number.'),
        message: Yup.string()
        .min(50, 'Please provide further details')
        .required('Message is required')
    }),



    handleSubmit: (values, {setSubmitting}) => {
        console.log('VALUES', values);
        alert('You submitted the form, Thanks!', JSON.stringify(values));
    }
})(Contact);