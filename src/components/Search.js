import React from 'react'
import { useState } from 'react'

export default function Search({getQuery}) {
    const [text,setText] = useState('')
    const onChange = (q) =>{
            setText(q)
            getQuery(q)
    }
    return (
        <form>
            <input type='text' className='form-control'
             placeholder='Search Character' 
             autoFocus='true' 
             value={text} 
             onChange={e=> onChange(e.target.value)}>
             </input>
        </form>
    )
}
