import React, {useState} from "react";

import './Formular.css';

import Form from "./Form";
import Card from "../UI/Card";

const Formular = (props) => {

    const saveItemData = (enteredItemData) => {
        const itemData = {
            ...enteredItemData,
            id: parseInt((Math.random() * 8999999999 + 1000000000), 10).toString(16)
        }
        console.log('item|',itemData);

        props.onAddItem(itemData);
    }

    return (
        <Card className="formular">
            <Form onSaveItemDate={saveItemData}></Form>
        </Card>
    )
}

export default Formular;