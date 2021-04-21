import React from 'react';
import { Chart } from 'react-google-charts';

const LineChart = ({ data }) => {
  return(
    <Chart
      width={'100%'}
      height={'400px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={[
        [
          { type: 'number', label: 'x' },
          ...data.map(({ name: label }) => ({ type: 'number', label }))
        ],
        ...data.map(item => item.value)
      ]}
      options={{
        hAxis: {
          title: 'Times',
          ticks: [0, 5, 15, 25, 35, 45, 55]
        },
        vAxis: {
          title: 'Values',
        },
      }}
    />
      )
}
    
export default LineChart;