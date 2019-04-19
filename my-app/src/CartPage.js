import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function CartPage({ items, onAddOne, onRemoveOne }) {
    return (
        <ul className="CartPage-items">
            {
                items.map(item =>
                    <li key={item.id} className="CartPage-items">

                        <Item item={item}>
                            <button onClick={() => onAddOne(item)}> + </button>
                            <span> Quantity: {item.count} </span>
                            <button onClick={() => onRemoveOne(item)}> - </button></Item>
                    </li>
                )
            }
        </ul>
    )
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
}

export default CartPage