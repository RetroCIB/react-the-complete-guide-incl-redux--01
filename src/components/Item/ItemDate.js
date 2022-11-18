import React from 'react'

import './ItemDate.css'

const ItemDate = (props) => {
    const year = props.value.getFullYear();
    const month = props.value.toLocaleString('default', { month: 'long' });
    const day = props.value.toLocaleString('default', { day: '2-digit' });

    return (
        <div className="item-date">
            <div className="item-date__day">{day}</div>
            <div className="item-date__month">{month}</div>
            <div className="item-date__year">{year}</div>
        </div>
    )
}

export default ItemDate;