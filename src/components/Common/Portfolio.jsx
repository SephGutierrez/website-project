import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import img1 from '../Assets/pic1.jpg'
import img2 from '../Assets/pic2.jpg'
import img3 from '../Assets/pic3.jpg'
import img4 from '../Assets/pic4.jpg'
import img5 from '../Assets/pic5.jpg'
import img6 from '../Assets/pic6.jpg'

//reusable component >> PortfolioItem


const portfolio = [
    {
        title: 'Threads',
        subtitle: 'Illustration',
        image: img1
    },
    {
        title: 'Explore',
        subtitle: 'Graphic Design',
        image: img2
    },
    {
        title: 'Finish',
        subtitle: 'Identity',
        image: img3
    },
    {
        title: 'Lines',
        subtitle: 'Branding',
        image: img4
    },
    {
        title: 'Southwest',
        subtitle: 'Website Design',
        image: img5
    },
    {
        title: 'Window',
        subtitle: 'Photography',
        image: img6
    }
];


class Portfolio extends Component {
    render() { 
        return (
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {portfolio.map((item,index) => {
                        return <PortfolioItem {...item} key = {index} />
                    })}
                </div>
            </div>
        </section>
        );
    }
}
 
export default Portfolio;