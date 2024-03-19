import React from 'react';
import ReactECharts from 'echarts-for-react';

const barChart = ({ xAxisLable, yAxisLable, data, chartType = "bar" }) => {
    // Constructing the options object for the bar chart
    const options = {
        xAxis: {
            type: 'value',
            data: data.map(item => item?.Alcohol), // Mapping alcohol data for x-axis
            name: xAxisLable,// X-axis label
        },
        yAxis: {
            type: 'value',
            name: yAxisLable // Y-axis label
        },
        series: [{
            data: data.map(item => item?.Magnesium), // Mapping magnesium data for y-axis
            type: chartType // Setting the chart type (default: bar)
        }]
    };
    // Rendering the ECharts component with the provided options
    return <ReactECharts option={options} style={{ height: '400px', overflow: 'auto' }} />;
};

export default barChart;
