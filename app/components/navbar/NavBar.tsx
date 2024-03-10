import React from 'react'
import Login from './Login'
import CreateNewUser from './CreateNewUser'


const NavBar = () => {
    return (
        <nav className='nav flex justify-between px-10 py-4 border shadow-md bg-white' >
            <h2 className='font-bold text-xl' >Next.js <span className='bg-orange-200 px-2 py-1 ' >Blog Project</span> With TypeScript</h2>
            <div className='flex gap-5' >
                <Login />
                <CreateNewUser />
            </div>
        </nav>
    )
}

export default NavBar