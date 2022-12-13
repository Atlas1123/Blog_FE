// node_modules
import React from "react";
import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

// components
import HeaderComponent from "../Header";
import FooterComponent from "../Footer";

// consts
import { PATH } from "../../consts";

const LayoutComponent: React.FC = (props) => {
    const location = useLocation();

    return (
        <>
            {location.pathname !== PATH.SIGNIN && location.pathname !== PATH.SIGNUP ?
            <HeaderComponent></HeaderComponent> : '' }
            <Flex
                justify="center"
                bgColor={"#fff"}
                align={
                    location.pathname === PATH.HOME ||
                    location.pathname === PATH.SIGNIN ||
                    location.pathname === PATH.SIGNUP ||
                    location.pathname === PATH.PROFILE
                        ? "center"
                        : "flex-start"
                }
                w="100%"
                minH="87vh"
                h={
                    location.pathname ===  PATH.SIGNIN ||
                    location.pathname === PATH.SIGNUP ?
                    "100vh" : "auto"
                }
            >
                {props.children}
            </Flex>
            {location.pathname !== PATH.SIGNIN && location.pathname !== PATH.SIGNUP ?
            <FooterComponent></FooterComponent> : '' }
        </>
    );
};

export default LayoutComponent;
