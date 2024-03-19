import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null)
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 p-3 w-full h-full flex gap-5 flex-wrap'>
        <Card reference={ref}/>
        <Card reference={ref}/>
        <Card reference={ref}/>
    </div>
  )
}

export default Foreground