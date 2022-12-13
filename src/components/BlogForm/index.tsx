import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import {
    Input,
    Button,
    Heading,
    FormControl,
    useColorMode,
    Box,
    Text,
    Textarea,
    Image,
} from "@chakra-ui/react";

import ImageUploadComponent from "../ImageUpload";

import { BASE_SERVER_API_URL } from "../../config";

import { PATH } from "../../consts";

import "./blog.form.css";

type Props = {
    data: {
        title: string;
        text: string;
        imageUrl: string;
    };
    setData: Function;
};

const BlogFormComponent: React.FC<Props> = ({ data, setData }) => {
    const { colorMode } = useColorMode();
    console.log(data)
    const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const textRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
    const [imageUrl, setImageUrl] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setData(titleRef.current.value, textRef.current.value, imageUrl);
    }

    useEffect(() => {
        setImageUrl(data.imageUrl);
    }, [data.imageUrl]);

    return(
        <div className="page-container">
        <div className="new-blog-container">
            <Heading mb={"15px"}>Blog Form</Heading>
            <form action="#" onSubmit={handleSubmit} className="blog-form">
                <FormControl isRequired>
                    <Text mb="8px">Title</Text>
                    <Input
                        type="title"
                        aria-label="Title"
                        bg={colorMode === "light" ? "white" : "inherit"}
                        ref={titleRef}
                        defaultValue={data.title}
                    />
                </FormControl>
                <FormControl isRequired>
                    <Text mb="8px">Text</Text>
                    <Textarea
                        aria-label="Text"
                        bg={colorMode === "light" ? "white" : "inherit"}
                        resize={"none"}
                        ref={textRef}
                        defaultValue={data.text}
                        rows={6}
                    />
                </FormControl>
                <FormControl>
                    <Text mb="8px">Image</Text>
                    <ImageUploadComponent
                        setData={(uploadedImageUrl: string) =>
                            setImageUrl(uploadedImageUrl)
                        }
                    />
                    {imageUrl && (
                        <Image
                            width={"100%"}
                            height={"300px"}
                            src={`${BASE_SERVER_API_URL}${imageUrl}`}
                        />
                    )}
                </FormControl>
                <Box textAlign="left" className="btn-group">
                    <Button
                        type="submit"
                        boxShadow="sm"
                        _hover={{ boxShadow: "md" }}
                        _active={{ boxShadow: "lg" }}
                    >
                        Save your Blog!
                    </Button>
                    <Link to={PATH.BLOGS}>
                        <Button
                            type="button"
                            boxShadow="sm"
                            _hover={{ boxShadow: "md" }}
                            _active={{ boxShadow: "lg" }}
                        >
                            Go to blogs
                        </Button>
                    </Link>
                </Box>
            </form>
        </div>
        </div>
    )
}

export default BlogFormComponent;