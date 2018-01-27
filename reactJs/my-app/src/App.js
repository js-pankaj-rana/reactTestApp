import React, { Component } from 'react';
import Navbar from './components/navbar.component.js';
import Footer from './components/footer.component.js';
import Heroshot from './components/heroshot.component.js';
import Homeparallex from './components/homeparallex.component.js';
import Homeparallextwo from './components/homeparallextwo.component.js';
import Homecollectiontwo from './components/homecollectiontwo.component.js';
import Homecollection from './components/homecollection.component.js';
import Homeaboutus from './components/homeaboutus.component.js';


class App extends Component {
  render() {
    return (
      <section>
         <Navbar />
         <Heroshot />
         <Homecollection />
         <Homeparallex />
         <Homecollectiontwo />
         <Homeparallextwo />
         <Homeaboutus />
         <Footer />
      </section> 
    );
  }
}

export default App;
