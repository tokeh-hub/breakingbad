import React from 'react'
import spinner from '../img/spinner.gif'

export default function Spinner({loading}) {
    return  <img src={spinner} alt='spinner' style={{width:'200px',margin:'auto',display:'block'}}></img>
}
