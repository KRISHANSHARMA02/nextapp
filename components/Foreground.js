"use client"
import React from 'react'
import Card from './Card'

const Foreground = () => {
    const data = [
      {
        desc :"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        filesize :"0.9mb",
        close : true,
        tag : {isOpen:true, tagTitle: "Download Now", tagColor:"green" },
      },
    ];

  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-screen '>
      {data.map((item,index)=>(
        <Card data={item} />

      ))}
    </div>
  )
}

export default Foreground
