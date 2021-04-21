import React, { useEffect, useState } from 'react'
import { request } from '../helpers/api'
import DataTable from './DataTable';
import LineChart from './LineChart';
import '../assets/scss/DataVisualisation.scss';
import { adapter } from '../helpers/helper';

const DataVisualisation = () => {
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await request();
      setCurrent(adapter(result.current.data.TK1));
    }
    
    getData();
  }, []);

  return (
    <>
      <h1 className="title-table" >Data Visualisation</h1>
      <div className="container">
        <div className="container__box">
          <DataTable data={current} caption="Current Data" />
        </div>
        <div className="container__box">
          <LineChart hAxisTitle="Current Data" vAxisTitle="Current Data" data={current} />
        </div>
      </div>
    </>
  )
};

export default DataVisualisation;
