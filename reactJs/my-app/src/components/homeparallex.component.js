import React, { Component } from 'react';
import {Parallax} from 'react-materialize'

class Homeparallex extends Component {
  render() {
    let imageUrl = './images/background2.jpg'
    let opacity = {
      'opacity': 1
    }

    return (
       <section>
       <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
              </div>
            </div>
          </div>
          <div className="parallax">
            <img src={imageUrl} alt="Unsplashed background img 2" style={opacity} />
          </div>
        </div>

          <Parallax className="hide" imageSrc="http://materializecss.com/images/parallax2.jpg"/>
        </section>
        )
      }
  }

export default Homeparallex;