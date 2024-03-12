"use client"
import React, { useState } from 'react'
import '../globals.css'
import NavBar from '../components/navbar/NavBar'
import TitleInput from '../components/Blog/TitleInput'
import ImageInput from '../components/Blog/ImageInput'
import RichTextEditor from '../components/Blog/RichTextEditor'
import AddBlogBtnArea from './AddBlogBtnArea'

export interface PropInterface {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [richText, setRichText] = useState('');

    return (
        <>
            <NavBar />
            <div className='mt-[100px] max-sm:mt-[120px]' >
                <div className='grid justify-center grid-cols-[minmax(300px,1000px)] mt-6 px-5'>
                    <TitleInput value={title} setValue={setTitle} />
                    <ImageInput value={img} setValue={setImg} />
                    <RichTextEditor value={richText} setValue={setRichText} />
                    <AddBlogBtnArea />
                </div>
            </div>
        </>
    )
}

export default NewBlog