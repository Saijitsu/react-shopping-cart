import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import './App.css';

class App extends Component {

  renderContent(){
    return <span>vide</span>
  }


  render() {
    return (
      <div className="App">
        <h1>Shopping</h1>
        <Nav />
        {this.renderContent()}
      
      </div>
     
    );
  }
}

export default App;
