import React from 'react'
import '../globals.css'
import NavBar from '../components/navbar/NavBar'
import TitleInput from '../components/Blog/TitleInput'
import ImageInput from '../components/Blog/ImageInput'
import RichTextEditor from '../components/Blog/RichTextEditor'

const NewBlog = () => {
    return (
        <>
            <NavBar />
            <div className='' >
                <div className='grid justify-center grid-cols-[minmax(300px,1000px)] mt-6 px-5'>
                    <TitleInput />
                    <ImageInput />
                    <RichTextEditor />
                </div>
            </div>
        </>
    )
}

export default NewBlog