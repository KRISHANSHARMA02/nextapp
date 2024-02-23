"use client"
import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null);
    const data = [
      {
        desc :"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        filesize :"0.1mb",
        close : false,
        tag : {isOpen:true, tagTitle: "Download Now", tagColor:"green" },
      },
      {
        desc :"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        filesize :"0.9mb",
        close : true,
        tag : {isOpen:false, tagTitle: "Update", tagColor:"blue" },
      },
      {
        desc :"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        filesize :"0.10mb",
        close : true,
        tag : {isOpen:true, tagTitle: "Download Now", tagColor:"green" },
      },
      {
        desc :"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        filesize :"0.5mb",
        close : true,
        tag : {isOpen:true, tagTitle: "Download Now", tagColor:"blue" },
      },
    ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen p-5 flex gap-4 flex-wrap '>
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>

      ))}
    </div>
  )
}

export default Foreground
