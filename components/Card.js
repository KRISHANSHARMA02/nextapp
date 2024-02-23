"use client"
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.1}   dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className='relative w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white p-6 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-xs leading-tight mt-5 font-semibold' >{data.desc} </p>
      <div className='footer w-full absolute bottom-0 left-0 '>
        <div className='flex items-center justify-between w-full px-8 py-3 mb-3' >
          <h5>{data.filesize} </h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close?<IoClose />:<LuDownload size=".7rem" color='#fff'/>}
          </span>
          </div>
          {data.tag.isOpen && (
         <div className={`tag w-full ${data.tag.tagColor==="blue"?"bg-blue-600": "bg-green-600"} flex justify-center items-center py-4`}>
          <h5 className=' text-sm font-semibold'>{data.tag.tagTitle}</h5>
          </div> 

          )}
      </div>
           
    </motion.div>
  );
}

export default Card
