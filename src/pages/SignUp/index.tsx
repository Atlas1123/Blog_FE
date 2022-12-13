// node_modules
import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";

// components
import SignUpFormComponent from "../../components/SignUp";
import AuthLayoutComponent from "../../components/AuthLayout";

const SignUpPage = () => {
    const { colorMode } = useColorMode();

    return (
        <AuthLayoutComponent>
            <SignUpFormComponent />
        </AuthLayoutComponent>
    );
};

export default SignUpPage;
