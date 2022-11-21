import React from 'react'

import './ItemsList.css';
import Item from "../Item/Item";

const ItemsList = (props) => {

    const requestRemoveItemById = (itemId) => {
        props.requestRemoveItemById(itemId);
        console.log('sters2 - ', itemId);
    }


    if (props.items.length === 0) {
        return (<p>No items found </p>);
    }

    return (
        <ul className="items-list">
            {
                props.items.map(((item) => {
                    return (
                        <li key={item.id}>
                            <Item
                                options={item}
                                requestRemoveItemById={requestRemoveItemById}
                            />
                        </li>
                    )
                }))
            }
        </ul>
    );
}

export default ItemsList;