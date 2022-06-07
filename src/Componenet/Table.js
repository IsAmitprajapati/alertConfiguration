import React, { useEffect, useState } from 'react'
import TableRow from './TableRow'
import { v4 as uuidv4 } from 'uuid';
import "./style.css"

export const Table = () => {
  const data = [{
    id: uuidv4(),
    alert_name: 'alert 1',
    independent_var: [{ value: 'ME Torge (Avg.)', label: 'ME Torge (Avg.)' }, { value: 'ME Speed (Avg.)', label: 'ME Speed (Avg.)' }],
    dependent_var: [{ value: 'ME Torge (Avg.)', label: 'ME Torge (Avg.)' }, ],
    freq: 10 
  },
  {
    id: uuidv4(),
    alert_name: 'alert 1',
    independent_var: [{ value: 'ME Torge (Avg.)', label: 'ME Torge (Avg.)' }, { value: 'Rate of Return (Avg.)', label: 'Rate of Return (Avg.)' }],
    dependent_var: [{ value: 'ME Torge (Avg.)', label: 'ME Torge (Avg.)' }, ],
    freq: 10 
  },
  {
    id: uuidv4(),
    alert_name: '',
    independent_var: [],
    dependent_var: [],
    freq: null
  }]
  const[newRow, setnewRow] = useState([])


  const addRow = () =>{
    const newData = {
      id: uuidv4(),
      alert_name: '',
      independent_var: [],
      dependent_var: [],
      freq: null
    }
    setnewRow([...newRow, newData])
   
  }
  useEffect(() =>{
    setnewRow([...data])
  }, [])

  


  return (
    <>
      
    
    <table>
    <tr>
      <th>
      <button onClick={addRow} className='add' >+</button>
      </th>
      <th>Alert Name</th>
      <th>Independent variable</th>
      <th>Dependent variable</th>
      <th>Frequency</th>
      
      <th>Save</th>
    </tr>
    <>
      {newRow?.map((data, index) => {
        return (
         
          <TableRow 
          data={data}
          setnewRow={setnewRow}
          newRow={newRow}
          freq={data.freq}
          dataName={data.alert_name} 
          independent={data.independent_var} 
          dependent={data.dependent_var} 
          key={index} />

        )
      })}
    </>
  </table>
  </> 
  )
}




