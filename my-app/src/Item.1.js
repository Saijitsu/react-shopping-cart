import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item, onAddToCart }) => (

    <div className="Item">

        {/* block left */}
        <div className="Item-left">

            <div className="Item-title"> {item.name}</div>
            <div className="Item-description"> {item.description}</div>
        </div>
        {/* block end left */}


        {/* block right */}
        <div className="Item-right">

            <div className="Item-price"> {item.price}</div>

            <button className="Item-addToCart" onClick={onAddToCart}> Add to Cart </button>
        </div>
        {/* block end right */}

    </div>
)

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired
}

export default Item;
