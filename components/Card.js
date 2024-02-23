"use client"
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

const Card = ({data}) => {
  return (
    <div className='relative w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white p-6 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-xs leading-tight mt-5 font-semibold' >{data.desc} </p>
      <div className='footer w-full absolute bottom-0 left-0 '>
        <div className=''></div>
      </div>
           data 
           seekbar
    </div>
  )
}

export default Card
