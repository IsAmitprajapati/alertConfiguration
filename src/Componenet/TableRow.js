import React, { useState } from 'react'
import Select from 'react-select'

const TableRow = ({dataName, data, newRow, setnewRow, independent, dependent, freq}) => {
    const [formData, setFormData] = useState({
        alertName: '',
        indepOption: [],
        dependedOptions: [],
        frequency: ''

    })
    const {indepOption,dependedOptions} = formData

    const [newInput, setnewInput] = useState('')
    const[newFrequency, setNewFrequency] = useState(null)
   

    const onChange = (event)=>{
        setFormData((preve) => ({
          ...preve, 
          [event.target.name]: event.target.value
        }))
    }
    
    const handleSubmit = () =>{
        const pref = {newInput, indepOption, dependedOptions, newFrequency}
        console.log(pref)
        console.log("data saved")
    }
    


    
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
    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(data)} className='btn-del' >x</button>
            </td>
            <td className='td-name'>
                <input name='alertName' onChange={(event) => setnewInput(event.target.value)} defaultValue={dataName} type="text"  />
            </td>
            <td>
                <Select name='indepOption' onInputChange={indepOption}   defaultValue={[independent[0], independent[1]]}  
                isMulti options={independentOptions} />
            </td>
            <td>
                <Select
                name='dependedOptions'
                defaultValue={dependent}
                onInputChange={dependedOptions}
                options={dependentOptions} />
            </td>

            <td>
                <input name='freq'  className='freq' onChange={(e) => setNewFrequency(e.target.value) } placeholder='min' type="number" defaultValue={freq} />
            </td>
            <td>
                <button onClick={handleSubmit} type='submit' className='save-btn' >
                    save
                </button>
            </td>
        </tr>
    
    )
}

export default TableRow