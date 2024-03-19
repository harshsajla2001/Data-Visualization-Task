import React from 'react';
import ReactECharts from 'echarts-for-react';

const lineChart = ({ xAxisLable, yAxisLable, data, chartType = "line" }) => {
    // Constructing the options object for the line chart
    const options = {
        xAxis: {
            type: 'value',
            data: data.map(item => item?.Ash), // Mapping Ash data for x-axis
            name: xAxisLable // X-axis label
        },
        yAxis: {
            type: 'value',
            name: yAxisLable // Y-axis label
        },
        series: [{
            data: data.map(item => item?.Flavanoids), // Mapping Flavanoids data for y-axis
            type: chartType // Setting the chart type (default: line)
        }]
    };
    // Rendering the ECharts component with the provided options
    return <ReactECharts option={options} style={{ height: '400px', overflow: 'auto' }} />;
};

export default lineChart;
