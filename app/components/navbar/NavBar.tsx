import React from 'react'
import CreateNewBlog from './CreateNewBlog'

const NavBar = () => {
    return (
        <nav className='nav flex items-center justify-between max-sm:items-center max-sm:gap-3 max-sm:flex-col px-10 py-4 text-nowrap shadow-md bg-white' >
            <h2 className='font-bold text-xl text-nowrap max-md:text-base max-sm:text-base' >Next.js <span className='bg-orange-200 px-2 py-1 ' >Simple Blog Project</span> With TypeScript</h2>
            <div className='flex gap-5' >
                <CreateNewBlog />
            </div>
        </nav>
    )
}

export default NavBar