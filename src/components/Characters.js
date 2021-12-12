import React from 'react'
import Character from './Character'
import Spinner from '../components/Spinner.js';
export default function Characters({loading,cast}) {

    return loading ? <Spinner /> : (<section className='cards'>
           {cast.map(item=>{ 
               return (
                  <Character key={item.char_id} {...item} ></Character>
               )
           })}
    </section>)
        
     
        
    
}
