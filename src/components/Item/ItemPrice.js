import React from "react";

import './ItemPrice.css';

const ItemPrice = (props) => {
    return (
        <div className="item-price">
            &euro; { props.value }
        </div>
    )
}

export default ItemPrice;