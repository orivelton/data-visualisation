import React from 'react';
import { Chart } from "react-google-charts";
import { filterValues } from '../helpers/helper';

const ChartData = ({ data }) => {
  const dataTimes = filterValues(data).map(item => data[item].times);
  // const ticks = [...new Set(dataTimes.flat())];


  console.log('dsadas', data.map(item => item.value));

  return(
    <Chart
      width={'700px'}
      height={'400px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={[
        data.map(({ name }) => ({ type: 'number', label: name})),
        data.map(item => item.value)
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
      rootProps={{ 'data-testid': '1' }}
      />
      )
    }
    
    export default ChartData;
    
    
    // ticks


// [
//   // [
//   //   { type: 'number', label: 'x' },
//   //   ...filterValues(data).map(item => item = { type: 'number', label: item})
//   // ],
//   // ...dataValues
// ]