import React from 'react'

interface ImageProp {
    img: String;
}

const Image: React.FC<ImageProp> = ({ img }) => {
    return (
        <img className=' w-full h-auto block bg-center' src={`${img}`} />
    )
}

export default Image;

// https://plus.unsplash.com/premium_photo-1687119905837-0900281ea2c6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D