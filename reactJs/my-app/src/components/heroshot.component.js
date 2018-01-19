import React, { Component } from 'react';
class Heroshot extends Component {

  render() {
     let img = './images/metallic-image1.jpg';
     let opacity = {
      'opacity': 1
     }
    return (
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center teal-text text-lighten-2">Parallax Template</h1>
            <div className="row center">
              <h5 className="header col s12 text-white">A group of the experince</h5>
            </div>
            <div className="row center">
              <a href="" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
            </div>
        </div>
        </div>
        <div className="parallax">
           <img src={img} alt="Unsplashed background img 2" style={opacity} />
         </div>  
      </div>
      )
  }
}

export default Heroshot;