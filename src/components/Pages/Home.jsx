import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../Assets/header-bg.jpg';


// Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';



class Home extends Component {
    render() {
        return(
            <div>
              <Header 
                title = "Welcome to React JS"
                subtitle = "Good to see you!"
                buttonText = "Tell me more"
                link ="/services"
                showButton = {true}
                image = {image}
              />

              <Services />
              <Portfolio />
              <Team />
            </div>
        );
    }
}

export default Home;

