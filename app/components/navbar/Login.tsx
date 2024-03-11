'use client'
import React from 'react'

const Login = () => {
    return (
        <button
            className='bg-orange-500 px-6 py-1 font-bold rounded-sm shadow-sm text-white'
        onClick={()=>{console.log('heyyy');}}
        >Login</button>
    )
}

export default Login