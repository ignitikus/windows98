import React, { useEffect } from 'react'

import explorer from "../../assets/computer_explorer.ico";
import myDocs from "../../assets/directory_open_file_mydocs.ico";
import internetExplorer from "../../assets/msie1.ico";
import network from "../../assets/network_normal_two_pcs.ico";
import recycleEmpty from "../../assets/recycle_bin_empty.ico";
import recycleFull from "../../assets/recycle_bin_full.ico";

import './Main.css'

const icons = [
   {
      icon: explorer,
      title: 'My Computer'
   }, 
   {
      icon: myDocs,
      title: 'My Documents'
   }, 
   {
      icon: network,
      title: 'Network Neighborhood'
   },
   {
      icon: internetExplorer,
      title: 'Internet Explorer'
   }, 
   {
      icon: recycleEmpty,
      title: 'Recycle Bin'
   }, 
]

export default function Main() {

   useEffect(() => {
      document.title ='Win98'
   }, [])


   return (
      <div className='main-container'>
         <div className='icons-container'>
            {
               icons.map(({icon, title})=>{
                  return <div className='desktop-icons'>
                     <img className='icons' src={icon} alt={`${icon}`}/>
                     <div className='icon-overlay'></div>
                     <div className='icon-title'>{title}</div>
                  </div>
               })
            }
         </div>
      </div>
   )
}
