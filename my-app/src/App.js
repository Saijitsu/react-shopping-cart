import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Nav from './Nav';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import products from './static-data';
import './App.css';

class App extends Component {

  state = {
    activeTab: 0,
    cart: []
  }

  //fonction add to cart

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item.id]
    })
  }

  handleRemoveToCart = (item) => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
      cart: [...this.state.cart.splice(0, index),
        ...this.state.cart.splice(index + 1)]
    })
  }

  tabChange = (index) => {
    this.setState({ activeTab: index });
  }

  renderCart() {
    // item number in cart

    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});

    // Create an items array
    // Create an unique ID
    let uniqueID = new Date();

    let cartItems = Object.keys(itemCounts).map(itemId => {
      // find by id
      let item = products.find(item =>

        item.id === parseInt(itemId, itemId.length + uniqueID)
      );

      // Creat new item
      return {
        ...item,
        count: itemCounts[itemId]
      }
    });

    return (<CartPage items={cartItems} onAddOne={this.handleAddToCart} onRemoveOne={this.handleRemoveToCart}/>)
  }

  /* Rappel ES6 avec Reduce */
  /*
    let a =[1,2,3,4];
    let total = a.reduce( (sum,value) =>{
        
        return sum + value;
        
    },0)
  
  
   //      (0,1)  => 1
           (1,2)  => 3
           (3,3)  => 6
           (6,4)  => 10
      // la fonction reduce retourne le dernier element
  
  */
  /*
    const  a =[1,2,3,4];
    let total =0;
    
    for( let i=0; i < a.length; i++){
        total +=a[i]  // total = total + a[i]
    }
  
  */

  renderContent() {

    switch (this.state.activeTab) {

      default:
      case 0: return <ItemPage items={products} onAddToCart={this.handleAddToCart} />;
      case 1: return this.renderCart();

    }
  }


  render() {

    let { activeTab } = this.state;

    return (

      <div className="App">
        <h1>Shopping</h1>
        <h3> You have {this.state.cart.length} item(s) in your Cart</h3>
        <Nav activeTab={activeTab} onTabChange={this.tabChange} />

        {this.renderContent()}

      </div>

    );
  }
}

export default App;
