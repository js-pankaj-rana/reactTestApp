import React, { Component } from 'react';
class Footer extends Component {
  constructor(){
     super();

      this.state = {
          goalMsg: 'The Louvre for us is a wonderful experience. Because it continues; we didn\'t get cut off. It was actually a continuous involvement all the way to build a best quality and solid meterial for customer, and a lot of seller have come into the market and gone, come and gone; but We are still here.',
          copyRight: 'All Rights Reserved. \u00A9 Copyright 2018',
          talkWithUs: [{
                  linkLabel: 'Complaints',
                  linkTo:'/complaint'
                },{
                  linkLabel: 'Reviews and Rate',
                  linkTo:'/reviewsnrate'
                },{
                  linkLabel: 'Need Assistant',
                  linkTo:'/assistant'
                },{
                  linkLabel: 'Web Difficulties',
                  linkTo:'/complaint'
                }],
          utilityLink: [{
                  linkLabel: 'Products',
                  linkTo:'/products'
                },
                {
                  linkLabel: 'Customer support',
                  linkTo:'/support'
                },
                {
                  linkLabel: 'Know our branch',
                  linkTo:'/branch'
                },
                {
                  linkLabel: 'ranasteelco.com',
                  linkTo:'http://www.ranasteelco.com'
                }
                ]

        }
  }
   
  render() {
    const data = this.state;
    return (

        <footer className="page-footer teal">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Our Goal</h5>
              <p className="grey-text text-lighten-4">{data.goalMsg}</p>
        </div>
            <div className="col l3 s12 offset-m2">
              <h5 className="white-text">Utility</h5>
              <ul>
                {
                  this.state.utilityLink.map( function(link, index, id) {
                    return <Utilitylink key={index} label={link.linkLabel} anchorLink={link.linkTo}  />
                  })
                  }
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Talk with us</h5>
              <ul>{
                  this.state.talkWithUs.map( function(link, index, id) {
                    return <Talkwithus key={index} label={link.linkLabel} anchorLink={link.linkTo}  />
                  })
                  }
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
              {data.copyRight} <a className="brown-text text-lighten-3" href="http://www.ranasteelco.com">Rana Steel Company Pvt. Limited.</a>
          </div>
        </div>
      </footer>

    );
  }
}

class Talkwithus extends React.Component{
  render(){
    return(
      <li>
        <a className="white-text" href={this.props.anchorLink}>{this.props.label}</a>
      </li>
    )
  }
}


class Utilitylink extends React.Component{
  render(){
    return(
      <li>
        <a className="white-text" href={this.props.anchorLink}>{this.props.label}</a>
      </li>
    )
  }
}


export default Footer;


