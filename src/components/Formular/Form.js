import React, {useState} from "react";

import './Form.css';

const Form = (props) => {

    const [titleValue, setTitleValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [dateValue, setDateValue] = useState('');


    const submitHandler = (event) => {
        event.preventDefault();

        const itemData = {
            title: titleValue,
            price: +priceValue,
            date: new Date(dateValue)
        }

        props.onSaveItemDate(itemData);


        setTitleValue('');
        setPriceValue('');
        setDateValue('');


        // console.log(itemData);
    }
    const changeTitleHandler = (event) => {
        setTitleValue(event.target.value);
    }
    const changePriceHandler = (event) => {
        setPriceValue(event.target.value);
    }
    const changeDateHandler = (event) => {
        setDateValue(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="formular-fields">
                <div className="formular-field">
                    <label>title</label>
                    <input type="text" value={titleValue} onChange={changeTitleHandler}/>
                </div>
                <div className="formular-field">
                    <label>price</label>
                    <input type="number" step="0.01" min="0.01" value={priceValue} onChange={changePriceHandler}/>
                </div>
                <div className="formular-field">
                    <label>date</label>
                    <input type="date" value={dateValue} onChange={changeDateHandler}/>
                </div>
                <div className="formular-action">
                    <button className="btn" type="submit">add item</button>
                    <button className="btn" type="button" onClick={props.onCloseFormular}>cancel</button>
                </div>
            </div>

        </form>
    )
}

export default Form;