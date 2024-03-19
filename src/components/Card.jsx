import React, { useState } from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = (props) => {
    const [downloadState, setdownloadState] = useState(true)
    const [downloadTagState, setdownloadTagState] = useState(false)
    const handleDownload = ()=>{
        if(!downloadState){
            setdownloadState(true)
            setdownloadTagState(false)
        }
        else{
            setdownloadState(false)
            setdownloadTagState(true)
        }
    }

    const handleDoubleClick = (e)=>{
        e.preventDefault()
        
    }

  return (
    <motion.div drag dragConstraints={props.reference} whileDrag={{scale:1.15}} dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} className='relative w-52 h-64 rounded-[40px] bg-zinc-900/90 text-white p-5 overflow-hidden font-semibold' onDoubleClick={handleDoubleClick}>
        <FaFileAlt />
        <div className='w-full h-28 mt-2 text-ellipsis overflow-hidden ...'>
            <p className='text-sm leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem ipsa laboriosam labore debitis eos!</p>
        </div>
        <div className='footer absolute w-full bottom-0 left-0'>
            <div className='flex justify-between items-center py-4 px-5'>
                <h5>0.45mb</h5>
                {downloadState ? (<span onClick={handleDownload}><LuDownload /></span>) :( <span onClick={handleDownload}><IoClose /></span>)}
            </div>
            {downloadTagState ? (<div className='tag w-full px-5 py-3 bg-green-500 flex items-center justify-center' >
                <h3 className='text-base font-semibold cursor-default'>Download Now.</h3>
            </div>) : null
            }
        </div>
    </motion.div>
  )
}

export default Card