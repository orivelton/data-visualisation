import React, { useEffect, useState } from 'react'
import { request } from '../helpers/api'
import { totalValues } from '../helpers/helper'

const DataVisualisation = () => {
  const [data, setData] = useState([])


  useEffect(() => {
    const getData = async () => {
      const result = await request();
      delete result?.current.data.TK1.message
      delete result?.current.data.TK1.model_version
      delete result?.current.data.TK1.time

      result && setData(result?.current.data.TK1);
    }

    getData();
  }, [])

  return(
    <>
      { 
        <table>
          <thead>
            <th>Metric</th>
            <th>Value</th>
          </thead>
          {
            Object.keys(data).map(item => (
              <tr key={item}>
                <td>{item.replaceAll('_', ' ')}</td>
                <td>{data[item].values && totalValues(data[item].values)}</td>
              </tr>
            ))
          }
        </table>
      }
    </>
  )
}

export default DataVisualisation;
