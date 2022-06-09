import React, { useState } from 'react'
import Select from 'react-select'

const TableRow = ({dataName, data, newRow, setnewRow, independent, dependent, freq}) => {
    
    const independentOptions = [
        { value: 'ME Torge (Avg.)', label: 'ME Torge (Avg.)' },
        { value: 'ME Speed (Avg.)', label: 'ME Speed (Avg.)' },
        { value: 'Rate of Return (Avg.)', label: 'Rate of Return (Avg.)' }
    ]
    

    const dependentOptions = [
        { value: 'ME Shaft Power (Avg.)', label: 'ME Shaft Power (Avg.)' },
        { value: 'ME Speed (Avg.)', label: 'ME Speed (Avg.)' },

    ]
    const handleDelete = ({id}) =>{
        setnewRow(newRow.filter((row) => row.id !== id))
    }

    /***********/
    const [allprint, setallprint] = useState({
        alert_Name : "",
        Independent_value : "",
        Dependent_value : "",
        Frequency : "",
    })
    const [selectedValue, setSelectedValue] = useState([]);
    const handlechange= (e)=>{
        e.preventDefault()
        setallprint((preve)=>{
            return{
                ...preve,
                [e.target.name] : e.target.value,
                Independent_value  : JSON.stringify(selectedValue, false, false) 
                
            }
        })
    }
    const handleSubmits = () =>{
        console.log(allprint)
    } 
    const handleChangess = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
      }
    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(data)} className='btn-del' >x</button>
            </td>
            <td className='td-name'>
                <input name='alert_Name' onChange={handlechange} defaultValue={dataName} type="text"  />
            </td>
            <td>
                <Select  onChange={handleChangess}
                name='Independent_value'
                defaultValue={[independent[0], independent[1]]}   
                isMulti 
                options={independentOptions}
                
                
                 />
            </td>
            <td>
                <Select
                name='Dependent_value'
                defaultValue={dependent}
                onChange={(e)=>setallprint((preve)=>{
                    return{
                        ...preve,
                        Dependent_value : e.value
                    }
                })}
                options={dependentOptions} />
            </td>

            <td>
                <input 
                    name='Frequency'
                    className='freq'
                    onChange={handlechange}
                    placeholder='min'
                    type="number"
                    defaultValue={freq} />
            </td>
            <td>
                <button onClick={handleSubmits} type='submit' className='save-btn'  >
                    save{/*handleSubmit*/}
                </button>
            </td>
        </tr>
    
    )
}

export default TableRow