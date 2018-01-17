import React, { Component } from 'react';
import Navbar from './components/navbar.component.js';
import Footer from './components/footer.component.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <Footer />
      </section> 
    );
  }
}

export default App;
