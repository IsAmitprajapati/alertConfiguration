import React, { useEffect, useState } from "react";
import { independentOptions } from "./OptionsBoth";
import { dependentOptions } from "./OptionsBoth";
import Select from "react-select";

export default function FixedTable(){
    const [Fixed1,setFixed1] = useState({
        alert_Name: 'alert 1',
        Independent_value: [{ value: 'ME Torge (Avg.)', label: 'ME Torge (Avg.)' }, { value: 'ME Speed (Avg.)', label: 'ME Speed (Avg.)' }],
        Dependent_value: [{ value: 'ME Torge (Avg.)', label: 'ME Torge (Avg.)' }, ],
        Frequency: 10 
    })
    const [Fixed2,setFixed2] = useState({
        alert_Name: 'alert 1',
        Independent_value: [{ value: 'ME Torge (Avg.)', label: 'ME Torge (Avg.)' }, { value: 'Rate of Return (Avg.)', label: 'Rate of Return (Avg.)' }],
        Dependent_value: [{ value: 'ME Torge (Avg.)', label: 'ME Torge (Avg.)' }, ],
        Frequency: 10 
    })
    const [display,setdisplay] = useState(true)
    const [display2,setdisplay2] = useState(true)
    const [selectedValue, setSelectedValue] = useState([]);
    const [selectedValue2, setSelectedValue2] = useState([]);
    
    const handleSubmiteds = () =>{
        console.log(Fixed1)
    }
    const handleSubmiteds2 = () =>{
        console.log(Fixed2)
    }

    useEffect(()=>{
        setFixed1((preve)=>{
            return{
                ...preve,
                Independent_value  : selectedValue
                // JSON.stringify(selectedValue)
            }
        })
    },[selectedValue])
    useEffect(()=>{
        setFixed2((preve)=>{
            return{
                ...preve,
                Independent_value  : selectedValue2
                // JSON.stringify(selectedValue2)
            }
        })
    },[selectedValue2])


    useEffect(()=>{
        setFixed1((preve)=>{
            return{
                ...preve,
                Independent_value  : [{ value: 'ME Torge (Avg.)', label: 'ME Torge (Avg.)' }, 
                { value: 'ME Speed (Avg.)', label: 'ME Speed (Avg.)' }]
            }
        })
    },[])
    useEffect(()=>{
        setFixed2((preve)=>{
            return{
                ...preve,
                Independent_value  : [{ value: 'ME Torge (Avg.)', label: 'ME Torge (Avg.)' }, ]
            }
        })
    },[])
    
    return(
        <>
        {/***********table one ************** */}
        {display &&
        <tr>
            <td>
                <button onClick={() => setdisplay(preve => !preve)} className='btn-del' >x</button>
            </td>
            <td className='td-name'>
                <input 
                    name='alert_Name'
                    onChange={(e)=>setFixed1((preve)=>{
                        return{
                            ...preve,
                            alert_Name : e.target.value
                        }
                    })}
                    type="text"
                    value = {Fixed1.alert_Name}
                      />
            </td>
            <td>
                <Select 
                    name='Independent_value'
                    onChange={setSelectedValue} 
                    isMulti
                    options={independentOptions}
                    defaultValue = {[Fixed1.Independent_value[0],Fixed1.Independent_value[1]]}
                    value = {Fixed1.independentOptions}

                    />
            </td>
            <td>
                <Select
                name='Dependent_value'
                 defaultValue={Fixed1.Dependent_value}
                onChange={(e)=>setFixed1((preve)=>{
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
                    onChange={(e)=>setFixed1((preve)=>{
                        return{
                            ...preve,
                            Frequency : e.target.value
                        }
                    })}
                    placeholder='min'
                    type="number"
                    value={Fixed1.Frequency}
                    />
            </td>
            <td>
                <button onClick={handleSubmiteds} type='submit' className='save-btn'  >
                    save{/*handleSubmit onchangeclick*/}
                </button>
            </td>
        </tr>




        }
        {/***********table one ************** */}
        {display2 &&
        <tr>
            <td>
                <button onClick={() => setdisplay2(preve => !preve)} className='btn-del' >x</button>
            </td>
            <td className='td-name'>
                <input 
                    name='alert_Name'
                    onChange={(e)=>setFixed2((preve)=>{
                        return{
                            ...preve,
                            alert_Name : e.target.value
                        }
                    })}
                    type="text"
                    value = {Fixed2.alert_Name}
                      />
            </td>
            <td>
                <Select 
                    name='Independent_value'
                    onChange={setSelectedValue2} 
                    isMulti
                    options={independentOptions}
                    defaultValue = {[Fixed2.Independent_value[0]]}
                    value = {Fixed2.independentOptions}

                    />
            </td>
            <td>
                <Select
                name='Dependent_value'
                 defaultValue={Fixed2.Dependent_value}
                onChange={(e)=>setFixed2((preve)=>{
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
                    onChange={(e)=>setFixed2((preve)=>{
                        return{
                            ...preve,
                            Frequency : e.target.value
                        }
                    })}
                    placeholder='min'
                    type="number"
                    value={Fixed2.Frequency}
                    />
            </td>
            <td>
                <button onClick={handleSubmiteds2} type='submit' className='save-btn'  >
                    save{/*handleSubmit onchangeclick*/}
                </button>
            </td>
        </tr>



        
        }
    </>
    )
}