import React, { Component } from 'react';

const Nav = ({ activeTab, onTabChange }) => (
    <nav className="App-nav">
        <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
            <NavLink index={0} onClick={onTabChange}> Products </NavLink>
        </li>
        <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
            <NavLink index={1} onClick={onTabChange}> Cart </NavLink>
        </li>
    </nav>
);

class NavLink extends Component {

    handleClick = () => {
        this.props.onClick(this.props.index)
    }
    render() {
        return (
            <a onClick={this.handleClick}>
                {this.props.children}</a>
        )
    }
}

export default Nav;