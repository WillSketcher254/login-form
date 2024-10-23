import React from 'react'
import { useState } from 'react'
function ColorChange() {
    
  const [color, setColor] = useState('')
    return (
        <div>

            <div className={`${color} p-40 rounded-full`}>
                <h1>Change my Color:</h1>
                <button className='m-5 bg-green-500' onClick={() => setColor('bg-green-500')}>Green</button>
                <button className='m-5 bg-red-500' onClick={() => setColor('bg-red-500')}>Red</button>
                <button className='m-5 bg-yellow-500' onClick={() => setColor('bg-yellow-500')}>Yellow</button>
                <button className='m-5 bg-blue-500' onClick={() => setColor('bg-blue-500')}>Blue</button>
                <button className='m-5 bg-orange-500' onClick={() => setColor('bg-orange-500')}>Orange</button>
                <button className='m-5' onClick={() => setColor('')}>NONE</button>
            </div>
        </div>
    )
}

export default ColorChange