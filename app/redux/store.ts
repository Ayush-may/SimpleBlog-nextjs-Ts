"use client"
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import blogReducer from "./slice/blogSlice";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ blog: blogReducer });
const persistConfig = {
    key: 'root',
    storage: storage
}
const persistReducers = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistReducers, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export { store, persistor };