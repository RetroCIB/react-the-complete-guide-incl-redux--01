import './FilterChartBar.css';
import React from "react";

const FilterChartBar = (props) => {

    let barFillHeight = '0%';
    if(props.max > 0){
        barFillHeight = Math.round( props.value / props.max * 100 ) + '%';
    }

    return (
        <div className="filter-chart-bar">
            <div className="filter-chart-bar__inner">
                <div className="filter-chart-bar__fill" style={ { height: barFillHeight}}></div>
            </div>
            <span className="filter-chart-bar__label">
            {props.label}
        </span>
        </div>
    )
}
export default FilterChartBar;