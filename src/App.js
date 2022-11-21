import './App.css';
import Formular from "./components/Formular/Formular";
import Filter from "./components/Filter/Filter";
import {useState} from "react";
import ItemsList from "./components/ItemsList/ItemsList";


const items_dummy = [
    {id: 1, title: 'lorem ipsum dolor sit amet', price: 29.99, date: new Date(2022, 1, 21)},
    {id: 2, title: 't1', price: 99.99, date: new Date(2022, 9, 21)},
    {id: 3, title: 't1', price: 9.99, date: new Date(2022, 3, 21)},
    {id: 4, title: 't1', price: 109.99, date: new Date(2023, 3, 21)},
];


function App() {

    const [items, setItems] = useState(items_dummy);
    // const [year, setYear] = useState(items_dummy[0]?.date?.getFullYear() || '');
    const [year, setYear] = useState( '');

    const uniqueItemsYears = [
        ...new Set(items.map(item => (new Date(item.date)).getFullYear()))
    ]
        .sort((a, b) => (a >= b ? 1 : -1));

    const filteredItems = items.filter((item) => {
        return parseInt(item.date.getFullYear()) === parseInt(year);
    }).sort((a,b) => a.date < b.date ? 1 : -1);;

    const addItemHandler = (itemData) => {
        setItems((prevItems) => {
            return [
                itemData,
                ...prevItems
            ]
        });
    }

    const requestRemoveItemById = (itemId) => {
        setItems((prevItems) => {
            return  prevItems.filter((item) => {
                return item.id !== itemId
            });
        });
    }


    return (
        <div className="App">

            <Formular onAddItem={addItemHandler}/>

            <Filter selected={year} onChangeYear={setYear} years={uniqueItemsYears} items={filteredItems}/>

            <ItemsList items={filteredItems} requestRemoveItemById={requestRemoveItemById}/>

        </div>
    );
}

export default App;
