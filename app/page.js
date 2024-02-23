"use client"
import Background from '@/components/Background'
import Foreground from '@/components/Foreground'
import React from 'react'


const page = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
    <Background />
    <Foreground />
      
    </div>
  )
}

export default page
