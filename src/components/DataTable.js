import React from 'react';
import { formatStr } from '../helpers/helper';
import '../assets/scss/DataTable.scss';

const DataTable = ({ data, caption }) => (
  <table className="table-style">
    <caption>{caption}</caption>
    <thead>
      <tr>
        <th>Metric</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map(({ name, value }) => (
          <tr key={name}>
            <td>{formatStr(name)}</td>
            <td>{value[value.length -1]}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default DataTable;
