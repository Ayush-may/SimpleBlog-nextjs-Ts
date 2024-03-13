"use client"
import { read } from 'fs';
import React from 'react'
import { PropInterface } from '@/app/newblog/page';

const ImageInput: React.FC<PropInterface> = (prop) => {
    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const data = e.target.files[0];
        // prop.setValue(URL.createObjectURL(data));

        const reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onload = () => {
            prop.setValue(reader.result + "");
        }
    }
    return (
        <div className='flex flex-col'>
            <label htmlFor="image" className='text-slate-500 font-bold py-2' >Enter Image</label>
            <input onChange={handleSubmit} type="file" accept='.jpg,.png' id='image' placeholder='Enter Title' className='border-black border-2 font-bold py-2 px-4 rounded-md' />
        </div>
    )
}

export default ImageInput