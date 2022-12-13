import React, { useContext } from "react";
import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import ContactFooterComponent from "../ContactFooter";

import "../../assets/footer.css";
import heartimg from "../../assets/images/heart.svg";
import { PATH } from "../../consts";

const FooterComponent: React.FC = () => {
    const location = useLocation();
    return (
        <>
            <ContactFooterComponent></ContactFooterComponent>
            <Flex className="footer page-container">
                <p>Copyright &copy;2022 All rights reserved | This template is made with <img src={heartimg}></img>by <span>Colorlib</span></p>
            </Flex>
        </>
    )
};

export default FooterComponent;