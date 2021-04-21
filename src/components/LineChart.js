import React from 'react';
import { Chart } from 'react-google-charts';

const LineChart = ({ data }) => {
  const ticks = [...new Set(data.map((item) => item.times).flat())];

  return(
    <Chart
      width={'100%'}
      height={'400px'}
      chartType="LineChart"
      loader={<div>Loading Data Visualisation</div>}
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
          ticks
        },
        vAxis: {
          title: 'Values',
        },
      }}
    />
  )
}
    
export default LineChart;