"use client"
import React from 'react'
import CreateNewBlog from './CreateNewBlog'
import { usePathname } from 'next/navigation'

const ConditionalBtn = () => {
    const path = usePathname();

    const checkPath = () => {
        if (path == '/newblog' || path.includes("/blog"))
            return
        else
            return <CreateNewBlog />
    }

    return (
        <div className='flex gap-5' >
            {checkPath()}
        </div>
    )
}

export default ConditionalBtn