"use client"
import React from 'react'
import { PropInterface } from '@/app/newblog/page'

const TitleInput: React.FC<PropInterface> = (prop) => {
    return (
        <div className='flex flex-col'>
            <label htmlFor="title" className='text-slate-500 font-bold py-2' >Enter Title</label>
            <input type="text" id='title' value={prop.value} onChange={(e) => prop.setValue(e.target.value)} placeholder='Enter Title' className='border-2 border-black font-bold py-2 px-4 rounded-md' />
        </div>
    )
}

export default TitleInput