import React, {useRef, useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Box, Button, Text, Heading, useToast } from "@chakra-ui/react";
import { ThumbUp } from "@material-ui/icons";

import { fetchBlog, fetchThumbUp, fetchDelete } from "../../store/blog-slice";
import { RootState } from "../../store";

import { PATH } from "../../consts";
import { BASE_SERVER_API_URL } from "../../config";

import "./blog.single.css";

type BlogId = {
    id: string;
};

const BlogSinglePage = () => {
    const blogs = useSelector((state: RootState) => state.blogs.blogs);
    const dispatch = useDispatch();
    const { id } = useParams<BlogId>();
    const me = useSelector((state: RootState) => state.me.me);
    const toast = useToast();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchBlog(id));
    }, [dispatch, id]);

    const onThumbUp = () => {
        dispatch(
            fetchThumbUp(blogs[0].id, (message: string, resType: number) => {
                toast({
                    title: `${message}`,
                    status: ((resType === 200) ? "success" : "error"),
                    isClosable: true,
                    duration: 3000
                })
            })
        )
    }

    const onDelete = () => {
        if(window.confirm("Are you sure?")) {
            dispatch(
                fetchDelete(blogs[0].id, (message: string) => {
                    toast({
                        title: `${message}`,
                        status: "success",
                        isClosable: true,
                        duration: 3000
                    });
                    history.push(PATH.BLOGS);
                })
            );
        }
    }

    console.log(blogs);
    return (
        <div className="page-container blog-single-page">
            {            
                blogs.map(blog =>
                    <Box className="blog-single">
                        <Box className="blog-content">
                            <Flex className="blog-single-header">
                                <Heading className="blog-title">
                                    { blog.title } {`( ${blog.username} )`}
                                </Heading>
                                <Link to={ PATH.BLOGS } >
                                    <Button bg={"black"} color={"white"}>Go to Blogs</Button> </Link>
                            </Flex>
                            <Text className="blog-text">
                                { blog.text }
                            </Text>
                        </Box>
                        <Box className="blog-img">
                            { blog.imageUrl ? (
                                <img src={`${BASE_SERVER_API_URL}${blog.imageUrl}`} alt="" />
                            ) : (
                                <p>Attach image is nothing.</p>
                            )}
                        </Box>
                        <Flex className="btn-area">
                            <Button type="button" onClick={ onThumbUp }><ThumbUp /><span>{`( ${blog.like} )`}</span></Button>
                            {
                                me.id === blog.userId && (
                                    <>
                                    <Link to={`${PATH.BLOG}/update/${blog.id}`}>
                                        <Button type="button" bg={"black"} color="white" className="btn btn-primary">update</Button>
                                    </Link>
                                    <Button type="button" bg={"black"} color="white" onClick={ onDelete } className="btn btn-danger">delete</Button>
                                    </>
                                )
                            }
                        </Flex>
                    </Box>
                )
            }
            {/* {
                blogs.map(blog => <p>{blog.title}</p>)
            } */}
        </div>
    );
}

export default BlogSinglePage;