import React from 'react';
import { filterValues, formatStr } from '../helpers/helper';

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
          data.length && data.map(({ name, value }) => (
            <tr key={name}>
              <td>{formatStr(name)}</td>
              <td>{value[value.length -1]}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default DataTable;
