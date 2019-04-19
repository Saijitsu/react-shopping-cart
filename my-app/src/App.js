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

    let cartItems = Object.keys(itemCounts).map(itemId => {
      // find by id
      let item = products.find(item =>
        item.id === parseInt(itemId, 1)
      );

    // Creat new item
    return {
      ...item,
      count: itemCounts[itemId]
    }
  });

  return( <CartPage items = { cartItems } />)
}

/* Rappel ES6 avec Reduce
const a=[1,2,3,4]
let total= a.reduce( (sum, value) => {
  return sum + value;
}, 0)

// (0,1) => 1
// (1,2) => 3
// (3,3) => 6
// (6,4) => 10  the function result = last element

const a=[1,2,3,4]
for (i=0; i <a[i].lengh; i++){
  let total += a[i]
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
