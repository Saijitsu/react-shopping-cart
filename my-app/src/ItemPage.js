import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './ItemPage.css'; si on veut créer le css pour ce composant
import Item from './Item';

function ItemPage({ items, onAddToCart }) {

    return (
        <ul className="ItemPage-items">
            {
                items.map(item =>
                    <li key={item.id} className="ItemPage-item">

                        <Item item={item} onAddToCart={() => onAddToCart(item)}>
                            <button className="Item-addToCart" onClick={() => onAddToCart(item)}> Add to Cart </button>
                        </Item>
                    </li>
                )
            }
        </ul>
    );
}

// Validation des types ici mon tableau est un Array
ItemPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default ItemPage;