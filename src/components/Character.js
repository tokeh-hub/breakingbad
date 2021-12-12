import React from 'react'

export default function Character({name,char_id,nickname,img,portrayed,status,birthday}) {
    return (
        <article className='card' >
            <div className='card-inner'>
                <div className='card-front'>
                     <img src={img} alt='person'></img>
                 </div>
                 <div className='card-back'>
                     <h1>{name}</h1>
                     <ul>
                         <li>
                             <strong>Actor-name:</strong>{portrayed}
                         </li>
                         <li>
                             <strong>Nickname:</strong>{nickname}
                         </li>
                         <li>
                             <strong>Status:</strong>{status}
                         </li>
                         <li>
                             <strong>Birthday:</strong>{birthday}
                         </li>
                     </ul>
                 </div>

            </div>
            
        </article>
    )
}
