import React from 'react'

const NavBar = () => {
    return (
        <nav className='nav flex justify-between px-10 py-4 border shadow-md bg-white' >
            <h2 className='font-bold text-xl' >Next.js <span className='bg-orange-200 px-2 py-1 ' >Blog Project</span> With TypeScript</h2>
            <div className='flex gap-5' >
                <button className='bg-orange-500 px-6 py-1 font-bold rounded-sm shadow-sm text-white' >Login</button>
                <button className='bg-red-500 px-6 py-1 font-bold rounded-sm shadow-sm text-white' >Create new account</button>
            </div>
        </nav>
    )
}

export default NavBar