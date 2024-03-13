import React from 'react'
import Card from './Card'
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { removeBlog } from '@/app/redux/slice/blogSlice';

interface CardContainerProp {
    _id: string;
    title: String;
    img: String;
}

const CardContainer: React.FC<CardContainerProp> = (prop) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className='p-3 max-sm:p-0 cursor-pointer'>
                <Link href={`/blog/${prop._id}`} >
                    <Card img={prop.img} text={prop.title} />
                </Link>
                <button
                    onClick={() => {
                        dispatch(removeBlog(prop._id));
                    }}
                    className='bg-red-700 max-sm:ml-5 px-6 py-2 font-bold rounded-md shadow-sm mt-3 text-white place-self-start '
                >Delete</button>
            </div >
        </>
    )
}

export default CardContainer