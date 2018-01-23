import React, { Component } from 'react';

class Homecollectiontwo extends Component {
  constructor(){
    super();

      this.state = {
          imageOne: 'images/home-collection-3.jpg',
          imageTwo: 'images/home-collection-2.jpg',
          imageThree: 'images/home-collection-1.jpg'
      }
  }
  render() {
    const img = this.state;
    return (
    <div className="container">    
      <div className="row  mt-20">
        <div className="col s12 m4">
          <div className="card large hoverable">
            <div className="card-image">
              <img src={img.imageOne} alt="images" />
            </div>
            <div className="card-content">
              <span className="card-title">Quality Effectively</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="" className="btn waves-effect waves-light">Explore</a>
            </div>
          </div>
        </div>
      <div className="col s12 m4">
          <div className="card large hoverable">
            <div className="card-image">
              <img src={img.imageTwo} alt="images" />
            </div>
            <div className="card-content">
              <span className="card-title">Customer's Review</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="" className="btn waves-effect waves-light">Explore</a>
            </div>
          </div>
          </div>
         <div className="col s12 m4">
          <div className="card large hoverable">
            <div className="card-image">
              <img src={img.imageThree} alt="images" />
            </div>
            <div className="card-content">
              <span className="card-title">100% Geniun Product</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="" className="btn waves-effect waves-light">Explore</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      )
  }
}

export default Homecollectiontwo;
