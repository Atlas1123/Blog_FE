import React from "react";
import { Input, useColorMode } from "@chakra-ui/react";
import { SERVER_API_URL } from "../../config";
import ApiError from "../../models/ApiError";

type Props = {
    setData: Function
}
const ImageUploadComponent: React.FC<Props> = ({ setData }) => {
    const API_URL = process.env.REACT_APP_BLOG_API_URL || SERVER_API_URL;
    const { colorMode } = useColorMode();

    const imageSelect = async (files: FileList) => {
        const formData = new FormData();
        Array.from(files).map((file: File) => {
            formData.append("imageCollection", file);
            return file;
        });
        const response = await fetch(`${API_URL}/upload/image`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            const responseData: ApiError = await response.json();
            throw new Error(responseData.message || response.statusText);
        }

        const responseData: { imageUrls: string[]; message: string } =
            await response.json();
        const uploadedImageUrl = responseData.imageUrls[0];
        setData(uploadedImageUrl);
    }

    return (
        <>
            <Input 
            type="file"
            aria-label = "Image"
            bg={colorMode === "light" ? "white" : "inherit"}
            onChange={(event) => {
                imageSelect(event.target.files ? event.target.files : new FileList());
            }} />
        </>
    )
}

export default ImageUploadComponent;