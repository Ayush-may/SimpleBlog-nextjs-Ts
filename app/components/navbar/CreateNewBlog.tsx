import Link from 'next/link'
import React from 'react'

const CreateNewBlog = () => {
    return (
        <Link href={'/newblog'} >
            <button
                className='bg-green-500 px-6 py-2 font-bold rounded-md shadow-sm text-white'>New Blog
            </button>
        </Link>
    )
}

export default CreateNewBlog