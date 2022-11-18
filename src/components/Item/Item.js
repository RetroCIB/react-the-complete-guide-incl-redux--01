import React from 'react';
import './Item.css';

import ItemDate from './ItemDate';
import ItemTitle from "./ItemTitle";
import ItemPrice from "./ItemPrice";

const Item = (props) => {
    return (
        <div className="item">

            <div className="item-content item-content__left">
                <ItemDate value={props.options.date}></ItemDate>
            </div>

            <div className="item-content item-content__right">

                <div className="item-details">
                    <ItemTitle value={props.options.title}></ItemTitle>
                    <ItemPrice value={props.options.price}></ItemPrice>
                </div>

                <div className="item-actions">
                    <button className="item-action">
                        -
                    </button>
                    <button className="item-action">
                        -
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Item;