"use client"
import React from 'react'
import './globals.css'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import NavBar from './components/navbar/NavBar'
import CardContainer from './components/Card/CardContainer'

const page = () => {
    const data = useSelector((state: RootState) => state.blog.blog);
    return (
        <>
            <NavBar />
            <div className='flex gap-5 flex-col items-center py-4 pb-10 mt-16 px-[100px]  max-md:px-[50px] max-sm:px-0 max-sm:py-0' >
                {data.map((e, i) => <CardContainer key={e._id} {...e} _id={e._id} />)}
            </div>
            {/* border footer */}
            <div className='w-100 h-2 bg-green-400' ></div>
        </>
    )
}

export default page