import React, {useRef, useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3 from "web3";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Box, Button, Text, Heading, useToast } from "@chakra-ui/react";
import { Category, ThumbUp } from "@material-ui/icons";

import { fetchBlog, fetchThumbUp, fetchDelete } from "../../store/blog-slice";
import { RootState } from "../../store";

import { PATH } from "../../consts";
import { BASE_SERVER_API_URL } from "../../config";

import getBlogContract from "../../contracts/Blog";

import "./blog.single.css";

type BlogId = {
    id: string;
};

declare let window: any;

const BlogSinglePage = () => {
    const blogs = useSelector((state: RootState) => state.blogs.blogs);
    const dispatch = useDispatch();
    const { id } = useParams<BlogId>();
    const toast = useToast();
    const history = useHistory();

    const [activateWalletAddress, setAWAddress] = useState<string>("");
    const [purchaseList, setPurchaseList] = useState<any>([]);
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer  = provider.getSigner();
    const contract = getBlogContract(signer as ethers.Signer);

    const getPurchaseList = async () => {
        const blogs = await contract.getBlogs();
        setPurchaseList(blogs);
    }

    const getAccount = async () => {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        });
        const account = accounts[0];
        console.log(account);
        setAWAddress(account);
    }
    getAccount();

    useEffect(() => {
        dispatch(fetchBlog(id));
        getPurchaseList();
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

    const onPurchase = (blogId: number) => {
        // console.log(blogId)
        toast({
            title: `Please wait for more than five second.`,
            status: "info",
            isClosable: true,
            duration: 80000
        });
        const purchaseToContract = async () => {
            
            try {
                const blogs = await contract.purchaseBlog(blogId);
                await blogs.wait();
                getPurchaseList();
                toast.closeAll();
            } catch (error) {
                console.log(error);
            }
        }
        getAccount();
        purchaseToContract();
    }

    console.log(purchaseList);
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
                            {activateWalletAddress.toUpperCase() === String(purchaseList[blog.id]).toUpperCase() ? (
                                <>
                                <Link to={`${PATH.BLOG}/update/${blog.id}`}>
                                    <Button type="button" bg={"black"} color="white" className="btn btn-primary">update</Button>
                                </Link>
                                <Button type="button" bg={"black"} color="white" onClick={ onDelete } className="btn btn-danger">delete</Button>
                                </>) : (
                                    <>
                                        <Button type="button" onClick={ onThumbUp }><ThumbUp /><span>{`( ${blog.like} )`}</span></Button>
                                        <Button type="button" bg={"black"} color="white" onClick={()=>{onPurchase(Number.parseInt(blog.id))}  } className="btn btn-danger">Purchase</Button>
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