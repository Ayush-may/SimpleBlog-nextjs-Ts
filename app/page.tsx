'use client'
import React from 'react'
import './globals.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'


const page = () => {
    return (
        <>
            <Provider store={store}>
                <App />
            </Provider>
        </>
    )
}

export default page