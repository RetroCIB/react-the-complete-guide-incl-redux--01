import React, {useState} from "react";

import './Formular.css';

const Formular = () => {

    const [titleValue, setTitleValue] = useState('');
    const [priceValue, setPriceValue] = useState(0.01);
    const [dateValue, setDateValue] = useState('');


    const submitHandler = (event) => {
        event.preventDefault();
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

        <form className="formular" onSubmit={submitHandler}>
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
                    <button>add item</button>
                </div>
            </div>

        </form>
    )
}

export default Formular;