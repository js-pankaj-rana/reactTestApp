import React, { Component } from 'react';
class Footer extends Component {
  constructor(){
     super();

      this.state = {
          companybio: 'asdfasdfas',
          companycpright: 'ehhl',
        }
  }
   
  render() {
    const data = this.state.companybio;

    return (

        <footer className="page-footer teal">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Our Goal</h5>
              <p className="grey-text text-lighten-4">The Louvre for us is a wonderful experience. Because it continues; we didn't get cut off. It was actually a continuous involvement all the way to build a best quality and solid meterial for customer, and a lot of seller have come into the market and gone, come and gone; but We are still here.</p>
        </div>
            <div className="col l3 s12 offset-m2">
              <h5 className="white-text">Utility</h5>
              <ul>
                <li><a className="white-text" href="/products">Products</a></li>
                <li><a className="white-text" href="/support">Customer support</a></li>
                <li><a className="white-text" href="/stores">Showrooms</a></li>
                <li><a className="white-text" href="http://ranasteelco.com">ranasteelco.com</a></li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Talk with us</h5>
              <ul>
                <li><a className="white-text" href="#!">Complaints</a></li>
                <li><a className="white-text" href="#!">Reviews</a></li>
                <li><a className="white-text" href="#!">Need Assisitant</a></li>
                <li><a className="white-text" href="#!">Web Difficulties</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
              All Rights Reserved. &copy; Copyright 2018 <a className="brown-text text-lighten-3" href="http://www.ranasteelco.com">Rana Steel Company Pvt. Limited.</a>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;


