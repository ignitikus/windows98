import React, { useState } from 'react'

import MS from '../../assets/windows.ico'

import './Taskbar.css'

export default function Taskbar() {

   const [showStartMenu, setShowStartMenu] = useState(false)
   return (
      <div className='taskbar-container'>
         <div className='taskbar-inner-container'>
            <button className='start-button'>
               <img src={MS} />
               <div className='start-word'>Start</div>
            </button>
         </div>
      </div>
   )
}
