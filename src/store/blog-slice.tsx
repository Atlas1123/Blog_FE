import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

import { SERVER_API_URL } from "../config";

import Blog from "../models/Blog";

const API_URL = SERVER_API_URL;

type blogsState = {
    blogs: Blog[];
    blog: Blog;
    count: number;
    status: boolean[];
};

const initialState: blogsState = {
    blogs: [],
    blog: {
        id: "",
        userId: "",
        username: "",
        title: "",
        text: "",
        imageUrl: "",
        like: 0,
    },
    count: 0,
    status: [],
};

const blogsSlice = createSlice({
    name: "me",
    initialState: initialState,
    reducers: {
        sendRequest(state: blogsState) {
            state.status = [...state.status].concat([true]);
        },
        receiveRequest(state: blogsState) {
            state.status = [...state.status].slice(1);
        },
        setBlogs(state: blogsState, action: PayloadAction<{ blogs: Blog[] }>) {
            state.blogs = action.payload.blogs;
        },
        setCertainBlog(
            state: blogsState,
            action: PayloadAction<{ blog: Blog }>
        ) {
            state.blog = action.payload.blog;
        },
        setCount(state: blogsState, action: PayloadAction<{ count: number }>) {
            state.count = action.payload.count;
        },
        thumbupBlog(
            state: blogsState,
            action: PayloadAction<{ blogId: string }>
        ) {
            state.blogs = state.blogs.map((blog: Blog) =>
                blog.id === action.payload.blogId
                    ? { ...blog, like: blog.like + 1 }
                    : blog
            );
        },
    }
});

const blogsActions = blogsSlice.actions;

export const fetchBlogs = (
    pageIndex: number,
    itemCount: number,
    title: string,
    sortType: string,
    sortOrder: string
) => {
    return async (dispatch: Dispatch) => {
        dispatch(blogsActions.sendRequest());
        try {
            const response = await fetch(
                `${API_URL}/blog/blogs?pageIndex=${pageIndex}&itemCount=${itemCount}&title=${title}&sortType=${sortType}&sortOrder=${sortOrder}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const responseData: {
                blogs: Blog[];
                count: number;
                message: string;
            } = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message || response.statusText);
            }
            const { blogs, count } = responseData;
            dispatch(blogsActions.setBlogs({ blogs }));
            dispatch(blogsActions.setCount({ count }));
            dispatch(blogsActions.receiveRequest());
        } catch (error) {
            dispatch(blogsActions.receiveRequest());
        }
    }
}

export const fetchBlog = (id : string) => {
    console.log(id)
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(`${API_URL}/blog/blogsingle/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            const responseData: {
                blogs: Blog[];
                message: string;
            } = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message || response.statusText);
            }
            const { blogs } = responseData;
            dispatch(blogsActions.setBlogs({ blogs }));
        } catch (error) {
            dispatch(blogsActions.receiveRequest());
        }
    }
}

export const fetchThumbUp = (blogId: string, next: Function) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(`${API_URL}/blog/thumbUp/${blogId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type" : "application/json"
                },
            });
            const responseData: {
                message: string;
            } = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message || response.statusText);
            }
            dispatch(blogsActions.thumbupBlog({ blogId }));
            dispatch(blogsActions.receiveRequest());
            next(responseData.message, 200);
        } catch (error) {
            dispatch(blogsActions.receiveRequest());
            next(error, 402);
        }
    };
};

export const fetchDelete = (blogId: string, next: Function) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(`${API_URL}/blog/${blogId}`,{
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            const responseData: {
                message: string;
            } = await response.json();
            if (!response.ok) { 
                throw new Error(responseData.message || response.statusText);
            }
            dispatch(blogsActions.receiveRequest());
            next(responseData.message);
        } catch (error) {
            dispatch(blogsActions.receiveRequest());
            next(error);
        }
    }
}

export default blogsSlice;