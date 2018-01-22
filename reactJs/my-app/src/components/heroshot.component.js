import React, { Component } from 'react';
class Heroshot extends Component {
  constructor(){
    super();
    this.state = {
      title: 'Welcome to Rana Steel Co.',
      titleAttr: 'Rana Steel Company Pvt. Ltd.',
      subTitle: 'A group of Almirah Expertise'
    }

  }
  render() {
      const heroshot = this.state;
     let img = './images/background1.jpg';
     let opacity = {
      'opacity': 1
     }
    return (
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center text-white darken-4" title={heroshot.titleAttr}>{heroshot.title}</h1>
            <div className="row center">
              <h5 className="header col s12 text-white">{heroshot.subTitle}</h5>
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