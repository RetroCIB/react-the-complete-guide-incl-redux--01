import React, {useState} from "react";
import Card from "../UI/Card";

import './Filter.css';
import FilterChart from "./FilterChart";

const Filter = (props) => {

    const onChangeHandler = (event) => {
        const selectedYear = event.target.value;
        props.onChangeYear(parseInt(selectedYear));
    }

    const chartDataPoints = [
        {value: 0, label: 'ian'},
        {value: 0, label: 'feb'},
        {value: 0, label: 'mar'},
        {value: 0, label: 'apr'},
        {value: 0, label: 'may'},
        {value: 0, label: 'jun'},
        {value: 0, label: 'jul'},
        {value: 0, label: 'aug'},
        {value: 0, label: 'sep'},
        {value: 0, label: 'oct'},
        {value: 0, label: 'nov'},
        {value: 0, label: 'dec'},
    ];

    for (const item of props.items) {
        const itemMonth = item.date.getMonth();
        console.log(itemMonth);
        chartDataPoints[itemMonth].value += item.price;
    }

    return (
        <Card className="filter">
            <div className="filter-select">
                <div>
                    Filter by Year
                </div>
                <select onChange={onChangeHandler} value={props.selected}>
                    <option value=''  disabled></option>
                    {
                        props.years.map((year) => {
                            return (
                                <option value={year} key={year}>{year}</option>
                            )
                        })
                    }
                </select>
            </div>


            <FilterChart dataPoints={chartDataPoints}/>

        </Card>
    )
}

export default Filter;