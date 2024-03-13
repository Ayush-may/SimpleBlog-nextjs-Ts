"use client"
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { title } from "process";

interface DataType {
    _id: string;
    img: string;
    title: string;
    content: string;
}

const initialState: {
    blog: DataType[]
} = {
    blog: []
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        addBlog: (state, action) => {
            const data: DataType = {
                _id: nanoid(),
                title: action.payload.title,
                img: action.payload.img,
                content: action.payload.content
            }
            state.blog.unshift(data);
            alert("Blog is published");
        },
        removeBlog: (state, action) => {
            const newArr = state.blog.filter(e => e._id != action.payload);
            state.blog = newArr;
        }
    }
});

export const { addBlog, removeBlog } = blogSlice.actions;
export default blogSlice.reducer;
