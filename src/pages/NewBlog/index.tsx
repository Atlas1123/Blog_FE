import React from "react";
import { useHistory } from "react-router-dom";

import { SERVER_API_URL } from "../../config";

import { useToast } from "@chakra-ui/react";

import ApiError from "../../models/ApiError";

//component
import BlogFormComponent from "../../components/BlogForm";

// consts
import { PATH } from "../../consts";

const NewBlogPage = () => {
    const API_URL = process.env.REACT_APP_BLOG_API_URL || SERVER_API_URL;
    
    const history = useHistory();
    const toast = useToast();

    const onNewBlogSave = async (
            title: string, 
            text: string, 
            imageUrl: string
        ) => {
            try {
                const response = await fetch(`${API_URL}/blog/insert`, {
                    method: "POST",
                    body: JSON.stringify({
                        title,
                        text,
                        imageUrl,
                    }),
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    const responseData: ApiError = await response.json();
                    throw new Error(responseData.message || response.statusText);
                }
                const responseData: {
                    message: string;
                } = await response.json();
                toast({
                    title: `${responseData.message}`,
                    status: "info",
                    isClosable: true,
                    duration: 3000,
                });
                history.push(PATH.BLOGS);
            } catch (error) {
                toast({
                    title: `${error}`,
                    status: "error",
                    isClosable: true,
                    duration: 3000,
                });
            }
    }

    return (
        <>
            <BlogFormComponent data={{ title: "", text: "", imageUrl: "" }}
            setData={onNewBlogSave}>
            </BlogFormComponent>
        </>
    )
}

export default NewBlogPage;