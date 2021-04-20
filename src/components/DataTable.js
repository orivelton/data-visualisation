import React from 'react';
import { filterValues, totalValues } from '../helpers/helper';

const DataTable = ({ data, caption }) => {
  return (
    <table>
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {
          filterValues(data).map(item => (
            <tr key={item}>
              <td>{item.replaceAll('_', ' ')}</td>
              <td>{totalValues(data[item].values)}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default DataTable;
