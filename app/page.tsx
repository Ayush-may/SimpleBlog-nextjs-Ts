import React from 'react'
import './globals.css'
import NavBar from './components/navbar/NavBar'

const page = () => {
    return (
        <>
            <NavBar />
            <div className='border flex flex-col items-center ' >
                <div className='overflow-hidden w-[1000px] max-h-40 border' >
                    <img className=' object-cover' src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </>
    )
}

export default page