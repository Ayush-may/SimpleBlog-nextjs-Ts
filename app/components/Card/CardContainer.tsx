import React from 'react'
import Card from './Card'
import Link from 'next/link';

interface CardContainerProp {
    _id: string;
    title: String;
    img: String;
}

const CardContainer: React.FC<CardContainerProp> = (prop) => {
    return (
        <Link href={`/blog/${prop._id}`} >
            <div className='p-3 max-sm:p-0 cursor-pointer'>
                <Card img={prop.img} text={prop.title} />
            </div>
        </Link>
    )
}

export default CardContainer