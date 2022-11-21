import './FilterChart.css'
import React from "react";
import FilterChartBar from "./FilterChartBar";

const FilterChart = (props) => {
    const valuesArr = props.dataPoints.map(dataPoint => dataPoint.value);
    const maximumPrice = Math.max(...valuesArr);
    console.log(...valuesArr);

    return (
        <div className="filter-chart">
            <ul>
                {
                    props.dataPoints.map(
                        (dataPoint, idx) => {
                            return (
                                <li key={idx}>
                                    <FilterChartBar
                                        value={dataPoint.value}
                                        max={maximumPrice}
                                        label={dataPoint.label}/>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default FilterChart;