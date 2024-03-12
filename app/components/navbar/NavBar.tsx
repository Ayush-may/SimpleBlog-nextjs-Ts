import React from 'react'
import Link from 'next/link'
import ConditionalBtn from './ConditionalBtn'

const NavBar = () => {
    return (
        <nav className='w-full fixed top-0 nav flex items-center justify-between max-sm:items-center max-sm:gap-3 max-sm:flex-col px-10 py-4 text-nowrap shadow-md bg-white' >
            <Link href={'/'} >  <h2 className='font-bold text-xl text-nowrap max-md:text-base max-sm:text-base' >Next.js <span className='bg-orange-200 px-2 py-1 ' >Simple Blog Project</span> With TypeScript</h2></Link>
            <ConditionalBtn />
        </nav>
    )
}

export default NavBar