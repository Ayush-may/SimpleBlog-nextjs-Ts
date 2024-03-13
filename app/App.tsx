// "use client"
import React from 'react'
import NavBar from './components/navbar/NavBar'
import CardContainer from './components/Card/CardContainer'
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './redux/store';

const App = () => {
    const data = useSelector((state: RootState) => state.blog.blog);
    return (
        <>
            {/* <Provider store={store} > */}
                <NavBar />

                <div className='flex gap-5 flex-col items-center py-4 px-[100px] max-md:px-[50px] max-sm:px-0 max-sm:py-0' >
                    {data.map((e, i) => <CardContainer key={e._id} {...e} _id={e._id} />)}
                </div>

                {/* border footer */}
                <div className='w-100 h-2 bg-green-400' ></div>
            {/* </Provider> */}
        </>
    )
}

export default App