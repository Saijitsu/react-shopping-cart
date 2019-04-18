import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Nav from './Nav';
import ItemPage from './ItemPage';
import products from './static-data';
import './App.css';

class App extends Component {

 state = {
   activeTab: 0,
   cart:[]
 }

 //fonction add to cart

 handleAddToCart = (item) =>{
   this.setState({
     cart: [...this.state.cart, item.id]
   })
 }

 tabChange = (index) => {
   this.setState({ activeTab: index });
 }

 renderContent() {

   switch (this.state.activeTab) {

     default:
     case 0: return <ItemPage items={products} onAddToCart={this.handleAddToCart} />;
     case 1: return <span>Cart</span>;

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
