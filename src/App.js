import Item from "./components/Item/Item";

import './App.css';
import Formular from "./components/Formular/Formular";
import Filter from "./components/Filter/Filter";
import {useState} from "react";


const items_dummy = [
    {id: 1, title: 'lorem ipsum dolor sit amet', price: 9.99, date: new Date(2022, 12, 21)},
    {id: 2, title: 't1', price: 9999.99, date: new Date(2022, 9, 21)},
    {id: 3, title: 't1', price: 9.99, date: new Date(2022, 3, 21)},
];


function App() {

    const [items, setItems] = useState(items_dummy);
    const [year, setYear] = useState(items_dummy[0]?.date?.getFullYear() || '');

    const uniqueItemsYears = [
        ...new Set(items.map(item => (new Date(item.date)).getFullYear()))
    ]
        .sort((a, b) => (a >= b ? 1 : -1));

    const filteredItems = items.filter((item) => {
        return parseInt(item.date.getFullYear()) === parseInt(year);
    });

    const addItemHandler = (itemData) => {
        setItems((prevItems) => {
            return [
                itemData,
                ...prevItems
            ]
        });
    }


    let filteredItemsContent = (<p>No items found </p>);
    if (filteredItems.length) {
        filteredItemsContent = filteredItems.map(((item) => {
            return (
                <Item key={item.id} options={
                    {
                        title: item.title,
                        price: item.price,
                        date: item.date
                    }
                }/>
            )
        }));
    }


    return (
        <div className="App">

            <Formular onAddItem={addItemHandler}/>

            <Filter selected={year} onChangeYear={setYear} years={uniqueItemsYears}/>

            {filteredItemsContent}

        </div>
    );
}

export default App;
