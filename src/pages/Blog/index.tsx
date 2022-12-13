import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PATH } from "../../consts";

import { Box, Text, Button, Select, Input } from "@chakra-ui/react";
import { SearchIcon, ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import PaginationComponent from "../../components/Pagination";
import BlogSummeryComponent from "../../components/BlogSummery";

import { fetchBlogs } from "../../store/blog-slice";
import { RootState } from "../../store";

import "./blog.css";

const BlogPage: React.FC = (props) => {
    const blogs = useSelector((state: RootState) => state.blogs.blogs);
    const count  = useSelector((state: RootState) => state.blogs.count);
    const dispatch = useDispatch();

    const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const [allPagesNumber, setAllPagesNumber] = useState(0);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [itemCount, setItemCount] = useState<number>(5);
    const [sortType, setSortType] = useState<string>("blogs.createdAt");
    const [sortOrder, setSortOrder] = useState<string>("desc");
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        dispatch(fetchBlogs(pageIndex, itemCount, title, sortType, sortOrder));
    }, [dispatch, pageIndex, itemCount, title, sortType, sortOrder]);

    useEffect(() => {
        setAllPagesNumber(Math.ceil(count / itemCount));
    }, [count, itemCount]);

    return (
        <>
        <div className="page-container">
            <div className="main-blog-container">
                <div className="blog-header-bar">
                    <h1>Welcome to my Blog page.</h1>
                    <div className="pull-right new-blog">
                        <Link to={PATH.NEWBLOG}>
                        <Button type="button" color={"#fff"} bg={"black"} className="btn btn-primary">new blog</Button>
                        </Link>
                    </div>
                </div>
                <div className="main-page">
                    <div className="top-bar">
                        <div className="pagelength">
                            <Select className="form-control"
                            defaultValue={itemCount}
                            onChange={(event) => {
                                setItemCount(Number(event.target.value));
                            }}>
                                <option value={5}>5 blogs</option>
                                <option value={10}>10 blogs</option>
                                <option value={20}>20 blogs</option>
                            </Select>
                        </div>
                        <div className="sort-type">
                            <Select className="form-control"
                                defaultValue={sortType}
                                onChange={(event) => {
                                    setSortType(String(event.target.value));
                                }}>
                                <option value="blogs.createdAt">date</option>
                                <option value="like">like</option>
                            </Select>
                        </div>
                        <div className="sort-order-area">
                            <Button 
                                type="button" 
                                color={"#fff"} 
                                bg={sortOrder == "asc" ? "black" : "#b7b6b6"} 
                                _hover={{backgroundColor: "black"}}
                                className="btn btn-primary" 
                                onClick={()=>{setSortOrder("asc")}}><ArrowUpIcon /></Button>
                            <Button 
                                type="button" 
                                color={"#fff"} 
                                bg={sortOrder == "desc" ? "black" : "#b7b6b6"} 
                                _hover={{backgroundColor: "black"}}
                                className="btn btn-primary" 
                                onClick={()=>{setSortOrder("desc")}}><ArrowDownIcon /></Button>
                        </div>
                        <div className="blog-search-area">
                            <div style={{display: "flex"}}>
                                <Input 
                                type="text" 
                                placeholder="please input search title."
                                ref={titleRef} />
                                <button type="button" onClick={() => setTitle(titleRef.current.value)} className="btn btn-primary blog-search-btn">
                                    <SearchIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="blog-list-area">
                        <div className="blog-base-list">
                            {blogs.length > 0 ? (
                                blogs.map((blog) => (
                                    <BlogSummeryComponent
                                        key={blog.id} blog={blog}
                                    />
                                ))
                            ) : (
                                <Text>No result!</Text>
                            )}
                            <div className="pagination-area">
                                <PaginationComponent
                                    allPagesNumber={allPagesNumber}
                                    pageChange={(page: number = 1) => {
                                        setPageIndex(page);
                                    }}
                                ></PaginationComponent>
                            </div>
                        </div>
                        <div className="blog-popular-list"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogPage;