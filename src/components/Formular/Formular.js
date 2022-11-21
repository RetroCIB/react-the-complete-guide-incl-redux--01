import React, {useState} from "react";

import './Formular.css';

import Form from "./Form";
import Card from "../UI/Card";

const Formular = (props) => {

    let [visible, setVisible] = useState(false);

    const saveItemData = (enteredItemData) => {
        const itemData = {
            ...enteredItemData,
            id: parseInt((Math.random() * 8999999999 + 1000000000), 10).toString(16)
        }
        props.onAddItem(itemData);
        setVisible(false);
    }

    const visiblilityClickHandle = (event) => {
        setVisible(!visible);
    }

    let formularContent = (
        <button className="btn" style={ {margin: ' auto' } } onClick={visiblilityClickHandle}>Add new Item</button>
    );
    if (visible) {
        formularContent = (
            <Form onSaveItemDate={saveItemData} onCloseFormular={visiblilityClickHandle}></Form>
        );
    }

    return (
        <Card className="formular">
            {formularContent}
        </Card>
    )
}

export default Formular;