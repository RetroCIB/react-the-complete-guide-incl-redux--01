import React from "react";

import './ItemTitle.css';

const ItemTitle = (props) => {
    return (
        <div className="item-title">
            { props.value }
        </div>
    )
}

export default ItemTitle;