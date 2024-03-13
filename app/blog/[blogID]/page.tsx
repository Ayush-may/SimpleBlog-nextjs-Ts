"use client"
import React, { useEffect, useState } from 'react'
import "@/app/globals.css"
import NavBar from '@/app/components/navbar/NavBar'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/redux/store'
import ImageContainer from '@/app/components/img/ImageContainer'

interface BlogIDProp {
    params: {
        blogID: String
    }
}

interface DataTempProp {
    _id: string;
    title: string;
    img: string;
    content: string;
}

const page: React.FC<BlogIDProp> = ({ params }) => {
    const blogID = params.blogID;
    const tempData = useSelector((state: RootState) => state.blog.blog);
    const newTemp = tempData.filter(e => e._id === blogID);
    let data: DataTempProp = newTemp[0];
    return (
        <>
            <NavBar />
            <div className='mt-16 grid grid-cols-[minmax(300px, 1000px)] justify-center ' >
                <div className='font-bold place-self-center max-sm:p-2 py-2 pb-3 text-3xl max-sm:text-2xl max-sm:leading-6 flex items-start justify-start w-full' dangerouslySetInnerHTML={{ __html: data.title }} />
                <ImageContainer img={data.img} />
                <div className='max-w-[1000px] max-sm:p-2 py-2 pb-3 text-3xl max-sm:text-2xl max-sm:leading-6 w-full' dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
        </>
    )
}

export default page