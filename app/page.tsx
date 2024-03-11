import React from 'react'
import './globals.css'
import NavBar from './components/navbar/NavBar'
import CardContainer from './components/Card/CardContainer'

const data = [{
    _id: 1,
    text: "AI will destroy our world !",
    img: "https://plus.unsplash.com/premium_photo-1687119905837-0900281ea2c6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    data: []
}, {
    _id: 2,
    text: "AI will destroy our world hehhahahahaha",
    img: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, {
    _id: 3,
    text: "AI will destroy our world hehhahahahaha",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, {
    _id: 4,
    text: "AI is blah blah !!!",
    img: "https://images.unsplash.com/photo-1593349480506-8433634cdcbe?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
}];

const page = () => {
    return (
        <>
            <NavBar />
            <div className='flex gap-5 flex-col items-center py-4 px-[100px] max-md:px-[50px] max-sm:px-0 max-sm:py-0' >
                {data.map((e, i) => <CardContainer key={i} data={e} />)}
            </div>
        </>
    )
}

export default page