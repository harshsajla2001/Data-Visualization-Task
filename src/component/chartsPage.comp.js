import React from 'react';
import LineChart from "../utils/LineChart.utils"
import BarChart from "../utils/BarChart.utils"
import { data } from '../dataForChats.data';

const Charts = () => {
    return (
        <div style={{ padding: '2px' }} className="">
            <div >
                <LineChart xAxisLable={'Flavanoids'} yAxisLable={'Ash'} data={data} chartType={'line'} />
            </div>
            <div >
                <BarChart xAxisLable={'Alcohol'} yAxisLable={'Minimum Magnesium'} data={data} chartType={'bar'} />
            </div>
        </div>
    );
};

export default Charts;
