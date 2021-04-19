import React, { useEffect, useState } from 'react'
import { request } from '../helpers/api'

const DataVisualisation = () => {
  const [data, setData] = useState([])


  useEffect(() => {
    const getData = async () => {
      const result = await request()
      setData(result)
    }

    getData();
  }, [])

  return(
    <>
      {
        console.log(data)
      }
    </>
  )
}

export default DataVisualisation;
