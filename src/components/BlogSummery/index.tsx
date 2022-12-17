import React from "react";
import { Link } from "react-router-dom";;
import { PATH } from "../../consts";
import { Heading, Box, Flex, Text } from "@chakra-ui/react";
import { ThumbUp } from "@material-ui/icons";

import Blog from "../../models/Blog";

// import { UPLOAD_PATH }
import { BASE_SERVER_API_URL } from "../../config";

import "./blog.summery.css";
import starImg from "../../assets/images/star.svg";

type Props = {
    blog: Blog;
}

const BlogSummeryComponent: React.FC<Props> = ({ blog, ...props }) => {
    return (
        <>
            <Flex className="blog-single">
                <Box className="content-area">
                    <Link to={`${PATH.BLOG}/blogsingle/${blog.id}`}>
                        <Heading className="blog-title">
                            { blog.title }
                        </Heading>
                    </Link>
                    <Text className="blog-text">
                        { blog.text.length > 150 ? blog.text.substring(0, 150) + '...' : blog.text }
                    </Text>
                    <Box className="info-area">
                        <Heading className="blog-user-name">{ blog.username }</Heading>
                        <Flex className="info-area-flex">
                            <span className="date-text">Jun 14 <span className="dot">.</span> 3 min read <img src={starImg}></img></span>
                            |&nbsp;&nbsp; <ThumbUp fontSize={"small"} /> <span className="likes">{blog.like}</span>
                        </Flex>
                    </Box>
                </Box>
                <Box className="image-area">
                    <img src={`${BASE_SERVER_API_URL}${blog.imageUrl}`} alt="" />
                </Box>
            </Flex>
        </>
    )
}

export default BlogSummeryComponent;