import React, {useState} from "react";

import './Formular.css';

const Formular = () => {

    const [formular, setFormular] = useState({
        titleValue: '',
        priceValue: '',
        dateValue: '',
    })

    const submitHandler = (event) => {
        event.preventDefault();
    }
    const changeTitleHandler = (event) => {
        setFormular((prevState) => {
            return {
                ...prevState,
                titleValue: event.target.value,
            }
        });
    }
    const changePriceHandler = (event) => {
        setFormular((prevState) => {
            return {
                ...prevState,
                priceValue: event.target.value,
            }
        });
    }
    const changeDateHandler = (event) => {
        setFormular((prevState) => {
            return {
                ...prevState,
                dateValue: event.target.value,
            }
        });
    }

    return (
        <form className="formular" onSubmit={submitHandler}>
            <div className="formular-fields">
                <div className="formular-field">
                    <label>title</label>
                    <input type="text" value={formular.titleValue} onChange={changeTitleHandler}/>
                </div>
                <div className="formular-field">
                    <label>price</label>
                    <input type="number" step="0.01" min="0.01" value={formular.priceValue}
                           onChange={changePriceHandler}/>
                </div>
                <div className="formular-field">
                    <label>date</label>
                    <input type="date" value={formular.dateValue} onChange={changeDateHandler}/>
                </div>
                <div className="formular-action">
                    <button>add item</button>
                </div>
            </div>

        </form>
    )
}

export default Formular;