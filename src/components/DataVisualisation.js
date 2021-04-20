import React, { useEffect, useState } from 'react'
import { request } from '../helpers/api'
import DataTable from './DataTable';
import '../assets/scss/DataVisualisation.scss';

const DataVisualisation = () => {
  const [current, setCurrent] = useState([]);
  const [previous, setPrevious] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await request();
      setCurrent(result.current.data.TK1);
      setPrevious(result.previous.data.TK1);
    }
    
    getData();
  }, [])

  return (
    <>
      <h1 className="title-table" >Data Visualisation</h1>
      <div className="table-box">
        <DataTable data={current} caption="Current Data"/>
        <DataTable data={previous} caption="Previous Data"/>
      </div>
    </>
  )
}

export default DataVisualisation;
