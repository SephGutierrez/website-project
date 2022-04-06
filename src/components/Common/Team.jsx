import React, { Component } from 'react';
import TeamMember from './TeamMember';

import image1 from '../Assets/member1.jpg';
import image2 from '../Assets/hansohee.jpeg';
import image3 from '../Assets/member3.jpg';

const member = [
    {
        name: 'Hutao',
        role: 'Pyro Dmg',
        image: image1
    },
    {
        name: 'Nabi',
        role: 'Cryo Dmg',
        image: image2
    },
    {
        name: 'Razor',
        role: 'Electro Dmg',
        image: image3
    }

];

class Team extends Component {
  
    render() { 
        return (
            <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                {member.map((mem,index) => {
                        return <TeamMember {...mem} key = {index} />
                    })}
                    
                   
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        );
    }
}
 
export default Team;