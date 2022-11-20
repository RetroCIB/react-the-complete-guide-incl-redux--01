import Item from "./components/Item/Item";

import './App.css';
import Formular from "./components/Formular/Formular";
import Filter from "./components/Filter/Filter";

function App() {

    const addItemHandler = (itemData) => {
        console.log('App|addItemHandler|', itemData);
    }

    const filterYearHandler = (year) => {
        console.log('App|filterHandler|', year);
    }

    return (
        <div className="App">

            <Formular onAddItem={addItemHandler}/>

            <Filter onChangeYear={filterYearHandler}/>

            <Item options={{title: 'lorem ipsum dolor sit amet', price: 9.99, date: new Date(2022, 12, 21)}}/>
            <Item options={{title: 't1', price: 9999.99, date: new Date(2022, 9, 21)}}/>
            <Item options={{title: 't1', price: 9.99, date: new Date(2022, 3, 21)}}/>
            <Item options={{title: 't1', price: 9.99, date: new Date(2022, 3, 21)}}/>


        </div>
    );
}

export default App;
