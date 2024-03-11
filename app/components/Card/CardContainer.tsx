import React from 'react'
import Card from './Card'

interface CardContainerProp {
    data: {
        text: String,
        img: String
    }
}

const CardContainer: React.FC<CardContainerProp> = (prop) => {

    return (
        <div className='p-3 max-sm:p-0 cursor-pointer '>
            <Card img={prop.data.img} text={prop.data.text} />
        </div>
    )
}

export default CardContainer