import React, { Component } from 'react';
import SingleService from './SingleService';
import Header from '../Common/Header';
import image from '../Assets/services.jpg';

const services = [
    {
        title: 'E-Commerce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, veritatis.',
        icon: 'fa-shopping-cart'
    },
    {
        title: 'Responsive Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, veritatis.',
        icon: 'fa-laptop'
    },
    {
        title: 'Web-Security',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, veritatis.',
        icon: 'fa-lock'
    }
];

class Services  extends Component {
    render() { 
        return (
            
            <div>
              <Header 
                title = "Services"
                subtitle = "It Was A Pleasure Working With You"
                showButton = {false}
                image = {image}
              />


            <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet.</h3>
                </div>
                <div className="row text-center">
                    {services.map((service, index) => {
                        return <SingleService  {...service} key = {index} />
                    })}
                  
                </div>
            </div>
        </section>
        </div>
        );
    }
}
 
export default Services;