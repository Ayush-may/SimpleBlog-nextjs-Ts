import React from 'react'
import ImageContainer from '../img/ImageContainer'

interface CardProp {
    text: String,
    img: String
}

const Card: React.FC<CardProp> = ({ img, text }) => {
    return (
        <>
            {/* <h1 className='font-bold max-sm:p-2 py-2 pb-3 text-3xl max-sm:text-2xl max-sm:leading-6 flex items-start justify-start w-full' >{text}</h1> */}
            <div className='font-bold max-sm:p-2 py-2 pb-3 text-3xl max-sm:text-2xl max-sm:leading-6 flex items-start justify-start w-full' dangerouslySetInnerHTML={{ __html: text }} />
            <ImageContainer img={img} />
        </>
    )
}

export default Card