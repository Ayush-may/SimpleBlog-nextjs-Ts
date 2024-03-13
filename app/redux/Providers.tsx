"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react';

interface ProvidersProp {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProp> = ({ children }) => {
    return (
        <Provider store={store} >
            <PersistGate persistor={persistor} loading={null}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default Providers