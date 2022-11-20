import React, {useState} from "react";
import Card from "../UI/Card";

import './Filter.css';

const Filter = (props) => {

    const onChangeHandler = (event)=>{
        const selectedYear = event.target.value;
        props.onChangeYear(parseInt(selectedYear));
    }


    return (
        <Card className="filter">
            <div className="filter-select">
                <div>
                    Filter by Year
                </div>
                <select onChange={onChangeHandler} value={props.selected}>
                    {
                        props.years.map((year)=>{
                            return (
                                <option value={year} key={year}>{year}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className="filter-data">
                <ul>
                    <li>
                        <div>
                            <div></div>
                        </div>
                        <span>Ian</span>
                    </li>
                    <li>
                        <div></div>
                        <span>Feb</span>
                    </li>
                    <li>
                        <div></div>
                        <span>Mar</span>
                    </li>
                    <li>
                        <div></div>
                        <span>Apr</span>
                    </li>
                    <li>
                        <div></div>
                        <span>May</span>
                    </li>
                    <li>
                        <div></div>
                        <span>Jun</span>
                    </li>
                    <li>
                        <div></div>
                        <span>Jul</span>
                    </li>
                    <li>
                        <div></div>
                        <span>Aug</span>
                    </li>
                    <li>
                        <div></div>
                        <span>Sep</span>
                    </li>
                    <li>
                        <div></div>
                        <span>Oct</span>
                    </li>
                    <li>
                        <div></div>
                        <span>Nov</span>
                    </li>
                    <li>
                        <div></div>
                        <span>Dec</span>
                    </li>
                </ul>
            </div>

        </Card>
    )
}

export default Filter;