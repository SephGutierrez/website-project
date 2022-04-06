import React, { Component } from 'react';

import { Link } from "react-router-dom";
import '../../style.css'

class NotFound extends Component {
  render() {

    return ( 
        <body className="bg-purple">
        
        <div className="stars">
            <div className="custom-navbar">
                <div className="brand-logo">
                    <img src="http://salehriaz.com/404Page/img/logo.svg" alt="ad" width="80px" />
                </div>
                <div className="navbar-links">
                   
                </div>
            </div>
            <div className="central-body">
                <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" alt="asa" width="300px" />
                <Link to="/" className="btn-go-home" target="_blank">GO BACK HOME</Link>
            </div>
            <div className="objects">
                <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" alt="asd" width="40px" />
                <div className="earth-moon">
                    <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" alt="asd" width="100px" />
                    <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" alt="asd" width="80px" />
                </div>
                <div className="box_astronaut">
                    <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" alt="asd" width="140px" />
                </div>
            </div>
            <div className="glowing_stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>

            </div>

        </div>

    </body>
     );
}

}
export default NotFound;