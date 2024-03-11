import React from 'react'
import Image from './Image'

interface ImageContainerProp {
    img: String
}

const ImageContainer: React.FC<ImageContainerProp> = ({ img }) => {
    return (
        <div className='max-w-[1100px] max-h-[400px] max-lg:max-h-[300px] overflow-hidden flex items-center justify-center' >
            <Image img={img} />
        </div>
    )
}

export default ImageContainer;